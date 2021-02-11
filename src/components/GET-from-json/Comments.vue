<template>
  <v-container class="matte-white-bg">
    <h1>List of comments</h1>
    <div v-for="(comment, key) in comments" :key="key">
      <!-- if you do not want to show all the elements, add a 'v-if' condition -->
      <div v-if="key < $route.params.id" class="json-element">
        <h2>{{ comment.name }}</h2>
        <h3 class="h3-right">ID n°{{ comment.id }}</h3>
        <p>send me an email at <a>{{ comment.email }}</a></p>
        <code> {{ comment.body }} </code>
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
  name: "Comments",
  data: function () {
    return {
      comments: [], // list of all objects
    }
  },

  methods: {
    // call API from https://jsonplaceholder.typicode.com/
    callToAPI() {
      axios.get('https://jsonplaceholder.typicode.com/comments')
          .then(
              res => {
                this.comments = res.data;
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