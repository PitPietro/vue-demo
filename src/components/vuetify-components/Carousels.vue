<template>
  <v-container>
    <h1 class="title">{{ titles[0] }}</h1>
    <h2 class="title ml-5 my-10"> 1~ {{ titles[1] }} </h2>

    <v-carousel v-model="defaultModel">
      <v-carousel-item
          v-for="(color, i) in defaultColors"
          :key="color"
      >
        <v-sheet
            :color="color"
            height="100%"
            tile
        >
          <v-row
              align="center"
              class="fill-height"
              justify="center"
          >
            <div class="display-4">
              Slide {{ i + 1 }}
            </div>
          </v-row>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>

    <h2 class="title ml-5 my-10"> 2~ {{ titles[2] }} </h2>
    <v-card
        elevation="24"
        max-width="444"
        class="mx-auto"
    >
      <v-system-bar lights-out></v-system-bar>
      <v-carousel
          :continuous="false"
          :cycle="customDCycle"
          :show-arrows="false"
          hide-delimiter-background
          delimiter-icon="mdi-minus"
          height="300"
      >
        <v-carousel-item
            v-for="(slide, i) in customDSlides"
            :key="i"
        >
          <v-sheet
              :color="defaultColors[i]"
              height="100%"
              tile
          >
            <v-row
                class="fill-height"
                align="center"
                justify="center"
            >
              <div class="display-3">
                {{ slide }} Slide
              </div>
            </v-row>
          </v-sheet>
        </v-carousel-item>
      </v-carousel>
      <v-list two-line>
        <v-list-item>
          <v-list-item-avatar>
            <v-img src="../assets/john-bon-jovi.jpeg"></v-img>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>Jon Bon Jovi</v-list-item-title>
            <v-list-item-subtitle>Singer & songwriter</v-list-item-subtitle>
          </v-list-item-content>
          <v-list-item-action>
            <v-switch
                v-model="customDCycle"
                label="Cycle Slides"
                inset
            ></v-switch>
          </v-list-item-action>
        </v-list-item>
      </v-list>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "Carousels",

  data: () => ({
    titles: [
      "Carousels",
      "Default",
      "Custom delimiters",
      "",
      "",
    ],

    defaultModel: 0,
    defaultColors: [
      'indigo',
      'blue darken-4',
      'teal darken-2',
      'green darken-3',
      'lime darken-1',
    ],

    customDCycle: false,
    customDSlides: [
      '1st',
      '2nd',
      '3rd',
      '4th',
      '5th',
    ],
  }),
}

// color palette: https://vuetifyjs.com/en/styles/colors/#colors
</script>