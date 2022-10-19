<template>
  <v-container>
    <grid :style="{ height: '218px' }" :data-items="items" :columns="columns">
      <template v-slot:anil="{ props }">
        <!-- <pre>{{listeners}}</pre> -->
        <td
          :class="props.className"
          v-html="getNestedValue(props.field, props.dataItem)"
        >
        </td>
      </template>
      <template v-slot:myTemplate2="{ props }">
        <td
          :class="props.className"
          v-html="getNestedValue(props.field, props.dataItem)"
        ></td>
      </template>
    </grid>
  </v-container>
</template>
<script>
import { Grid } from '@progress/kendo-vue-grid';

export default {
  components: {
    grid: Grid,
  },
  data: function () {
    return {
      columns: [
        { field: 'ProductID' },
        { field: 'ProductName', title: 'Product Name', cell: 'anil' },
        { field: 'UnitPrice', title: 'Unit Price', cell: 'myTemplate2' },
      ],
      items: [
        {
          ProductID: 1,
          ProductName:
            "This is <a href='https://www.google.com' target='_blank'><b>BOLD text</b></a>",
          UnitPrice: 18.0,
        },
        {
          ProductID: 2,
          ProductName:
            "Check <span style='color: red; font-weight: bold'>this styled text</span>",
          UnitPrice: 19.0,
        },
        {
          ProductID: 3,
          ProductName: 'hello my name is <strong> Giuseppe </strong>',
          UnitPrice: 10.0,
        },
        {
          ProductID: 4,
          ProductName: "<i>Chef Anton's </i>Cajun Seasoning",
          UnitPrice: 22.0,
        },
        {
          ProductID: 5,
          ProductName: "<span style='color: green'> This is green text</span>",
          UnitPrice: 22.0,
        },
      ],
    };
  },
  methods: {
    getNestedValue: function (fieldName, dataItem) {
      const path = fieldName.split('.');
      let data = dataItem;
      path.forEach((p) => {
        data = data ? data[p] : undefined;
      });

      return data;
    },
  },
};
</script>

<style>
.k-grid a {
  color: #42b983;
}
.k-grid a:hover {
  text-decoration: none;
  color: #0af38a;
}

</style>