<template>
  <div class="feed">
    <post v-for="p in posts" v-bind:key="p.id" v-bind:post="p" />
  </div>
</template>

<script>
import Post from "./post.vue";

export default {
  name: "Feed",
  components: { Post },
  data() {
    return {
      posts: [
        {
          ong: {
            name: "Test ONG",
            image: "https://via.placeholder.com/150",
          },
          title: "Post title",
          image: "https://via.placeholder.com/150",
        },
        {
          ong: {
            name: "Test ONG",
            image: "https://via.placeholder.com/150",
          },
          title: "Post title",
          image: "https://via.placeholder.com/150",
        },
      ],
    };
  },
};
</script>

<style src="../styles/feed.scss" lang="scss" scoped></style>