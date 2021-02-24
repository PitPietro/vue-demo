<template>
  <v-app>
    <v-container>
      <v-col>
        <div
            v-for="(todo, key) in listTodos"
            :key="key" class="todo-elements">
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
            color="success"
            elevation="5"
            medium
            @click="addTodo">Add Todo
        </v-btn>
        <v-btn
            class="remove-btn"
            color="red"
            elevation="5"
            medium
            @click="removeLastTodo">Remove last
        </v-btn>
        <v-btn
            class="remove-btn"
            color="red"
            elevation="5"
            medium
            @click="removeFistTodo">Remove first
        </v-btn>
        <v-btn
            class="remove-btn"
            color="red"
            elevation="5"
            medium
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
* `v-on:keyup.keyName="..."`
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
      this.$store.commit('todo/addTodo', this.newTodo)
      this.newTodo = ""
    },

    removeTodo(index) {
      this.$store.commit('todo/removeTodo', index)
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