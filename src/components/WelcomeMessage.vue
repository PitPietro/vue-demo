<template>
  <v-container class="welcome">
    <div>
      <!-- <h1> {{ welcomeTitle }} </h1> -->
      <br>
      <div>
        <input v-model="welcomeTitle" class="my-input p-3">
        <br><br>
        <!-- v-on triggers the events -->
        <!-- v-on:click="changeMessage" -->
        <button @click="changeTitle" class="my-button">Change title</button>
      </div>
    </div>
  </v-container>
</template>

<script>
// reference: https://pusher.com/tutorials/vue-custom-events

export default {
  name: "WelcomeMessage",

  data: function () {
    return {
      welcomeTitle: "Hello"
    }
  },

  // the father communicate with the child
  methods: {
    changeTitle() {
      this.$emit("emitTitle", this.welcomeTitle);
      console.log('emit');
    }
  }
}
</script>

<style scoped>
.my-input {
  border: 4px solid darkblue;
  padding: 10px;
}

.my-button {
  background-color: royalblue;
  padding: 20px;
  color: white !important; /* !important override a style */
}
</style>