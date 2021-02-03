<template>
  <v-container>
    <div id="watch-example">
      <p>
        Ask a yes/no question:
        <input class="my-input" v-model="question">
      </p>
      <p>{{ answer }}</p>
    </div>
  </v-container>
</template>

<script>
// docs: https://vuejs.org/v2/guide/computed.html#Watchers

export default {
  name: "WatchersTyping",

  data() {
    return {
      question: '',
      answer: 'I cannot give you an answer until you ask a question!'
    }
  },

  // it intercepts when input value change
  watch: {
    question () {
      this.answer = 'is typing...';

      console.log("The Big Brother Is Watching You\t", this.question);
    }
  },
}
</script>

<style scoped>
.my-input {
  border: 2px solid darkblue;
  padding: 10px;
}
</style>