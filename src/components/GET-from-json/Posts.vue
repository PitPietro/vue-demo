<template>
  <v-container class="comments">
    <h1>List of posts</h1>
    <div v-for="(person, key) in people" :key="key">
      <!-- if you do not want to show all the elements, add a 'v-if' condition -->
      <div v-if="key < 10" class="comment">
        <h2>{{ person.title }}</h2>
        <h3>ID n°{{ person.id }}</h3>
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

<style scoped>
h3 {
  text-align: right;
}

code {
  text-align: justify;
  letter-spacing: 5px
}
.comments {
  background-color: #F9F9F3; /* matte white */
}
.comment {
  margin-bottom: 2%;
  padding: 5%;
}
</style>