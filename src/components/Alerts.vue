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
          Vue Demo
        </h1>
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
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'HelloWorld',

  // arrow function or 'return {...}' inside 'data'
  data: () => ({
    alertType: ['Success', 'Info', 'Warning', 'Error'],
  }),
}

// https://vuetifyjs.com/en/components/alerts/#usage
</script>