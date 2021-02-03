<template>
  <v-container>
    <h1>{{ helloVar }}</h1>
    <button class="my-button" @click="changeHello('Pit')">change name</button>
  </v-container>
</template>

<script>
export default {
  name: "ComputedExample",
  data() {
    return {
      hello: "Hello World",
    }
  },
  computed: {
    helloVar: {
      get() {
        console.log('|get|\t', this.hello);
        return this.hello;
      },
      set(value) {
        console.log('|set|\t', value);
        return value;
      }
    }
  },

  methods: {
    changeHello(name) {
      this.helloVar = "Hello " + name;
    }
  }
}
</script>

<style scoped>
.my-button {
  background-color: whitesmoke;
  padding: 20px;
}
</style>