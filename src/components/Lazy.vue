<template>
  <v-container>
    <h1 class="text-center">{{ titles[0] }}</h1>
    <h2 class="text-center ml-5 my-10"> 1~ {{ titles[1] }} </h2>

    <v-responsive
        class="overflow-y-auto"
        max-height="400"
    >
      <div class="pa-6 text-center">
        <h3>Scroll down</h3>
      </div>

      <v-responsive
          height="200vh"
          class="text-center pa-2"
      >
        <v-responsive min-height="50vh"></v-responsive>
        <div class="text-center body-2 mb-12">
          <h3>The card will appear below:</h3>
        </div>

        <v-lazy
            v-model="isActive"
            :options="{
          threshold: .5
        }"
            min-height="200"
            transition="fade-transition"
        >
          <v-card
              class="mx-auto"
              max-width="336"
          >
            <v-card-title>Lazy</v-card-title>

            <v-card-text class="text-left">
              <p>adjective, <b>la·zi·er</b>, <b>la·zi·est</b>.</p>
              <ol>
                <li>verse or disinclined to work, activity, or exertion; indolent.</li>
                <li>causing idleness or indolence: a hot, lazy afternoon.</li>
                <li>slow-moving; sluggish: a lazy stream.</li>
                <li>(of a livestock brand) placed on its side instead of upright.</li>
              </ol>

              <p>verb (used without object), <b>la·zied</b>, <b>la·zy·ing</b>.</p>
              <ol>
                <li>to laze.</li>
              </ol>
              <br />
              <a href="https://www.dictionary.com/browse/lazy?s=t">reference</a>
            </v-card-text>
          </v-card>
        </v-lazy>
      </v-responsive>
    </v-responsive>

  </v-container>

</template>

<script>
export default {
  name: "Lazy",

  data: () => ({
    titles: [
      "Lazy",
      "Lazy Card",
    ],
    isActive: false,
  }),
}
</script>

<style scoped>

</style>