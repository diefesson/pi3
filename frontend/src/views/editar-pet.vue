<template>
    <main class="editar-pet-content">
        <section class="square">
            <div class="titulo">
                <span class="titulo-cadastro">Editar PET</span>
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
                    <input type="submit" value="EDITAR PET" class="botao-cadastrar" @click="putPet">
                    <input type="submit" value="DELETAR PET" @click="deletePet" class="botao-deletar">
                </div>
            </div>
        </section>
    </main>
</template>

<script>
import axios from 'axios'

export default {
    name: "EditarPet",
    data() {
        return {
            id: "",
            title: "",
            race: "",
            age: 0,
            sex: 0,
            ongid: "",
            basePets: "http://localhost:3000/pets"
        };
    },
    created() {
        const item = JSON.parse(localStorage.getItem('petApp'))
        this.id = item[0].id
        this.title = item[0].title
        this.race = item[0].race
        this.age = item[0].age
        this.sex = item[0].sex
        this.ongid = item[0].ongid
    },
    methods: {
        putPet() {
            const obj = {
                title: this.title,
                race: this.race,
                age: this.age,
                sex: this.sex,
                status: 1,
                ongid: this.ongid,
            }
            axios.put(this.basePets + "/" + this.id, obj).then((result) => {
                this.$router.push("/pet/list");
            })
        },
        deletePet() {
            axios.delete(this.basePets + "/"+ this.id, ).then((result) => {
                this.$router.push("/pet/list");
            });
        }
    }
}
</script>

<style scoped src="@/styles/cadastro-pet.scss" lang="scss">

</style>