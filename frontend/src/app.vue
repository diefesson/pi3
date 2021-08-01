<template>
  <topbar
    v-on:sign-in="signInHandler"
    v-on:sign-out="signOutHandler"
    v-on:toggle-sidebar="toggleSidebarHandler"
    v-bind:session="session"
  />
  <sidebar
    v-on:toggle-sidebar="toggleSidebarHandler"
    v-bind:show="showSidebar"
    v-bind:session="session"
  />
  <router-view />
</template>

<script>
import Topbar from "./components/topbar.vue";
import Sidebar from "./components/sidebar.vue";

export default {
  name: "App",
  components: { Topbar, Sidebar },
  data() {
    return {
      showSidebar: false,
      session: {
        signed: false,
        oid: null,
        uid: null,
      },
    };
  },
  methods: {
    signInHandler(event) {
      console.log("sign in handler"); // todo: remove me
      this.session = {
        signed: true,
        uid: "diefesson",
        oid: "org",
      };
    },
    signOutHandler(event) {
      this.session = {
        signed: false,
        uid: null,
        oid: null,
      };
    },
    toggleSidebarHandler() {
      this.showSidebar = !this.showSidebar;
    },
  },
};
</script>

<style src="@/styles/base.scss" lang="scss"></style>