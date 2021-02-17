<template>
  <v-app>
    <div
        v-for="(todo, key) in listTodos" :key="key">
      <h3>{{ todo }}</h3>
    </div>

    <input
        v-model="newTodo"
        placeholder="You have to ..."
    >
    <v-btn @click="addTodo">Add Todo</v-btn>
  </v-app>
</template>

<script>
export default {
  name: "GetTodo",

  data() {
    return {
      newTodo: "",
    }
  },

  methods: {

    addTodo() {
      this.$store.commit('addTodo', this.newTodo)
    }
  },

  computed: {
    // list all todos
    listTodos() {
      console.log('todos: ' + this.$store.getters.todos)
      return this.$store.getters.todos
    }
  }
}
</script>

<style scoped>

</style>