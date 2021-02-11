<template>
  <v-app class="json-class">
    <h1 class="view-title">JsonPlaceholder</h1>
    <v-container>
      <v-row>
        <v-col>
          <PostComponent/>
        </v-col>
        <v-col>
          <Comments/>
        </v-col>
      </v-row>
    </v-container>
    <!--
    <div>
      <PostComponent/>
      <hr/>
      <Comments/>
    </div>
    -->
  </v-app>
</template>

<script>
import PostComponent from "@/components/GET-from-json/Posts";
import Comments from "@/components/GET-from-json/Comments";

export default {
  name: 'JsonPlaceholder',
  components: {
    PostComponent,
    Comments
  }
}
</script>

<style scoped>
.json-class {
  background-color: #31475e; /* dark green - VueJS logo */
}

.title {
  margin: 5%;
  padding: 5%;
  background-color: #3fb984; /* light green - VueJS logo */
}
</style>
