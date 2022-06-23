<template>
  <div>
    <h1>Video Portal App</h1>
    <SearchInput @newTerm="handleNewTerm"></SearchInput>
    <VideosComp v-bind:videos="videosList"></VideosComp>    
  </div>
</template>

<script>
import SearchInput from "./components/SearchInput.vue";
import VideosComp from "./components/Videos.vue";

const _API_KEY = "28146946-3fafd1a2fb5e60ae69c704090";

export default {
  name: "App",
  components: { SearchInput, VideosComp },
  data() {
    return {
      videosList: [],
    };
  },
  methods: {
    handleNewTerm: async function (searchInputTerm) {
      console.log("newTerm Event: " + searchInputTerm);
      const response = await fetch(
        "https://pixabay.com/api/videos/?" +
          new URLSearchParams({
            key: _API_KEY,
            q: searchInputTerm,
          })
      );
      const data = await response.json();
      this.videosList = data.hits;
    },
  },
};
</script>

<style></style>
