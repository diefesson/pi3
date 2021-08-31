<template>
  <div class="feed">
    <post v-for="p in posts" v-bind:key="p.id" v-bind:post="p" />
  </div>
</template>

<script>
import Post from "./post.vue";
import postService from "../services/post-service";

export default {
  name: "Feed",
  components: { Post },
  data() {
    return {
      posts: [],
    };
  },
  methods: {
    async loadPosts() {
      this.posts = await postService.findAll();
    },
  },
  mounted() {
    this.loadPosts();
  },
};
</script>

<style src="../styles/feed.scss" lang="scss" scoped></style>