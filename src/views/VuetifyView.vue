<template>
  <v-app class="vuetify-view">
    <div class="title">
      <h1>Vuetify Components</h1>
    </div>
    <div>
      <Alerts/>
      <hr />
      <hr />
      <Carousels />
      <hr />
      <ColorPickers />
      <hr />
      <Badges />
      <hr />
      <TimeLines />
      <hr />
      <Lazy />
      <hr />
    </div>
  </v-app>
</template>

<script>
import Alerts from '@/components/Alerts';
import Badges from "@/components/Badges";
import TimeLines from "@/components/TimeLines";
import Carousels from "@/components/Carousels";
import Lazy from "@/components/Lazy";
import ColorPickers from "@/components/ColorPickers";

export default {

  name: 'VuetifyView',

  components: {
    ColorPickers,
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
  padding-bottom: 20%;
  background-color: #31475e; /* dark green - VueJS logo */
}

.title {
  margin: 4%;
  padding: 4%;
  background-color: #3fb984; /* light green - VueJS logo */
}
</style>