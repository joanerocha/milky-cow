<template>
  <div style="padding: 16px">
    <div class="q-title text-center">{{ title }}</div>
    <form id="app" @submit.prevent="save">
      <div class="row gutter-md">
        <div class="col-12">
          <q-field>
            <q-input
              stack-label="Nome da Vaca"
              v-model="animal.name"
              :rules="[val => !!val || 'Field is required']"
            />
          </q-field>
        </div>
        <div class="col-12">
          <q-field>
            <q-input stack-label="Número da Vaca" v-model="animal.number"/>
          </q-field>
        </div>
        <div class="col-12">
          <q-field>
            <q-input type="date" stack-label="Data de Nascimento" v-model="animal.birthday"/>
          </q-field>
        </div>
      </div>
      <br>
      <div style="padding: 16px" class="flex justify-center">
        <q-btn type="submit" color="green" label="Salvar"/>
      </div>
    </form>
    <div>
      <div>
        <q-table id="app" 
          title="Vacas Cadastradas"
          :data="$store.state.animals"
          :columns="columns"
          row-key="id"
          @click.native="search"
        >
        <q-tr>
          <q-td>

            </q-td>
          </q-tr>
          </q-table>
      </div>
    </div>
  </div>
</template>

<script>

import moment from "moment";
export default {
  name: "AddAnimal",
  data: () => ({
    animal: {},
    title: "Cadastro de Animal",
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
  }),
  methods: {
    save() {
      if (this.$route.params.number) {
        alert("vaca já cadastrada!");
        this.$store.dispatch("editAnimal", this.animal);
      } else {
        if (this.$route.params.number) {
          this.$store.dispatch("editAnimal", this.animal);
        } else {
          this.$store.dispatch("saveAnimal", this.animal);
          this.animal = {};
        }
      }
    }
  },
  created() {
    if (this.$route.params.number) {
      const vaca = this.$store.state.animals.find(animal => {
        return animal.number === this.$route.params.number;
      });
      if (vaca) {
        this.title = "Editar Animal";
      } else {
        alert("Vaca não cadastrada!");
      }
      this.animal = vaca;
    }
  },
  search() {
    const vaca = this.$store.state.animals.find(animal => {
      return animal.number === this.number;
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