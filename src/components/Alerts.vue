<template>
  <v-container class="alerts" id="alerts">
    <h1 class="title">
      Alerts
    </h1>
    <v-row class="text-center">
      <v-col
          cols="12"
      >


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
  padding-top: 5%;
  background-color: #F9F9F3; /* matte white*/
  padding-bottom: 0;
}

.title {
  padding: 20px;
  margin-bottom: 50px;
  text-align: center;
  color: white;
  background-color: #81C784 !important;
  /* background-color: #b6b6b6; */
}
</style>