<template>
  <q-table title="Vacas Cadastradas" :data="$store.state.animals" :columns="columns" row-key="name"></q-table>
</template>


<script>
import moment from "moment";
export default {
  data: () => ({
    columns: [
      {
        name: "number",
        required: true,
        label: "ID",
        align: "left",
        field: "number",
        sortable: true,
        classes: "my-class",
        style: "width: 25px"
      },
      {
        name: "name",
        label: "Nome",
        field: "name",
        align: "left",
        style: "width: 250px",
        sortable: true
      },
      {
        name: "birthday",
        label: "Nascimento",
        field: "birthday",
        align: "left",
        sortable: true,
        format: val => moment(val).format("DD/MM/Y")
      }
    ]
  })
};
</script>
