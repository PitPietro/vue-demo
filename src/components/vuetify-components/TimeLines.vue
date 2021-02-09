<template>
  <v-container class="mb-10">
    <h1 class="component-title">{{ titles[0] }}</h1>
    <h2 class="component-title ml-5 my-10"> 1~ {{ titles[1] }} </h2>

    <v-timeline>
      <v-timeline-item class="white-txt-padding"><h3 class="white-txt-padding">1st item</h3></v-timeline-item>
      <v-timeline-item class="text-right"><h3 class="white-txt-padding">2nd item</h3></v-timeline-item>
      <v-timeline-item><h3 class="white-txt-padding">3rd item</h3></v-timeline-item>
    </v-timeline>

    <h2 class="component-title ml-5 my-10"> 2~ {{ titles[2] }} </h2>

    <v-card
        class="mx-auto"
        max-width="400"
    >
      <v-card
          dark
          flat
      >
        <v-btn
            absolute
            bottom
            color="pink"
            right
            fab
        >
          <v-icon>mdi-plus</v-icon>
        </v-btn>
        <v-card-title class="pa-2 purple lighten-3">
          <v-btn icon>
            <v-icon>mdi-menu</v-icon>
          </v-btn>
          <h3 class="title font-weight-light text-center grow">
            Timeline
          </h3>
          <v-avatar>
            <v-img src="https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light"></v-img>
          </v-avatar>
        </v-card-title>
        <v-img
            src="../../assets/timeline-landscape.jpeg"
            gradient="to top, rgba(0,0,0,.44), rgba(0,0,0,.44)"
        >
          <v-container class="fill-height">
            <v-row align="center">
              <strong class="display-4 font-weight-regular mr-10">{{ day }}</strong>
              <v-col justify="end">
                <div class="headline font-weight-light mr-5">
                  {{ hours }}<b>:</b>{{ minutes }}
                </div>
                <div class="text-uppercase font-weight-light mr-5">
                  {{ monthNum}} ~ {{ year }}
                </div>
              </v-col>
            </v-row>
          </v-container>
        </v-img>
      </v-card>
      <v-card-text class="py-0">
        <v-timeline
            align-top
            dense
        >
          <v-timeline-item
              color="pink"
              small
          >
            <v-row class="pt-1">
              <v-col cols="3">
                <strong>6am</strong>
              </v-col>
              <v-col>
                <strong>Test Vuetify</strong>
                <div class="caption">
                  Timelines
                </div>
              </v-col>
            </v-row>
          </v-timeline-item>

          <v-timeline-item
              color="teal lighten-3"
              small
          >
            <v-row class="pt-1">
              <v-col cols="3">
                <strong>8-10am</strong>
              </v-col>
              <v-col>
                <strong>Meeting with the clients</strong>
                <div class="caption mb-2">
                  Zoom: click <a href="#">Here</a>
                </div>
                <v-avatar>
                  <v-img
                      src="https://avataaars.io/?avatarStyle=Circle&topType=LongHairFrida&accessoriesType=Kurt&hairColor=Red&facialHairType=BeardLight&facialHairColor=BrownDark&clotheType=GraphicShirt&clotheColor=Gray01&graphicType=Skull&eyeType=Wink&eyebrowType=RaisedExcitedNatural&mouthType=Disbelief&skinColor=Brown"
                  ></v-img>
                </v-avatar>
                <v-avatar>
                  <v-img
                      src="https://avataaars.io/?avatarStyle=Circle&topType=ShortHairFrizzle&accessoriesType=Prescription02&hairColor=Black&facialHairType=MoustacheMagnum&facialHairColor=BrownDark&clotheType=BlazerSweater&clotheColor=Black&eyeType=Default&eyebrowType=FlatNatural&mouthType=Default&skinColor=Tanned"
                  ></v-img>
                </v-avatar>
                <v-avatar>
                  <v-img
                      src="https://avataaars.io/?avatarStyle=Circle&topType=LongHairMiaWallace&accessoriesType=Sunglasses&hairColor=BlondeGolden&facialHairType=Blank&clotheType=BlazerSweater&eyeType=Surprised&eyebrowType=RaisedExcited&mouthType=Smile&skinColor=Pale"
                  ></v-img>
                </v-avatar>
              </v-col>
            </v-row>
          </v-timeline-item>

          <v-timeline-item
              color="pink"
              small
          >
            <v-row class="pt-1">
              <v-col cols="3">
                <strong>12pm</strong>
              </v-col>
              <v-col>
                <strong>Break</strong>
              </v-col>
            </v-row>
          </v-timeline-item>

          <v-timeline-item
              color="teal lighten-3"
              small
          >
            <v-row class="pt-1">
              <v-col cols="3">
                <strong>5-7pm</strong>
              </v-col>
              <v-col>
                <strong>Docker</strong>
                <div class="caption">
                  Test the app on docker
                </div>
              </v-col>
            </v-row>
          </v-timeline-item>
        </v-timeline>
      </v-card-text>
    </v-card>

    <h2 class="component-title ml-5 my-10"> 3~ {{ titles[3] }} </h2>

    <v-card
        class="mx-auto"
        max-width="600"
    >
      <v-card-title
          class="blue-grey white--text"
      >
        <span class="title">Logs</span>
        <v-spacer></v-spacer>
        <v-btn
            :outlined="interval == null"
            :color="interval == null ? 'white' : 'primary'"
            dark
            depressed
            @click="interval == null ? start() : stop()"
        >
          Realtime Logging
        </v-btn>
      </v-card-title>
      <v-card-text class="py-0">
        <v-timeline dense>
          <v-slide-x-reverse-transition
              group
              hide-on-leave
          >
            <v-timeline-item
                v-for="item in items"
                :key="item.id"
                :color="item.color"
                small
                fill-dot
            >
              <v-alert
                  :value="true"
                  :color="item.color"
                  :icon="item.icon"
                  class="white--text"
              >
                Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at.
              </v-alert>
            </v-timeline-item>
          </v-slide-x-reverse-transition>
        </v-timeline>
      </v-card-text>
    </v-card>

    <h2 class="component-title ml-5 my-10"> 4~ {{ titles[4] }} </h2>

    <v-timeline
        align-top
        :dense="$vuetify.breakpoint.smAndDown"
    >
      <v-timeline-item
          v-for="(item, i) in iconDotItems"
          :key="i"
          :color="item.color"
          :icon="item.icon"
          fill-dot
      >
        <v-card
            :color="item.color"
            dark
        >
          <v-card-title class="title">
            {{ item.title }}
          </v-card-title>
          <v-card-text class="white text--primary">
            <p>{{ item.msg }}</p>
          </v-card-text>
        </v-card>
      </v-timeline-item>
    </v-timeline>
  </v-container>
