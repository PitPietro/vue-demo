<template>
  <v-app id="app">
    <div>
      <v-app-bar
          color="deep-purple"
          dark
      >
        <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

        <v-toolbar-title>{{ links[0].title }}</v-toolbar-title>
      </v-app-bar>

      <v-navigation-drawer
          v-model="drawer"
          absolute
          temporary
      >
        <v-list
            dense
            nav
        >
          <v-list-item-group
              v-model="group"
              active-class="deep-purple--text text--accent-4"
          >

            <v-list-item v-for="(link, key) in links" :key="key">
              <v-list-item-icon>
                <v-icon>{{ link.icon }}</v-icon>
              </v-list-item-icon>
              <v-list-item-title>
                <router-link :to="link.toLink">{{ link.title }}</router-link>
              </v-list-item-title>
            </v-list-item>


          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>
      <router-view/>
    </div>

  </v-app>
</template>

<script>

// icons: https://materialdesignicons.com/
// add 'mdi-' to the icon name
export default {
  name: 'app',
  data: () => ({
    drawer: false,
    group: null,

    links: [
      {
        icon: 'mdi-home',
        toLink: '/',
        title: 'Home'
      },
      {
        icon: 'mdi-vuetify',
        toLink: '/vuetify',
        title: 'Vuetify'
      },
      {
        icon: 'mdi-code-json',
        toLink: '/json/1',
        title: 'JsonPlaceholder'
      },
      {
        icon: 'mdi-language-markdown',
        toLink: '/md-editor',
        title: 'MarkdownEditor'
      },
      {
        icon: 'mdi-github',
        toLink: '/github',
        title: 'GitHub Commits'
      },
      {
        icon: 'mdi-store',
        toLink: '/store',
        title: 'Store'
      },
      {
        icon: 'mdi-account',
        toLink: '/about',
        title: 'About'
      },
      /*
      * {
      * icon: '',
      * toLink: '/',
      * title: ''
      * },
      * */
    ],
  }),
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin: 0 !important;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: black;
    }
  }
}
</style>
