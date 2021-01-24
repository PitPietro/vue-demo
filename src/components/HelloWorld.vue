<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-img
            :src="require('../assets/logo.svg')"
            class="my-3"
            contain
            height="200"
        />
      </v-col>

      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">
          Welcome to Vuetify
        </h1>

        <p class="subheading font-weight-regular">
          For help and collaboration with other Vuetify developers,
          <br>please join our online
          <a
              href="https://community.vuetifyjs.com"
              target="_blank"
          >Discord Community</a>
        </p>
      </v-col>

      <v-col
          class="mb-5 px-4"
          cols="12"
      >
        <h2 class="headline font-weight-bold mb-3">
          Alerts
        </h2>

        <v-row justify="center">
          <v-alert
              border="top"
              type="success"
              prominent
          >
            Alert says: {{ alertType[0] }} <br>
            Border on top
          </v-alert>

          <v-alert
              border="top"
              type="success"
              color="purple"
              dismissible
              prominent
              class="mx-4"
          >
            Dismissible (change color)
          </v-alert>

          <v-alert
              border="top"
              color="blue"
              elevation="24"
              prominent
              type="success"
          >
            {{ alertType[0] }} Elevation: 0-24
          </v-alert>

        </v-row>
        <v-row justify="center">
          <v-alert
              border="right"
              type="info"
          >
            Alert says: {{ alertType[1] }}
          </v-alert>

          <v-alert
              border="right"
              type="info"
              colored-border
              elevation="5"
              class="mx-4"
          >
            Colored border
          </v-alert>

          <v-alert
              border="right"
              type="info"
              dense
          >
            I'm dense
          </v-alert>
        </v-row>

        <v-row justify="center">
          <v-alert
              border="bottom"
              type="warning"
          >
            Alert says: {{ alertType[2] }}
          </v-alert>

          <v-alert
              border="bottom"
              type="warning"
              icon="mdi-vuetify"
              class="mx-4"
          >
            {{ alertType[2] }}: I changed icon
          </v-alert>

          <v-alert
              border="bottom"
              type="warning"
              outlined
          >
            {{ alertType[2] }}: I'm outlined
          </v-alert>

        </v-row>

        <v-row justify="center">
          <v-alert
              border="left"
              type="error"
          >
            Alert says: {{ alertType[3] }}
          </v-alert>

          <v-alert
              icon="mdi-cloud-alert"
              text
              prominent
              elevation="5"
              border="left"
              type="error"
              class="mx-4"
          >
            Alert says: {{ alertType[3] }}
          </v-alert>

          <v-alert
              text
              outlined
              border="left"
              color="deep-orange"
              icon="mdi-fire"
          >
            Alert says: {{ alertType[3] }}
          </v-alert>

        </v-row>
      </v-col>

      <v-col
          class="mb-5"
          cols="12"
      >
        <h2 class="headline font-weight-bold mb-3">
          What's next?
        </h2>

        <v-row justify="center">
          <a
              v-for="(next, i) in whatsNext"
              :key="i"
              :href="next.href"
              class="subheading mx-3"
              target="_blank"
          >
            {{ next.text }}
          </a>
        </v-row>
      </v-col>

      <v-col
          class="mb-5"
          cols="12"
      >
        <h2 class="headline font-weight-bold mb-3">
          Important Links
        </h2>

        <v-row justify="center">
          <a
              v-for="(link, i) in importantLinks"
              :key="i"
              :href="link.href"
              class="subheading mx-3"
              target="_blank"
          >
            {{ link.text }}
          </a>
        </v-row>
      </v-col>

      <v-col
          class="mb-5"
          cols="12"
      >
        <h2 class="headline font-weight-bold mb-3">
          Ecosystem
        </h2>

        <v-row justify="center">
          <a
              v-for="(eco, i) in ecosystem"
              :key="i"
              :href="eco.href"
              class="subheading mx-3"
              target="_blank"
          >
            {{ eco.text }}
          </a>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'HelloWorld',

  data: () => ({
    alertType: ['Success', 'Info', 'Warning', 'Error'],
    ecosystem: [
      {
        text: 'vuetify-loader',
        href: 'https://github.com/vuetifyjs/vuetify-loader',
      },
      {
        text: 'github',
        href: 'https://github.com/vuetifyjs/vuetify',
      },
      {
        text: 'awesome-vuetify',
        href: 'https://github.com/vuetifyjs/awesome-vuetify',
      },
    ],
    importantLinks: [
      {
        text: 'Documentation',
        href: 'https://vuetifyjs.com',
      },
      {
        text: 'Chat',
        href: 'https://community.vuetifyjs.com',
      },
      {
        text: 'Made with Vuetify',
        href: 'https://madewithvuejs.com/vuetify',
      },
      {
        text: 'Twitter',
        href: 'https://twitter.com/vuetifyjs',
      },
      {
        text: 'Articles',
        href: 'https://medium.com/vuetify',
      },
    ],
    whatsNext: [
      {
        text: 'Explore components',
        href: 'https://vuetifyjs.com/components/api-explorer',
      },
      {
        text: 'Select a layout',
        href: 'https://vuetifyjs.com/getting-started/pre-made-layouts',
      },
      {
        text: 'Frequently Asked Questions',
        href: 'https://vuetifyjs.com/getting-started/frequently-asked-questions',
      },
    ],
  }),
}

// https://vuetifyjs.com/en/components/alerts/#usage
</script>