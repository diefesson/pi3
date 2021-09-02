<template>
  <topbar
    v-on:toggle-sign-in="toggleSignInHandler"
    v-on:sign-out="signOutHandler"
    v-on:toggle-sidebar="toggleSidebarHandler"
    v-bind:session="session"
  />
  <sidebar
    v-on:toggle-sidebar="toggleSidebarHandler"
    v-bind:show="showSidebar"
    v-bind:session="session"
  />
  <modal-container
    v-bind:show="showSignIn"
    v-on:toggle-sign-in="toggleSignInHandler"
  >
    <modal-sign-in
      v-on:set-session="setSessionHandler"
      v-on:toggle-sign-in="toggleSignInHandler"
    />
  </modal-container>
  <router-view />
</template>

<script>
import Topbar from "./components/topbar.vue";
import Sidebar from "./components/sidebar.vue";
import ModalContainer from "./components/modal-container.vue";
import ModalSignIn from "./components/modal-sign-in.vue";
import userService from './services/user-service';

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
      userService.clearSession()
      this.$router.push("/home");
    },
    toggleSidebarHandler() {
      this.showSidebar = !this.showSidebar;
    },
    toggleSignInHandler() {
      this.showSignIn = !this.showSignIn;
    },
  },
  mounted(){
    this.session = userService.getSession()
  }
};
</script>

<style src="./styles/base.scss" lang="scss" scoped></style>