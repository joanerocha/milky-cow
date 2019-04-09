<template>
  <q-layout view="lHh Lpr lFf">
    <q-layout-header>
      <q-toolbar color="green">
        <q-btn flat dense round @click="leftDrawerOpen = !leftDrawerOpen" aria-label="Menu">
          <q-icon name="menu"/>
        </q-btn>

        <q-toolbar-title>MilkyCow
          <div slot="subtitle"></div>
        </q-toolbar-title>
      </q-toolbar>
    </q-layout-header>

    <q-layout-drawer
      v-model="leftDrawerOpen"
      :content-class="$q.theme === 'mat' ? 'bg-grey-2' : null"
    >
      <q-list no-border link inset-delimiter>
        <q-list-header>Menu</q-list-header>
        <q-item @click.native="$router.push('/add-animal')">
          <q-item-side icon="add_circle"/>
          <q-item-main label="Cadastro de Animal"/>
        </q-item>
        <q-item @click.native="$router.push('/insert-data')">
          <q-item-side icon="search"/>
          <q-item-main label="Buscar Animal"/>
        </q-item>
        <q-item @click.native="$router.push('a')">
          <q-item-side icon="insert_chart"/>
          <q-item-main label="Relatórios"/>
        </q-item>
        <q-item @click.native="$router.push('a')">
          <q-item-side icon="show_chart"/>
          <q-item-main label="Relatórios Produtivos"/>
        </q-item>
      </q-list>
    </q-layout-drawer>

    <q-page-container>
      <router-view/>
    </q-page-container>
  </q-layout>
</template>

<script>
import { openURL } from "quasar-framework/dist/quasar.mat.esm.js";
export default {
  name: "LayoutDefault",
  data() {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop
    };
  },
  methods: {
    openURL: openURL
  }
};
</script>

<style>
</style>
