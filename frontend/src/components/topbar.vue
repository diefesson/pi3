<template>
  <!-- Topbar -->
  <div class="topbar">
    <div class="topbar-content">
      <span v-on:click="sidebarClickHandler" class="topbar-sidebar-open"></span>
      <span class="topbar-brand">HAPPY PET</span>
    </div>
    <div class="topbar-content">
      <span v-if="session.signed">{{ session.uid }}</span>
      <button-sign-in v-if="!session.signed" v-on:click="$emit('sign-in')" />
      <button-sign-out v-if="session.signed" v-on:click="$emit('sign-out')" />
    </div>
  </div>
</template>

<script>
import ButtonSignIn from "./button-sign-in.vue";
import ButtonSignOut from "./button-sign-out.vue";

export default {
  name: "Topbar",
  props: ["session"],
  components: { ButtonSignIn, ButtonSignOut },
  methods: {
    sidebarClickHandler() {
      this.$emit("toggle-sidebar");
    },
  },
};
</script>

<style src="@/styles/topbar.scss" lang="scss"></style>