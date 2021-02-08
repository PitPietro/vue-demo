<template>
  <v-container id="alerts" class="alerts">
    <h1 class="title">
      Alerts
    </h1>
    <v-row class="alerts-row">
      <v-col cols="12" >
        <v-row justify="center">
          <v-alert
              border="top"
              prominent
              type="success"
          >
            Alert says: {{ alertType[0] }} <br>
            Border on top
          </v-alert>

          <v-alert
              border="top"
              class="mx-4"
              color="purple"
              dismissible
              prominent
              type="success"
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
              class="mx-4"
              colored-border
              elevation="5"
              type="info"
          >
            Colored border
          </v-alert>

          <v-alert
              border="right"
              dense
              type="info"
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
              class="mx-4"
              icon="mdi-vuetify"
              type="warning"
          >
            {{ alertType[2] }}: I changed icon
          </v-alert>

          <v-alert
              border="bottom"
              outlined
              type="warning"
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
              border="left"
              class="mx-4"
              elevation="5"
              icon="mdi-cloud-alert"
              prominent
              text
              type="error"
          >
            Alert says: {{ alertType[3] }}
          </v-alert>

          <v-alert
              border="left"
              color="deep-orange"
              icon="mdi-fire"
              outlined
              text
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
  name: 'Alerts',

  // arrow function or 'return {...}' inside 'data'
  data: () => ({
    alertType: ['Success', 'Info', 'Warning', 'Error'],
  }),
}

// https://vuetifyjs.com/en/components/alerts/#usage
</script>

<style scoped>
.alerts {
  /* padding-top: 5%; */
  background-color: #31475e; /* dark green - VueJS logo */
}

.alerts-row {
  margin: 1%;
  background-color: #F9F9F3; /* matte white */
}
</style>