<template>
  <v-app>
    <v-container>
      <v-col>
        <div
            v-for="(todo, key) in listTodos" :key="key">
          <h3 class="todo-title">{{ todo }}</h3>
          <v-btn @click="removeTodo(key)">Remove</v-btn>
        </div>

      </v-col>

      <v-col>
        <input
            v-model="newTodo"
            placeholder="You have to ..."
        >
      </v-col>
      <v-col>
        <v-btn
            elevation="5"
            medium
            @click="addTodo">Add Todo
        </v-btn>
      </v-col>
    </v-container>
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
    },

    removeTodo(index) {
      this.$store.commit('removeTodo', index)
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
.todo-title {
  text-align: left;
  padding-left: 20px;
}
</style>