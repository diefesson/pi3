<template>
  <div class="post">
    <div class="post-top">
      <div class="post-profile">
        <img v-bind:src="post.org.image" />
        <span>{{ post.org.name }}</span>
      </div>
      <p>{{ post.description }}</p>
    </div>
    <img class="post-middle" v-bind:src="post.image" />
    <div class="post-bottom">COMPARTILHAR</div>
  </div>
</template>

<style src="../styles/post.scss" lang="scss" scoped></style>

<script>
export default {
  name: "Post",
  props: ["post"],
};
</script>