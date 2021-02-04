<template>
  <v-app class="home">
    <div>
      <Alerts/>
      <hr />
      <ComputedExample />
      <hr />
      <WatchersTyping />
      <hr />
      <h1 class="my-title"> {{ appTitle }} </h1>
      <WelcomeMessage @emitTitle="handleTitle" />
      <hr />
      <PostComponent />
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
import PostComponent from "@/components/PostComponent";
import WelcomeMessage from "@/components/WelcomeMessage";
import WatchersTyping from "@/components/WatchersTyping";
import ComputedExample from "@/components/ComputedExample";

export default {

  name: 'Home',

  components: {
    ComputedExample,
    WatchersTyping,
    WelcomeMessage,
    PostComponent,
    ColorPickers,
    Carousels,
    TimeLines,
    Alerts,
    Badges,
    Lazy
  },

  data: () => ({
    appTitle: "",
  }),
  // the father communicate with the child
  methods: {
    handleTitle(title) {
      this.appTitle = title;
      console.log('The title is ', this.appTitle);
    }
  }
}
</script>

<style scoped>
.my-title {
  margin-top: 8px;
  padding: 20px;
  text-align: center;
  color: white;
  background-color: #81C784 !important;
}
</style>