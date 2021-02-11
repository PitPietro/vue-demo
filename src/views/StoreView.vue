<template>
  <v-app class="store">
    <h1 class="view-title">Store</h1>
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
import {store} from "@/store";

// make TodoWriter component
// make TodoReader component

export default {
  name: "Store",

  computed: {
    count() {
      return store.state.count
    }
  },

  methods: {
    increment() {
      // access the state object as 'store.state'
      // trigger a 'state' change with the 'store.commit'
      store.commit('increment')
    },
    decrement() {
      store.commit('decrement')
    }
  }
}
</script>

<style scoped>
.store {
  background-color: #31475e; /* dark green - VueJS logo */
}
</style>