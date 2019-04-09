<template>
  <q-page class="flex flex-center">
    <GmapMap :center="center"
    :zoom="7" />
  </q-page>
</template>

<style>

</style>

<script>
import Vue from "vue";
import * as VueGoogleMaps from "vue2-google-maps";
const { Map } = VueGoogleMaps;
console.log(Map);

Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyBzlLYISGjL_ovJwAehh6ydhB56fCCpPQw"
  },
  installComponents: false
});

export default {
  name: "PageIndex",
  data() {
    return {
      center: { lat: 10.0, lng: 10.0 }
    };
  },
  components: {
    GmapMap: Map
  }
};
</script>
