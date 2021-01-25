<template>
<v-container class="mb-10">
  <h1 class="text-center">{{ titles[0] }}</h1>
  <h2 class="text-center ml-5 my-10"> 1~ {{ titles[1] }} </h2>
  <v-row justify="center">
      <v-btn
          class="mx-1"
          color="primary"
          @click="messages++"
      >
        Send Message
      </v-btn>

      <v-btn
          class="mx-1"
          color="error"
          @click="messages = 0"
      >
        Clear Notifications
      </v-btn>

    <v-badge
        :content="messages"
        :value="messages"
        color="green"
        overlap
    >
      <v-icon large>
        mdi-vuetify
      </v-icon>
    </v-badge>
  </v-row>
  <h2 class="text-center ml-5 my-10"> 2~ {{ titles[2] }} </h2>
  <div class="text-center">
    <v-badge
        :value="hover"
        color="deep-purple accent-4"
        content="9999+"
        left
        transition="slide-x-transition"
    >
      <v-hover v-model="hover">
        <v-icon
            color="grey lighten-1"
            large
        >
          mdi-account
        </v-icon>
      </v-hover>
    </v-badge>
  </div>
</v-container>
</template>

<script>
export default {
  name: "Badges",

  data: () => ({
    titles: [
        "Badges",
        "Dynamic notifications",
        "Show on hover"
    ],

    messages: 0,
    show: false,

    hover: false,
  }),
}

/*
* > Dynamic notifications
* The 'Send Message' button has a ` @click="messages++" ` property, which increments the 'message' data variable.
* The 'Clear Notifications' button has a ` @click="messages = 0" ` property, which resets the 'message' data variable.
* In '<v-badge ... >', ` :content="messages" ` and ` :value="messages" ` place a circle badge over the icon.
* */
</script>