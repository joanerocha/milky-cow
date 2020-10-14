<template>
  <div style="padding: 16px">
    <div class="q-title text-center">{{ title }}</div>
    <form id="app" @submit.prevent="search">
      <div class="row gutter-md">
        <div class="col-12">
          <q-field>
            <q-input float-label="Número da Vaca" v-model="number"/>
          </q-field>
        </div>
        <br>
        <div class="flex justify-center">
          <q-btn type="submit" color="green" label="Buscar"/>
        </div>
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
            <div>
              <q-icon name="vpn_key"/>
              ID: {{animal.number}}
              <q-icon name="event"/>
              Nascimento: {{animal.birthday | date}}
            </div>
          </q-card-title>
          <q-card-main>
            <p class="text-faded">Último Parto: {{animal.parturition | date}}</p>
            <p class="text-faded">Data de Fecundação: {{animal.fecudation | date}}</p>
            <p
              class="text-faded"
            >Diagnóstico de Gestação: {{ animal.pregnancy ? 'Prenha' : 'Vazia'}}</p>
          </q-card-main>
          <q-card-separator/>
          <!--SEPARADOR PARA RELATO DE PREVISÕES-->
          <q-card-main v-if="animal.pregnancy">
            <q-card-title>
              <q-icon name="note"/>RELATO DE PREVISÕES
            </q-card-title>
            <p class="text-faded">Previsão de Parto: {{animal.fecudation | dateAdd('282')}}</p>
            <p class="text-faded">Previsão de Secagem: {{animal.fecudation | dateAdd('222')}}</p>
            <p
              class="text-faded"
            >Intervalo de Parto: {{animal.parturition | dateInterval(282, animal.fecudation)+ ' DIAS'}}</p>
          </q-card-main>
          <q-card-separator/>
          <!--SEPARADOR PARA RELATO DE PARTO-->
          <q-card-main v-if="animal.relatorio && animal.pregnancy">
            <q-card-title>
              <q-icon name="note"/>RELATO DE PARTO
            </q-card-title>
            <p class="text-faded">Quantidade de Bezerros: {{animal.qtdBezerros}}</p>
            <p class="text-faded">Data do Parto: {{animal.dateParto | date}}</p>
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
              @click="showModal2 = true"
              color="green"
              icon="insert_chart"
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
    <q-modal v-model="showModal2" minimized>
      <div style="padding: 16px">
        <div class="q-title text-center">Dados do Parto</div>
        <q-field>
          <q-input
            style="padding:16px"
            stack-label="Quantos Bezerros?"
            type="number"
            v-model="animal.qtdBezerros"
          />
        </q-field>

        <q-field>
          <q-input
            style="padding:16px"
            stack-label="Data Nascimento Bezerro"
            type="date"
            v-model="animal.dateParto"
          />
        </q-field>

        <q-field>
          <q-toggle style="padding:16px" v-model="animal.relatorio" label="Pariu"/>
        </q-field>
        <q-btn round @click="save" color="green" icon="check" style="margin-right: 8px"/>
      </div>
    </q-modal>
  </div>
</template>

<script>
import moment from "moment";
export default {
  name: "InsertData",
  data() {
    return {
      number: null,
      animal: {},
      showModal: false,
      showModal2: false
    };
  },
  methods: {
    save() {
      this.$store.dispatch("editAnimal", this.animal);
      this.showModal = false;
      this.showModal2 = false;
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
    edit() {
      this.$router.push("/add-animal/" + this.animal.number);
    }
  }
};
</script>