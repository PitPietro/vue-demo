<template>
  <v-container>
    <h1 class="text-center">{{ titles[0] }}</h1>
    <h2 class="text-center ml-5 my-10"> 1~ {{ titles[1] }} </h2>
    <v-color-picker
        canvas-height="300"
        class="ma-2"
    ></v-color-picker>

    <h2 class="text-center ml-5 my-10"> 2~ {{ titles[2] }} </h2>

    <v-row>
      <v-col
          cols="12"
          md="4"
      >
        <v-btn
            v-for="t in types"
            :key="t"
            block
            class="my-4"
            @click="type = t"
        >
          {{ t }}
        </v-btn>
      </v-col>
      <v-col
          class="d-flex justify-center"
      >
        <v-color-picker v-model="color"></v-color-picker>
      </v-col>
      <v-col
          cols="12"
          md="4"
      >
        <v-sheet
            class="pa-4"
            dark
        >
          <pre>{{ showColor }}</pre>
        </v-sheet>
      </v-col>
    </v-row>

    <h2 class="text-center ml-5 my-10"> 3~ {{ titles[3] }} </h2>
    <v-row justify="space-around">
      <v-color-picker
          class="ma-2"
          show-swatches
          swatches-max-height="300px"
      ></v-color-picker>
    </v-row>

  </v-container>

</template>

<script>
export default {
  name: "ColorPickers",
  data: () => ({
    titles: [
      "Color Picker",
      "Canvas",
      "Model",
      "Swatches"
    ],

    types: ['hex', 'hexa', 'rgba', 'hsla', 'hsva'],
    type: 'hex',
    hex: '#FF00FF',
    hexa: '#FF00FFFF',
    rgba: {r: 255, g: 0, b: 255, a: 1},
    hsla: {h: 300, s: 1, l: 0.5, a: 1},
    hsva: {h: 300, s: 1, v: 1, a: 1},

    swatches: [
      ['#FF0000', '#AA0000', '#550000'],
      ['#FFFF00', '#AAAA00', '#555500'],
      ['#00FF00', '#00AA00', '#005500'],
      ['#00FFFF', '#00AAAA', '#005555'],
      ['#0000FF', '#0000AA', '#000055'],
    ],

  }),

  computed: {
    color: {
      get() {
        return this[this.type]
      },
      set(v) {
        this[this.type] = v
      },
    },

    showColor() {
      if (typeof this.color === 'string') return this.color

      return JSON.stringify(Object.keys(this.color).reduce((color, key) => {
        color[key] = Number(this.color[key].toFixed(2))
        return color
      }, {}), null, 2)
    },
  },
}
</script>

<style scoped>

</style>