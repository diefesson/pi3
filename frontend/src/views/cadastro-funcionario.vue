<template>
    <main class="cadastro-content">
        <section class="square">
            <div class="titulo">
                <span class="titulo-cadastro">Cadastrar Funcionário</span>
            </div>

            <form class="formulario" action="">
                <fieldset class="dados">
                    <label for="email-funcionario" class="dados-funcionario" name="email-funcionario">Email: </label>
                    <input type="email" name="email-funcionario" id="email-funcionario" class="input-padrao"  required>
                    <label for="username-funcionario" class="dados-funcionario" name="username-funcionario">Nome de usuário: </label>
                    <input type="text" name="username-funcionario" id="username-funcionario" class="input-padrao" minlength="5" required>
                    <label for="name-org" class="dados-funcionario" name="name-org">Nome da organização: </label>
                    <input type="text" name="name-ong" id="name-org" class="input-padrao" required>
                    <label for="senha-funcionario" class="dados-funcionario" name="senha-funcionario">Senha: </label>
                    <input type="password" name="senha-funcionario" id="senha-funcionario" class="input-padrao" pattern="^.{6,14}$" required>
                </fieldset>

                <div class="cadastrar">
                    <input type="submit" value="CADASTRAR FUNCIONÁRIO" class="botao-cadastrar">
                </div>
            </form>
        </section>
    </main>
</template>

<script>
export default {
    name: "Cadastro"
}
</script>

<style scoped src="@/styles/cadastro-funcionario.scss" lang="scss">

</style>
