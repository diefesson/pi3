<template>
  <div class="post-item">
    <div class="content">
      <img v-bind:src="post.image" />
      <span>{{ post.description }}</span>
    </div>
    <div class="options">
      <span class="option modify" v-on:click="modifyClickHandler">EDITAR</span>
      <span class="option remove" v-on:click="removeClickHandler">REMOVER</span>
    </div>
  </div>
</template>

<script>
import postService from "../services/post-service";

export default {
  name: "PostItem",
  props: ["post"],
  methods: {
    modifyClickHandler() {
      this.$router.push("/modify/" + this.post.id);
    },
    async removeClickHandler() {
      const result = await postService.remove(this.post.id);
      if (result.isError()) {
        console.error(result.error);
      }
      this.$emit("postremoved", this.post);
    },
  },
};
</script>

<style lang="scss" >
@use "../styles/base.scss";

.post-item {
  background-color: base.$color-background-surface;
  border-radius: 15px;
  box-sizing: border-box;
  filter: base.$shadow-card;
  padding: 10px;
}

.content img {
  width: 150px;
  height: 150px;
  margin: 5px;
}

.content {
  display: flex;
  align-items: flex-start;
  color: base.$color-dark-text-80;
  font-size: 24px;
  font-family: base.$font-headline;
}

.options {
  display: flex;
  gap: 12px;
  justify-content: flex-end;
}

.option {
  color: base.$color-dark-text-80;
  font-size: 18px;
  font-family: base.$font-body;
  cursor: pointer;
}

.remove {
  color: base.$color-status-error;
}
</style>