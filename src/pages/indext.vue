<template>
  <div style="padding: 16px">
    <div class="q-title text-center">{{ title }}</div>
    </br>
    <p>
      <q-card inline style="width: 100%">
        <q-card-title>
          <div class="text-h6">Vacas Para Parir</div>
          </q-card-title>
        <q-card-main>
          <img src="https://www.comprerural.com/wp-content/uploads/2017/06/vacas-jersey-1021x545.jpg" width="100%">
        </q-card-main>
        <q-card-separator />
        <q-card-actions>
          <q-btn flat round color="red" icon="favorite" />
        <q-btn flat round color="teal" icon="bookmark" />
        <q-btn flat round color="primary" icon="share" />
        </q-card-actions>
      </q-card>
      <q-card inline style="width: 100%">
        <q-card-title>
          <div class="text-h6">Vacas Para Secar</div>
          </q-card-title>
        <q-card-main>
          <img src="https://dicas.boisaude.com.br/wp-content/uploads/2019/02/Ivermectitna-para-vacas-prenhas.jpeg" width="100%">
        </q-card-main>
        <q-card-separator />
        <q-card-actions>
          <q-btn flat round color="red" icon="favorite" />
        <q-btn flat round color="teal" icon="bookmark" />
        <q-btn flat round color="primary" icon="share" />
        </q-card-actions>
      </q-card>
      <q-card inline style="width: 100%">
        <q-card-title>
          <div class="text-h6">Vacas Vazias</div>
          </q-card-title>
        <q-card-main>
          <img src="https://www.comprerural.com/wp-content/uploads/2017/06/vacas-jersey-1021x545.jpg" width="100%">
        </q-card-main>
        <q-card-separator />
        <q-card-actions>
          <q-btn flat round color="red" icon="favorite" />
        <q-btn flat round color="teal" icon="bookmark" />
        <q-btn flat round color="primary" icon="share" />
        </q-card-actions>
      </q-card>
    </p>
  </div>
</template>
<script>
export default {
  name: "indext",
  data: () => ({
    animal: {},
    title: "Início",
  }),
};
</script>