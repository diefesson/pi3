<template>
    <main class="content-add-pet">
        <section class="square">
            <div class="titulo">
                <span class="titulo-cadastro">Cadastrar PET</span>
            </div>

            <div class="formulario">
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
                    <input type="submit" value="CADASTRAR PET" class="botao-cadastrar" @click="cadastroPetClickHandler">
                </div>
            </div>
        </section>
    </main>
</template>

<script>
import petService from "../services/pet-service";
// import userService from "../services/user-service"

export default {

    name: "CadastroPet",
    data() {
        return {
            title: "",
            race: "",
            age: 0,
            sex: 0,
            ongId: ""
        };
    },
    methods: {
        async cadastroPetClickHandler() {
            try {
                // this.ongId = userService.getSession().ongid
                await petService.cadastrarPet(
                    this.title,
                    this.race,
                    this.age,
                    this.sex,
                    1, // Status
                    1 // OngId
                );
                this.$router.push("/pet/list");
            } catch (e) {
                alert(e.message);
            }
        },
    },
}
</script>

<style scoped src="@/styles/cadastro-pet.scss" lang="scss">

</style>