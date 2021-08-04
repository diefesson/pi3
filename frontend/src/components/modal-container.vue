<template>
  <div
    class="modal-container"
    v-if="show"
    v-bind="$attrs"
    v-on:click="backgroundClickHandler"
  >
    <slot>Teste</slot>
  </div>
</template>

<script>
export default {
  name: "ModalContainer",
  props: ["show"],
  methods: {
    backgroundClickHandler(event) {
      if (event.target === event.currentTarget) {
        this.$emit("toggle-sign-in");
      }
    },
  },
};
</script>

<style src="../styles/modal-container.scss" lang="scss" scoped></style>