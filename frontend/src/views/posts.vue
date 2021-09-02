<template>
  <div class="page-content">
    <div class="post-list">
      <post-item v-for="p in posts" v-bind:key="p.id" v-bind:post="p" />
    </div>
  </div>
</template>

<script>
import postService from "../services/post-service";
import PostItem from "../components/post-item.vue";

export default {
  name: "Posts",
  data() {
    return {
      posts: [],
    };
  },
  components: {
    PostItem,
  },
  methods: {
    async updatePosts() {
      const result = await postService.findAll();
      if (result.isSuccess()) {
        this.posts = result.value;
      } else {
        console.error(result.error);
      }
    },
  },
  mounted: async function () {
    this.updatePosts();
  },
};
</script>

<style lang="scss" scoped>
.page-content {
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.post-list {
  width: 100%;
  max-width: 700px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-top: 10px;
}
</style>