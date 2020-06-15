<template>
  <div class="home">
    <!-- <a-range-picker /> -->
    <a-table :columns="columns" :data-source="data" :loading="loading" style="margin: 20px 0">
      <template slot="name" slot-scope="name">{{ name }}</template>
    </a-table>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import axios from 'axios';

const columns = [
  {
    title: 'name',
    dataIndex: 'name',
    sorter: true,
    width: '20%',
    scopedSlots: { customRender: 'name' },
  },
  {
    title: 'createdAt',
    dataIndex: 'createdAt',
    sorter: true,
    width: '20%',
  },
  {
    title: 'note',
    dataIndex: 'note',
  },
  {
    title: 'tags',
    dataIndex: 'tags',
  },
];
@Component({
  components: {
  },
})
export default class App extends Vue {
  private data: Array<any> = [];

  private paginations = {};

  private loading = false;

  private columns = columns;

  async mounted() {
    console.log(this.data);
    const result = await axios.post('/graphql-shopify', {
      query: `
        {
          orders(first: 10) {
            edges {
              node {
                id
                name
                note
                tags
                createdAt
              }
            }
          }
        }
      `,

    });
    console.log(result.data);
    const list: [] = result.data.data.orders.edges;
    this.data = list.map((edge: any) => edge.node);
    console.log(this.data);
  }
}
</script>
