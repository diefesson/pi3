<template>
    <div class="list-pets">
        <div class="content">
            <div class="titulo">
                <span class="titulo-visualizar">Visualizar PETs</span>
            </div>
            <div v-for="pet in petsList" :key="pet.title">
                <div v-if="pet.id" class="cards-list">
                    <div class="card">
                        <div class="imagem-pet">
                            <img src="../img/pets.png" alt="" class="imagem">
                        </div>
                        <div class="info-pet">
                            <div class="nome-pet">
                                <span class="span-pet">{{ pet.title }}</span>
                            </div>
                            <div class="dados">
                                <span class="span-dados">{{ pet.race }}</span>
                                <span class="span-dados">{{ verificarIdade(pet.age) }}</span>
                                <span class="span-dados">{{ verificarSexo(pet.sex) }}</span>
                            </div>
                            <div class="botoes">
                                <button class="botao-ver" @click="verPet">Ver</button>
                                <button class="botao-editar" @click="putPet">Editar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: "ListPets",
    data() {
        return {
            basePets: "http://localhost:3000/pets",
            petsList: []
        }
    },
    methods: {
        putPet() {
            this.$router.push("/pet/edit");
        },

        verPet() {
            this.$router.push("/pet/view");
        },

        retornaNumero(id) {
            const numero = Number (id);
            return numero;
        },

        verificarIdade(id) {
            if (id === 0) {
                return "Filhote";
            }
            else {
                return "Adulto"
            }
        },

        verificarSexo (id) {
            if (id === 0) {
                return "Fêmea";
            } else {
                return "Macho";
            }
        } 
    },
    mounted() {
        axios.get(this.basePets).then((result) => { 
            this.petsList = result.data;
            console.log(this.petsList);
        }); 
    },
}
</script>

<style scoped src="@/styles/visualizar-pets.scss" lang="scss">

</style>