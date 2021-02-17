<template>
  <v-app>
    <v-container>
      <v-col>
        <div
            class="todo-elements"
            v-for="(todo, key) in listTodos" :key="key">
          <h3 class="todo-title">{{ todo }}</h3>
          <v-btn class="remove-btn" color="red" @click="removeTodo(key)">Remove</v-btn>
          <hr/>
        </div>

      </v-col>

      <v-col>
        <input
            v-model="newTodo"
            placeholder="You have to ..."
            v-on:keyup.enter="addTodo"
        >
      </v-col>
      <v-col>
        <v-btn
            elevation="5"
            medium
            color="success"
            @click="addTodo">Add Todo
        </v-btn>
        <v-btn
            elevation="5"
            medium
            color="red"
            class="remove-btn"
            @click="removeLastTodo">Remove last
        </v-btn>
        <v-btn
            elevation="5"
            medium
            color="red"
            class="remove-btn"
            @click="removeFistTodo">Remove first
        </v-btn>
        <v-btn
            elevation="5"
            medium
            color="red"
            class="remove-btn"
            @click="removeAllTodos">Remove ALL
        </v-btn>
      </v-col>
    </v-container>
  </v-app>
</template>

<script>
/*
* Key Modifiers
* Docs: https://vuejs.org/v2/guide/events.html#Key-Modifiers
* If you want to add an element by pressing 'Enter', you need to add
* `v-on:keyup.enter="..."`
*/
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
      this.newTodo = ""
    },

    removeTodo(index) {
      this.$store.commit('removeTodo', index)
    },

    removeLastTodo() {
      this.$store.commit('removeLastTodo')
    },

    removeFistTodo() {
      this.$store.commit('removeFirstTodo')
    },

    removeAllTodos() {
      this.$store.commit('removeAllTodos')
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
div.todo-elements {
  padding: 10px;
  margin-bottom: 20px;
}
.todo-title {
  text-align: left;
  padding-left: 20px;
}

.remove-btn {
  color: #ffffff;
}
</style>