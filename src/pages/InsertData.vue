<template>
  <div style="padding: 16px">
    <form @submit.prevent="search">
      <q-field>
        <q-input float-label="Número da Vaca" v-model="number"/>
      </q-field>
      <br>
      <div class="flex justify-center">
        <q-btn type="submit" color="green" label="Buscar"/>
      </div>
    </form>
    <br>
    <div v-if="animal.number">
      <p>
        <q-card inline style="width: 100%">
          <q-card-title>
            {{animal.name}}
            <!--  <q-rating slot="subtitle" v-model="stars" :max="5" />-->
            <div slot="right" class="row items-center">
              <q-icon name="info"/>
              {{animal.fecudationType}}
            </div>
          </q-card-title>
          <q-card-main>
            <q-icon name="vpn_key"/>
            ID: {{animal.number}}
            <q-icon name="event"/>
            Nascimento: {{animal.birthday}}
            <br>
            <p class="text-faded">Último Parto: {{animal.parturition}}</p>
            <p class="text-faded">Data de Fecundação: {{animal.fecudation}}</p>
            <p
              class="text-faded"
            >Diagnóstico de Gestação: {{ animal.pregnancy ? 'Prenha' : 'Vazia'}}</p>
          </q-card-main>
          <q-card-separator/>
          <!--SEPARADOR PARA RELATO DE PREVISÕES-->
          <q-card-main v-if="animal.pregnancy">
            <q-icon name="note"/>RELATO DE PREVISÕES
            <p class="text-faded">Previsão de Parto: {{parturitionforecast()}}</p>
            <p class="text-faded">Previsão de Secagem: {{drying()}}</p>
            <p class="text-faded">Intervalo de Parto: {{breakParturition()}}</p>
          </q-card-main>
          <q-card-separator/>
          <q-card-actions>
            <q-btn round @click="edit" color="green" icon="edit" style="margin-right: 8px"/>
            <q-btn
              round
              @click="showModal = true"
              color="green"
              icon="add_comment"
              style="margin-right: 8px"
            />
            <q-btn
              round
              @click="showModal = true"
              color="green"
              icon="description"
              style="margin-right: 8px"
            />
          </q-card-actions>
        </q-card>
      </p>
    </div>
    <q-modal v-model="showModal" minimized>
      <div style="padding: 16px">
        <div class="q-title text-center">Adicionar Dados</div>
        <q-field>
          <q-input
            style="padding:16px"
            stack-label="Data último parto"
            type="date"
            v-model="animal.parturition"
          />
        </q-field>
        <q-field>
          <q-input
            style="padding:16px"
            stack-label="Data fecundação"
            type="date"
            v-model="animal.fecudation"
          />
        </q-field>
        <q-field>
          <q-radio
            style="padding:16px"
            val="cobertura"
            label="Cobertura"
            v-model="animal.fecudationType"
          />
          <q-radio
            style="padding:16px"
            val="inseminacao"
            label="Inseminação"
            v-model="animal.fecudationType"
          />
        </q-field>
        <q-field>
          <q-toggle style="padding:16px" v-model="animal.pregnancy" label="Prenha"/>
        </q-field>
        <q-btn round @click="save" color="green" icon="check" style="margin-right: 8px"/>
      </div>
    </q-modal>
  </div>
</template>

<script>
export default {
  name: "InsertData",
  data() {
    return {
      number: null,
      animal: {},
      showModal: false
    };
  },
  methods: {
    save() {
      this.$store.dispatch("editAnimal", this.animal);
      this.showModal = false;
    },
    search() {
      const vaca = this.$store.state.animals.find(animal => {
        return animal.number == this.number;
      });
      if (vaca) {
      } else {
        alert("Vaca não cadastrada!");
      }
      this.animal = vaca;
    },
    edit() {
      this.$router.push("/add-animal/" + this.animal.number);
    },
    parturitionforecast() {
      //previsão de parto
      var date = Date.parse(this.animal.fecudation);
      date += 283 * 86400000;
      var outraData = new Date(date);
      return outraData.toLocaleString();
    },
    drying() {
      // secagem
      var dateDrying = Date.parse(this.animal.fecudation);
      dateDrying += 223 * 86400000;
      var outraData = new Date(dateDrying);
      return outraData.toLocaleString();
    },
    breakParturition() {
      //consertar
      // intervalo de parto
      var dateParturition = new Date(this.animal.parturition);
      alert(this.parturitionforecast());
      var date = this.parturitionforecast();
      //alert(date);
      var dateForecast = new Date(date);
      var timeDiff = Math.abs(
        dateForecast.getTime() - dateParturition.getTime()
      );
      var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
      return diffDays + " Dias";
    },

    delayed() {
      var date1 = new Date(this.animal.parturition);
      var date2 = new Date(this.animal.fecudation);
      var timeDiff = Math.abs(date2.getTime() - date1.getTime());
      var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
      return diffDays + " Dias";
    }
  }
};
</script>