<template>
  <v-app class="store">
    <h1 class="view-title">Store</h1>
    <h2 class="view-title">Todo Application with Store</h2>
    <v-container>
      <v-col>
        <GetTodo/>
      </v-col>
    </v-container>


    <h2 class="view-title">Increment Store</h2>
    <v-container>
      <v-col>
        <v-badge
            :content="count"
            :value="count"
            class="component-title"
            color="red"
            overlap
        >
          <v-icon large>
            mdi-account-circle-outline
          </v-icon>
        </v-badge>
      </v-col>
      <v-row>
        <v-col>
          <v-btn
              class="white"
              elevation="5"
              large
              outlined
              @click="increment"
          >+
          </v-btn>
        </v-col>
        <v-col>
          <v-btn
              class="white"
              elevation="5"
              large
              outlined
              @click="decrement"
          >-
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import GetTodo from "@/components/todo-with-store/GetTodo";

// make TodoWriter component
// make TodoReader component

export default {
  name: "Store",
  components: {GetTodo},
  computed: {
    count() {
      return this.$store.state.count
    }
  },

  methods: {
    increment() {
      // access the state object as 'store.state'
      // trigger a 'state' change with the 'store.commit'
      this.$store.commit('increment')
    },
    decrement() {
      this.$store.commit('decrement')
    }
  }
}
</script>

<style scoped>
.store {
  background-color: #31475e; /* dark green - VueJS logo */
}
</style>