<template>
  <topbar
<<<<<<< HEAD
    v-on:toggle-sign-in="toggleSignInHandler"
=======
    v-on:sign-in="signInHandler"
>>>>>>> login
    v-on:sign-out="signOutHandler"
    v-on:toggle-sidebar="toggleSidebarHandler"
    v-bind:session="session"
  />
  <sidebar
    v-on:toggle-sidebar="toggleSidebarHandler"
    v-bind:show="showSidebar"
    v-bind:session="session"
  />
<<<<<<< HEAD
  <modal-container
    v-bind:show="showSignIn"
    v-on:toggle-sign-in="toggleSignInHandler"
  >
    <modal-sign-in
      v-on:set-session="setSessionHandler"
      v-on:toggle-sign-in="toggleSignInHandler"
    />
  </modal-container>
=======
>>>>>>> login
  <router-view />
</template>

<script>
import Topbar from "./components/topbar.vue";
import Sidebar from "./components/sidebar.vue";
<<<<<<< HEAD
import ModalContainer from "./components/modal-container.vue";
import ModalSignIn from "./components/modal-sign-in.vue";

export default {
  name: "App",
  components: { Topbar, Sidebar, ModalContainer, ModalSignIn },
  data() {
    return {
      showSidebar: false,
      showSignIn: false,
      session: null,
    };
  },
  methods: {
    setSessionHandler(event) {
      this.session = event.session;
    },
    signOutHandler(event) {
      this.session = null;
=======

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
>>>>>>> login
    },
    toggleSidebarHandler() {
      this.showSidebar = !this.showSidebar;
    },
<<<<<<< HEAD
    toggleSignInHandler() {
      this.showSignIn = !this.showSignIn;
    },
=======
>>>>>>> login
  },
};
</script>

<style src="@/styles/base.scss" lang="scss"></style>