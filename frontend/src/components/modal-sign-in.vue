<template>
  <modal>
    <div class="sign-in-top">
      <span>Sign in</span>
    </div>
    <div class="sign-in-middle">
      <div class="sign-in-field">
        <span>ONG ID</span>
        <input type="text" v-model="oid" />
      </div>
      <div class="sign-in-field">
        <span>USER ID</span>
        <input type="text" v-model="uid" />
      </div>
      <div class="sign-in-field">
        <span>PASSWORD</span>
        <input type="password" v-model="password" />
      </div>
    </div>
    <div class="sign-in-bottom">
      <button-sign-in v-on:click="signInClickHandler" />
      <label class="sign-in-status" v-bind:class="statusClass">
        {{ statusMessage }}
      </label>
    </div>
  </modal>
</template>

<script>
import Modal from "./modal.vue";
import ButtonSignIn from "./button-sign-in.vue";
import userService from "../services/user-service";
import sleep from "../utils/sleep";

export default {
  name: "ModalSignIn",
  components: { Modal, ButtonSignIn },
  data() {
    return {
      oid: "",
      uid: "",
      password: "",
      statusMessage: "",
      statusClass: "",
    };
  },
  methods: {
    setStatus(status, message) {
      this.statusClass = status;
      this.statusMessage = message;
    },
    successInfo(message) {
      this.setStatus("text-success", message);
    },
    infoStatus(message) {
      this.setStatus("text-info", message);
    },
    alertStatus(message) {
      this.setStatus("text-alert", message);
    },
    errorStatus(message) {
      this.setStatus("text-error", message);
    },
    validate() {
      if (this.oid.length < 3) {
        this.alertStatus("OID must contain at least 3 chars");
        return false;
      }
      if (this.uid.length < 3) {
        this.alertStatus("UID must contain at least 3 chars");
        return false;
      }
      if (this.password.length < 3) {
        this.alertStatus("Password must contain at least 8 chars");
        return false;
      }
      return true;
    },
    async signInClickHandler() {
      if (this.validate()) {
        try {
          this.infoStatus("Signing in...");
          var session = await userService.signIn(
            this.oid,
            this.uid,
            this.password
          );
          this.successInfo("Signed in");
          await sleep(1000);
          this.$emit("toggle-sign-in");
          this.$emit("set-session", { session });
        } catch (e) {
          this.errorStatus(e.message);
        }
      }
    },
  },
};
</script>

<style src="../styles/modal-sign-in.scss" lang="scss" scoped></style>