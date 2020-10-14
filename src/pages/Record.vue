<template>
  <q-table
    title="Vacas Cadastradas"
    :data="$store.state.animals"
    :columns="columns"
    row-key="name"
  >
    <q-tr
      slot="body"
      slot-scope="props"
      :props="props"
      @click.native="rowClick(props.row.number)"
      class="cursor-pointer"
    >
      <q-td v-for="col in props.cols" :key="col.name" :props="props">
        # {{ col.value }} #
      </q-td>
    </q-tr>
  </q-table>
</template>


<script>
import moment from "moment";
export default {
  name: "Record",
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
        style: "width: 25px",
      },
      {
        name: "name",
        label: "Nome",
        field: "name",
        align: "left",
        style: "width: 250px",
        sortable: true,
      },
      {
        name: "birthday",
        label: "Nascimento",
        field: "birthday",
        align: "left",
        sortable: true,
        format: (val) => moment(val).format("DD/MM/Y"),
      },
    ],
  }),
  search() {
    const vaca = this.$store.state.animals.find((animal) => {
      return animal.number == this.number;
    });
    if (vaca) {
    } else {
      alert("Vaca não cadastrada!");
    }
    this.animal = vaca;
  },
  methods: {
    rowClick(evt, row) {
      console.log("clicked on", row);
      alert("Clicou");
    },
  },
};
</script>
