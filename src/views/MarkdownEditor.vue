<template>
  <v-app class="md-editor">
    <h1 class="view-title">Markdown Editor</h1>
    <div id="editor">
      <textarea :value="input" @input="update"></textarea>
      <div v-html="compiledMarkdown"></div>
    </div>
  </v-app>
</template>

<script>
// Docs: https://vuejs.org/v2/examples/index.html

//  https://github.com/chjj/marked
import marked from 'marked';

// https://lodash.com/
const _ = require('lodash');

export default {
  name: "MarkdownEditor",

  data() {
    return {
      input: '# Welcome to the editor'
    }
  },

  computed: {
    compiledMarkdown: function () {
      return marked(this.input, {sanitize: true});
    }
  },

  methods: {
    update: _.debounce(function (e) {
      this.input = e.target.value;
    }, 300)
  }
}
</script>

<style scoped>
.md-editor {
  padding-bottom: 0;
  background-color: #31475e; /* dark green - VueJS logo */
}

textarea,
#editor div {
  display: inline-block;
  width: 49%;
  height: 100%;
  vertical-align: top;
  box-sizing: border-box;
  padding: 0 20px;
  margin-right: 5px;
  background-color: #f6f6f6;
}

textarea {
  border: none;
  border-right: 1px solid #ccc;
  resize: none;
  outline: none;
  background-color: #f6f6f6;
  font-size: 14px;
  font-family: "Monaco", courier, monospace;
  padding: 20px;
}

code {
  color: #f66;
}
</style>