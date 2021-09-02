<template>
    <main class="editar-pet-content">
        <section class="square">
            <div class="titulo">
                <span class="titulo-cadastro">Editar PET</span>
            </div>

            <form class="formulario" @submit.prevent="cadastroPetClickHandler">
                <fieldset class="dados-iniciais">
                    <label for="titulo" class="info-pet" name="titulo">Título:</label>
                    <input type="text" name="titulo" id="titulo" class="input-padrao" v-model="title" required>
                    <label for="raca info-pet" name="raca" class="info-pet">Raça:</label>
                    <input type="text" name="raca" id="raca" class="input-padrao" v-model="race" required>
                </fieldset>
                <div class="campos-selecionar">
                    <div class="item-selecionar">
                        <label class="info-pet">Sexo:</label>
                        <select id="sexo" class="selecionar-opcao" v-model="sex" required>
                            <option selected disabled value="">Selecione</option>
                            <option value="0">Fêmea</option>
                            <option value="1">Macho</option>
                        </select>
                    </div>
                     
                    <div class="item-selecionar">
                        <label class="info-pet">Idade:</label>
                        <select id="idade" class="selecionar-opcao" v-model="age" required>
                            <option selected disabled value="">Selecione</option>
                            <option value="1">Adulto</option>
                            <option value="0">Filhote</option>
                        </select>
                    </div>
                </div>
                
                
                <div class="cadastrar">
                    <input type="submit" value="EDITAR PET" class="botao-cadastrar">
                    <input type="submit" value="DELETAR PET" class="botao-deletar">
                </div>
            </form>
        </section>
    </main>
</template>

<script>
export default {
    name: "EditarPet",
    data() {
        return {
            title: "",
            race: "",
            age: 0,
            sex: 0,
            ongId: ""
        };
    },
}
</script>

<style scoped src="@/styles/cadastro-pet.scss" lang="scss">

</style>