</template>

<script>

const COLORS = [
  'info',
  'warning',
  'error',
  'success',
]
const ICONS = {
  info: 'mdi-information',
  warning: 'mdi-alert',
  error: 'mdi-alert-circle',
  success: 'mdi-check-circle',
}

let today = new Date()

export default {
name: "TimeLines",

  data: () => ({
    titles: [
      "TimeLines",
      "Default",
      "Color",
      "Dense",
      "Icon dots",
    ],

    hours: today.getHours(),
    minutes: today.getMinutes(),
    seconds: today.getSeconds(),
    day: today.getDate(),
    monthNum: today.getMonth() + 1,
    year: today.getFullYear(),

    interval: null,
    items: [
      {
        id: 1,
        color: 'info',
        icon: ICONS.info,
      },
    ],
    nonce: 2,

    iconDotItems: [
      {
        color: 'red lighten-2',
        icon: 'mdi-star',
        title: 'Start learning VueJS',
        msg: 'Vue.js lets you extend HTML with HTML attributes called directives. Its directives offers functionality to HTML applications. It provides built-in directives and user defined directives.'
      },
      {
        color: 'purple darken-1',
        icon: 'mdi-book-variant',
        title: 'Learn Vuetify',
        msg: 'Vuetify is a Vue UI Library with beautifully handcrafted Material Components. No design skills required — everything you need to create amazing applications is at your fingertips.'
      },
      {
        color: 'green lighten-1',
        icon: 'mdi-airballoon',
        title: 'Learn NodeJS',
        msg: 'As an asynchronous event-driven JavaScript runtime, Node.js is designed to build scalable network applications. In the following "hello world" example, many connections can be handled concurrently. Upon each connection, the callback is fired, but if there is no work to be done, Node.js will sleep.'
      },
      {
        color: 'indigo',
        icon: 'mdi-buffer',
        title: 'Make a full-stack webapp',
        msg: 'A full stack web developer is a person who can develop both client and server software.'
      },
    ],
  }),

  beforeDestroy () {
    this.stop()
  },

  methods: {
    addEvent () {
      let { color, icon } = this.genAlert()

      const previousColor = this.items[0].color

      while (previousColor === color) {
        color = this.genColor()
      }

      this.items.unshift({
        id: this.nonce++,
        color,
        icon,
      })

      if (this.nonce > 6) {
        this.items.pop()
      }
    },
    genAlert () {
      const color = this.genColor()

      return {
        color,
        icon: this.genIcon(color),
      }
    },
    genColor () {
      return COLORS[Math.floor(Math.random() * 3)]
    },
    genIcon (color) {
      return ICONS[color]
    },
    start () {
      this.interval = setInterval(this.addEvent, 3000)
    },
    stop () {
      clearInterval(this.interval)
      this.interval = null
    },
  },
}
</script>

<style scoped>
.white-txt-padding {
  color: white;
  padding: 2px;
}
</style>