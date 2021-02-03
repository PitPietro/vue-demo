<template>
  <v-container>
    <h1>POST component</h1>

    <div v-for="(person, key) in people" :key="key">
      <!-- if you do not want to show all the elements, add a 'v-if' condition -->
      <template v-if="key < 10">
        <h2>ID: {{ person.id }}</h2>
        <p> {{ person.body }} </p>
      </template>
    </div>
  </v-container>
</template>

<script>
import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";

Vue.use(VueAxios, axios);

export default {
  name: "PostComponent",
  data: function () {
    return {
      people: [], // list of all objects
    }
  },

  methods: {
    // call API from https://jsonplaceholder.typicode.com/
    callToAPI() {
      axios.get('https://jsonplaceholder.typicode.com/posts')
          .then(
              res => {
                this.people = res.data;
                console.log('|callToAPI()|\tthen clause');
                console.log(this.res.data);
                console.log(this.res.data);
                console.log(this.res.status);
                console.log(this.res.statusText);
                console.log(this.res.headers);
                console.log(this.res.config);
              }
          )
          .catch(
              err => {
                console.log('|callToAPI()|\t', err);
              }
          )
    }
  },

  // hooks
  // then the component is created, the 'callToAPI' function is called
  created() {
    console.log('|hook|\tcreated');
    this.callToAPI();
  }
}
</script>

<style scoped>

</style>