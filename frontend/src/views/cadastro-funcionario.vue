<template>
  <main class="cadastro-content">
    <section class="square">
      <div class="titulo">
        <span class="titulo-cadastro">Cadastrar Funcionário</span>
      </div>

      <div class="formulario">
        <fieldset class="dados">
          <label
            for="email-funcionario"
            class="dados-funcionario"
            name="email-funcionario"
            >Email:
          </label>
          <input
            type="email"
            v-model="email"
            id="email-funcionario"
            class="input-padrao"
            required
          />
          <label
            for="username-funcionario"
            class="dados-funcionario"
            name="username-funcionario"
            >Nome de usuário:
          </label>
          <input
            type="text"
            name="username-funcionario"
            id="username-funcionario"
            placeholder="O nome de usuário deve ter pelo menos 5 letras e começar com uma letra"
            class="input-padrao"
            pattern="^[a-zA-Z]\w{5,14}$"
            v-model="username"
            required
          />
          <label for="id-org" class="dados-funcionario" name="id-org"
            >Id ONG:
          </label>
          <input
            type="number"
            name="id-ong"
            id="id-org"
            class="input-padrao"
            v-model="orgId"
            required
          />
          <label
            for="senha-funcionario"
            class="dados-funcionario"
            name="senha-funcionario"
            >Senha:
          </label>
          <input
            type="password"
            name="senha-funcionario"
            id="senha-funcionario"
            class="input-padrao"
            v-model="password"
            pattern="^.{6,14}$"
            required
          />
        </fieldset>

        <div class="cadastrar">
          <!--<input type="submit" value="Cadastrar" class="botao-cadastrar">-->
          <button class="botao-cadastrar" v-on:click="cadastroClickHandler">
            Cadastrar Funcionário
          </button>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import employerService from "../services/employer-service";

export default {
  name: "CadastroFuncionario",
  data() {
    return {
      email: "",
      username: "",
      orgId: "",
      password: "",
    };
  },
  methods: {
    async cadastroClickHandler() {
      try {
        await employerService.cadastrarFuncionario(
          this.username,
          this.password,
          this.email,
          this.orgId
        );
        console.log("após service")// TODO: remove me
        this.$router.push("/home");
      } catch (e) {
        alert(e.message);
      }
    },
  },
};
</script>

<style scoped src="@/styles/cadastro-funcionario.scss" lang="scss">
</style>
