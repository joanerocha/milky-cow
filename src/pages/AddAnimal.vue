<template>
  <div style="padding: 16px">
    <div class="q-title text-center">{{ title }}</div>
    <!--<span>{{ animal }}</span>-->
    <form @submit.prevent="save">
      <q-field>
        <q-input style="padding: 16px" float-label="Número da Vaca" v-model="animal.number"/>
      </q-field>
      <q-field>
        <q-input style="padding: 16px" float-label="Nome da Vaca" v-model="animal.name"/>
      </q-field>
      <q-field>
        <q-input style="padding: 16px" float-label="Data de Nascimento" v-model="animal.birthday"/>
      </q-field>
      <br>
      <div class="flex justify-center">
        <q-btn type="submit" color="green" label="Salvar"/>
      </div>
    </form>
    <ul>
      <li v-for="animal in $store.state.animals" :key="animal.number">{{animal.name}}</li>
    </ul>
  </div>
</template>

<style>
</style>

<script>
export default {
  name: "AddAnimal",
  data() {
    return {
      animal: {},
      title: "Cadastro de Animal"
    };
  },
  methods: {
    save() {
      if (this.$route.params.number){
        alert("vaca já cadastrada!")
        this.$store.dispatch("editAnimal", this.animal);
      }else{
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
        return animal.number == this.$route.params.number;
      });
      if (vaca) {
        this.title = "Editar Animal";
      } else {
        alert("Vaca não cadastrada!");
      }
      this.animal = vaca;
    }
  }
};
</script>
