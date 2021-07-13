<template>
  <topbar
    v-on:sign-in="signInHandler"
    v-on:sign-out="signOutHandler"
    v-bind:session="session"
  />
  <router-view />
</template>

<script>
import Topbar from "@/components/Topbar.vue";

export default {
  data() {
    return {
      session: {
        signed: false,
        oid: null,
        uid: null,
      },
    };
  },
  name: "App",
  components: { Topbar },
  methods: {
    signInHandler: function (event) {
      console.log("sign in handler"); // todo: remove me
      this.session = {
        signed: true,
        uid: "diefesson",
        oid: "org",
      };
    },
    signOutHandler: function (event) {
      this.session = {
        signed: false,
        uid: null,
        oid: null,
      };
    },
  },
};
</script>

<style src="@/styles/base.scss" lang="scss"></style>