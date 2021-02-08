<template>
  <v-app class="home">
    <div>
      <ComputedExample />
      <hr />
      <WatchersTyping />
      <hr />
      <h1 class="my-title"> {{ appTitle }} </h1>
      <WelcomeMessage @emitTitle="handleTitle" />

      <hr />
    </div>
  </v-app>
</template>

<script>
import WelcomeMessage from "@/components/WelcomeMessage";
import WatchersTyping from "@/components/WatchersTyping";
import ComputedExample from "@/components/ComputedExample";

export default {

  name: 'Home',

  components: {
    ComputedExample,
    WatchersTyping,
    WelcomeMessage,
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