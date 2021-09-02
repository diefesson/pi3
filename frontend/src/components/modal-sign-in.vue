<template>
  <modal>
    <div class="sign-in-top">
      <span>Sign in</span>
    </div>
    <div class="sign-in-middle">
      <div class="sign-in-field">
        <span>NOME DE USUÁRIO</span>
        <input
          type="text"
          v-model="username"
          v-bind:minlength="minUsername"
          required
        />
      </div>
      <div class="sign-in-field">
        <span>SENHA</span>
        <input
          type="password"
          v-model="password"
          v-bind:minlenght="minPassword"
          required
        />
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
      username: "",
      password: "",
      statusMessage: "",
      statusClass: "",
      minUsername: 5,
      minPassword: 6,
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
      if (this.username.length < this.minUsername) {
        this.alertStatus(
          "O nome de usuário deve ter pelo menos " +
            this.minUsername +
            " caracteres"
        );
        return false;
      }
      if (this.password.length < this.minPassword) {
        this.alertStatus(
          "A senha teve ter ao menos " + this.minPassword + " caracteres"
        );
        return false;
      }
      return true;
    },
    async signInClickHandler() {
      if (this.validate()) {
        this.infoStatus("Signing in...");
        const result = await userService.signIn(this.username, this.password);
        if (result.isSuccess()) {
          const session = result.value;
          this.successInfo("Signed in");
          await sleep(1000);
          this.$emit("toggle-sign-in");
          this.$emit("set-session", { session });
        } else {
          this.errorStatus(result.error.message);
        }
      }
    },
  },
};
</script>

<style src="../styles/modal-sign-in.scss" lang="scss" scoped></style>