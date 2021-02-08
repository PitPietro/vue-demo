<template>
  <v-container class="comments">
    <h1>List of comments</h1>
    <div v-for="(comment, key) in comments" :key="key">
      <!-- if you do not want to show all the elements, add a 'v-if' condition -->
      <div v-if="key > 200 && key < 250" class="comment">
        <h2>{{ comment.name }}</h2>
        <h3>ID n°{{ comment.id }}</h3>
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

<style scoped>
h3 {
  text-align: right;
}

code {
  text-align: justify;
  letter-spacing: 5px
}
.comments {
  margin-top: 10%;
  background-color: #F9F9F3; /* matte white */
}
.comment {
  margin-bottom: 2%;
  padding: 5%;
}
</style>