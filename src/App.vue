<template>
  <v-app>
    <v-app-bar
        app
        color="primary"
        dark
    >
      <div class="d-flex align-center">
        <v-img
            alt="Vuetify Logo"
            class="shrink mr-2"
            contain
            src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
            transition="scale-transition"
            width="40"
        />

        <v-img
            alt="Vuetify Name"
            class="shrink mt-1 hidden-sm-and-down"
            contain
            min-width="100"
            src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
            width="100"
        />

        <!--
        <v-btn
            class="shrink mt-1 hidden-sm-and-down"
            to="/carousel"
        >Carousel</v-btn>
        -->
      </div>

      <v-spacer></v-spacer>

      <v-btn
          href="https://github.com/vuetifyjs/vuetify/releases/latest"
          target="_blank"
          text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <ComputedExample />
      <hr />
      <WatchersTyping />
      <hr />
      <h1 class="my-title"> {{ appTitle }} </h1>
      <WelcomeMessage @emitTitle="handleTitle" />
      <hr />
      <PostComponent />
      <hr />
      <HelloWorld/>
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
    </v-main>
  </v-app>
</template>

<script>
import HelloWorld from './components/Alerts';
import Badges from "./components/Badges";
import TimeLines from "@/components/TimeLines";
import Carousels from "@/components/Carousels";
import Lazy from "@/components/Lazy";
import ColorPickers from "@/components/ColorPickers";
import PostComponent from "@/components/PostComponent";
import WelcomeMessage from "@/components/WelcomeMessage";
import WatchersTyping from "@/components/WatchersTyping";
import ComputedExample from "@/components/ComputedExample";

export default {
  name: 'App',

  components: {
    ComputedExample,
    WatchersTyping,
    WelcomeMessage,
    PostComponent,
    ColorPickers,
    Carousels,
    TimeLines,
    HelloWorld,
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
};
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
