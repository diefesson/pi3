<template>
    <main class="content-add-pet">
        <section class="square">
            <div class="titulo">
                <span class="titulo-cadastro">Cadastrar PET</span>
            </div>

            <form class="formulario" action="employer-home.html" method="POST" name="formuser">
                <fieldset class="dados-iniciais">
                    <label for="titulo" class="info-pet" name="titulo">Título:</label>
                    <input type="text" name="titulo" id="titulo" class="input-padrao" required>
                    <label for="raca info-pet" name="raca" class="info-pet">Raça:</label>
                    <input type="text" name="raca" id="raca" class="input-padrao" required>
                </fieldset>
                <div class="campos-selecionar">
                    <div class="item-selecionar">
                        <label class="info-pet">Sexo:</label>
                        <select id="sexo" class="selecionar-opcao" required>
                            <option selected disabled value="">Selecione</option>
                            <option>Fêmea</option>
                            <option>Macho</option>
                        </select>
                    </div>
                     
                    <div class="item-selecionar">
                        <label class="info-pet">Idade:</label>
                        <select id="idade" class="selecionar-opcao" required>
                            <option selected disabled value="">Selecione</option>
                            <option>Adulto</option>
                            <option>Filhote</option>
                        </select>
                    </div>
                </div>
                <div>
                    <label class="info-pet">Descrição:</label>
                    <textarea name="descricao" id="descricao" class="descricao"></textarea>
                </div>

                <div>
                    <label class="info-pet">Imagens:</label>
                    <label for="imagem" class="botao-carregar">Carregar imagem</label>
                    <input type="file" multiple accept=".jpg, .png, .gif, .jpeg " id="imagem" required class="carregar-imagem">
                </div>
                
                <div class="cadastrar">
                    <input type="submit" value="CADASTRAR PET" class="botao-cadastrar">
                </div>
            </form>
        </section>
    </main>
</template>

<script>
export default {
    name: "CadastroPet"
}
</script>

<style scoped src="@/styles/cadastro-pet.scss" lang="scss">

</style>