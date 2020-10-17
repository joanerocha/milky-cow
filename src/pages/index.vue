<template>
  <div style="padding: 16px">
    <div class="fixed-center text-center" @click="$router.push('/index')">
      <p>
        <img src="../assets/cowii.png" style="width: 30vw; max-width: 150px" />
      </p>
      <h3 class="text-faded">
        <strong>Bem Vindo ao Milky Cow</strong>
        <p>Clique aqui</p>
      </h3>
      <q-card class="my-card">
        <q-card-section>
          <div class="text-h6">Our Changing Planet</div>
          <div class="text-subtitle2">by John Doe</div>
        </q-card-section>

        <q-separator />

        <q-card-actions vertical>
          <q-btn flat>Action 1</q-btn>
          <q-btn flat>Action 2</q-btn>
        </q-card-actions>
      </q-card>
    </div>
  </div>
</template>

<style>
</style>

<script>
export default {
  name: "index",
  data: () => ({
    animal: {},
    title: "Início",
  }),
};
</script>