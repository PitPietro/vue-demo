<template>
  <v-app class="vuetify-view">
    <h1 class="view-title">Vuetify Components</h1>
    <div>
      <Alerts/>
      <hr/>
      <hr/>
      <Carousels/>
      <hr/>
      <Badges/>
      <hr/>
      <TimeLines/>
      <hr/>
      <Lazy/>
      <hr/>
    </div>
  </v-app>
</template>

<script>
import Alerts from '@/components/vuetify-components/Alerts';
import Badges from "@/components/vuetify-components/Badges";
import TimeLines from "@/components/vuetify-components/TimeLines";
import Carousels from "@/components/vuetify-components/Carousels";
import Lazy from "@/components/vuetify-components/Lazy";

export default {

  name: 'VuetifyView',

  components: {
    Carousels,
    TimeLines,
    Alerts,
    Badges,
    Lazy
  }
}
</script>

<style scoped>
.vuetify-view {
  /* adding-top: 1%; */
  /* padding-bottom: 20%; */
  background-color: #31475e; /* dark green - VueJS logo */
}
</style>