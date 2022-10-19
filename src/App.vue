<template>
  <div>
    <v-app-bar
      color="deep-purple accent-4"
      dense
      dark
    >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>Dashboard</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <template v-slot:extension>
        <v-tabs align-with-title>
          <v-tab><router-link to="/">Home</router-link></v-tab>
          <v-tab><router-link to="/about">About</router-link></v-tab>
        </v-tabs>
      </template>

      <v-menu
        left
        bottom
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            icon
            v-bind="attrs"
            v-on="on"
          >
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item
            v-for="n in 5"
            :key="n"
            @click="() => {}"
          >
            <v-list-item-title>Option {{ n }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>    
    <router-view/>
    
    <!-- <Grid
      ref="grid"
      :style="{ height: '550px' }"
      :data-items="result"
      :edit-field="'inEdit'"
      :sortable="true"
      :sort="sort"
      :filterable="true"
      :filter="filter"
      :pageable="true"
      :skip="skip"
      :take="take"
      @rowclick="rowClick"
      @sortchange="sortChangeHandler"
      @filterchange="filterChangeHandler"
      @pagechange="pageChangeHandler"
      @itemchange="itemChange"
      :columns="columns"
    >
      <grid-toolbar>
        <div @click="closeEdit">
          <kbutton title="Add new" :theme-color="'primary'" @click="addRecord">
            Add new
          </kbutton>
        </div>
      </grid-toolbar>
    </Grid> -->
  </div>
</template>
<script>
// import { Grid, GridToolbar } from '@progress/kendo-vue-grid';
// import { Button } from '@progress/kendo-vue-buttons';
// import { process } from '@progress/kendo-data-query';
// // import { mapGetters } from 'vuex';
// import { GridService } from './services/GridService';

// export default {
//   components: {
//     'Grid': Grid,
//     'grid-toolbar': GridToolbar,
//     'kbutton': Button,
//   },
//   data: function () {
//     return {
//       updatedData: [],
//       editID: null,
//       group: [ { field: 'UnitsInStock' } ],
//       expandedItems: [],
//       sort: null,
//       filter: null,
//       skip: 0,
//       take: 10,
//       columns: [
//         { field: 'ProductID', title: 'ID', width: '150px' },
//         { field: 'ProductName', title: 'Name' },
//         {
//           field: 'FirstOrderedOn',
//           editor: 'date',
//           title: 'First Ordered',
//           format: '{0:d}',
//         },
//         {
//           field: 'UnitsInStock',
//           title: 'Units',
//           width: '150px',
//           editor: 'numeric',
//         },
//         { field: 'Discontinued', title: 'Discontinued', filterable: 'true', editor: 'boolean' },
//       ],
//       gridData: []
//       // gridData: [
//       //   {
//       //     ProductID: 1,
//       //     ProductName: 'Chai',
//       //     UnitsInStock: 39,
//       //     Discontinued: false,
//       //     FirstOrderedOn: new Date(1996, 8, 20),
//       //   },
//       //   {
//       //     ProductID: 2,
//       //     ProductName: 'Chang',
//       //     UnitsInStock: 17,
//       //     Discontinued: false,
//       //     FirstOrderedOn: new Date(1996, 7, 12),
//       //   },
//       //   {
//       //     ProductID: 3,
//       //     ProductName: 'Aniseed Syrup',
//       //     UnitsInStock: 13,
//       //     Discontinued: false,
//       //     FirstOrderedOn: new Date(1996, 8, 26),
//       //   },
//       //   {
//       //     ProductID: 4,
//       //     ProductName: "Cajun Seasoning",
//       //     UnitsInStock: 53,
//       //     Discontinued: false,
//       //     FirstOrderedOn: new Date(1996, 9, 19),
//       //   },
//       //   {
//       //     ProductID: 5,
//       //     ProductName: 'Orange',
//       //     UnitsInStock: 51,
//       //     Discontinued: false,
//       //     FirstOrderedOn: new Date(1996, 9, 19),
//       //   },
//       //   {
//       //     ProductID: 6,
//       //     ProductName: 'Banana',
//       //     UnitsInStock: 22,
//       //     Discontinued: false,
//       //     FirstOrderedOn: new Date(1996, 9, 19),
//       //   },
//       //   {
//       //     ProductID: 7,
//       //     ProductName: 'Apple',
//       //     UnitsInStock: 16,
//       //     Discontinued: false,
//       //     FirstOrderedOn: new Date(1996, 9, 19),
//       //   },
//       //   {
//       //     ProductID: 8,
//       //     ProductName: 'Peach',
//       //     UnitsInStock: 10,
//       //     Discontinued: false,
//       //     FirstOrderedOn: new Date(1996, 9, 19),
//       //   },
//       // ],
//     };
//   },
//   computed: {
//     getData() {
//       return this.gridData.map((item) =>
//         Object.assign({ inEdit: item.ProductID === this.editID }, item)
//       );
//     },
//     result: {
//       get: function () {
//         return process(this.gridData, {
//           sort: this.sort,
//           filter: this.filter,
//           take: this.take,
//           skip: this.skip,
//         });
//       },
//     },
//     // ...mapGetters({
//     //   gridData: "getProductsState"
//     // })
//   },
//   methods: {
//     itemChange: function (e) {
//       const data = this.gridData.slice();
//       const index = data.findIndex((d) => d.ProductID === e.dataItem.ProductID);
//       data[index] = { ...data[index], [e.field]: e.value };
//       this.gridData = data;
//       if (e.dataItem) {
//         e.dataItem[e.field] = e.value;
//       }
//     },
//     rowClick: function (e) {
//       this.gridData.map((item) => (item.inEdit = false));
//       this.editID = e.dataItem.ProductID;
//       e.dataItem.inEdit = true;
//     },
//     closeEdit(e) {
//       if (e.target === e.currentTarget) {
//         this.editID = null;
//       }
//     },
//     addRecord() {
//       const newRecord = { ProductID: this.gridData.length + 1 };
//       const data = this.gridData.slice();
//       data.unshift(newRecord);
//       this.gridData = data;
//       this.editID = newRecord.ProductID;
//     },
//     sortChangeHandler(event) {
//       this.sort = event.sort;
//     },
//     filterChangeHandler(event) {
//       this.filter = event.filter;
//     },
//     pageChangeHandler(event) {
//       this.take = event.page.take;
//       this.skip = event.page.skip;
//     },
//   },
//   async created () {
//     // this.$store.dispatch("productsModule/getProducts")
//     try {
//       let response = await GridService.getAllProducts();
//       this.gridData = response.data;
//       console.log(this.gridData,"gridData")
//     } catch (error) {
//       console.log(error)
//     }
//   }
// };
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
a {
  font-weight: bold;
  color: #42b983;
  text-decoration: none;
}
a.router-link-exact-active {
  color: #42b983;
  text-decoration: none;
}
</style>