<template>
  <v-container class="matte-white-bg">
    <h1>List of posts</h1>
    <div v-for="(person, key) in people" :key="key">
      <!-- if you do not want to show all the elements, add a 'v-if' condition -->
      <div v-if="key < $route.params.id" class="json-element">
        <h2>{{ person.title }}</h2>
        <h3 class="h3-right">ID n°{{ person.id }}</h3>
        <code> {{ person.body }} </code>
      </div>
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