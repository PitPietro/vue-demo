<template>
  <v-app class="github-commits">
    <h1 class="view-title">GitHub Commits</h1>

    <div id="demo">
      <h1>Latest Vue.js Commits</h1>
      <div v-for="(branch, key) in branches" v-bind:key="key">
        <label>
          <input
              :id="branch"
              v-model="currentBranch"
              :value="branch"
              name="branch"
              type="radio"
          />
        </label>
        <label :for="branch">{{ branch }}</label>

      </div>
      <p>vuejs/vue@{{ currentBranch }}</p>
      <ul>
        <li v-for="(record, key) in commits" v-bind:key="key">
          <a :href="record.html_url" class="commit" target="_blank"
          >{{ record.sha.slice(0, 7) }}</a
          >
          - <span class="message">{{ truncate(record.commit.message) }}</span
        ><br/>
          by
          <span class="author"
          ><a :href="record.author.html_url" target="_blank"
          >{{ record.commit.author.name }}</a
          ></span
          >
          at
          <span class="date">{{ formatDate(record.commit.author.date) }}</span>
        </li>
      </ul>
    </div>

  </v-app>
</template>

<script>
// Docs: https://vuejs.org/v2/examples/commits.html

const apiURL = "https://api.github.com/repos/vuejs/vue/commits?per_page=3&sha=";

export default {
  name: "GitHubCommits",

  data: function () {
    return {
      branches: ["master", "dev"],
      currentBranch: "master",
      commits: null
    }
  },

  created: function () {
    this.fetchData();
  },

  watch: {
    currentBranch: "fetchData"
  },

  methods: {
    truncate: function (v) {
      const newline = v.indexOf("\n");
      return newline > 0 ? v.slice(0, newline) : v;
    },
    formatDate: function (v) {
      return v.replace(/[TZ]/g, " ");
    },
    fetchData: function () {
      const xhr = new XMLHttpRequest();
      const self = this;
      xhr.open("GET", apiURL + self.currentBranch);
      xhr.onload = function () {
        self.commits = JSON.parse(xhr.responseText);
      };
      xhr.send();
    }
  }
}
</script>

<style scoped>
.github-commits {
  background-color: #31475e; /* dark green - VueJS logo */
}

#demo {
  background-color: #f6f6f6;

}

a {
  text-decoration: none;
  color: #f66;
}

li {
  line-height: 1.5em;
  margin-bottom: 20px;
}

.author,
.date {
  font-weight: bold;
}

</style>