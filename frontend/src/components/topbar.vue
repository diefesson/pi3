<template>
  <!-- Topbar -->
  <div class="topbar">
    <div class="topbar-content">
      <span v-on:click="sidebarClickHandler" class="topbar-sidebar-open"></span>
      <span class="topbar-brand">HAPPY PET</span>
    </div>
    <div class="topbar-content" v-if="session == null">
      <button-sign-in v-on:click="$emit('toggle-sign-in')" />
    </div>
    <div class="topbar-content" v-else>
      <span>{{ session.username }}</span>
      <button-sign-out v-on:click="$emit('sign-out')" />
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