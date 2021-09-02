<template>
    <div class="view-pet">
        <main class="square">
            <section class="pet-principal">
                <div class="imagem-pet">
                    <img src="../img/pet.jpg" alt="" class="imagem">
                </div>
                <div class="dado-pet">
                    <div class="titulo-pet">
                        <span class="titulo">{{ title }}</span>
                    </div>
                    <div class="info-pet">
                        <span class="span-dados">
                            Raça: <span class="span-info">{{ race }}</span></span>
                        <span class="span-dados">
                            Idade: <span class="span-info">{{ verificarIdade(age) }}</span></span>
                        <span class="span-dados">
                            Sexo: <span class="span-info">{{ verificarSexo(sex) }}</span></span>
                        
                        <span class="contato">Ficou interessado? Entre em contato com a nossa ONG: </span>
                        <span class="contato-info">{{ name }}</span>
                    </div>
                </div>
            </section>
            <div class="voltar">
                <button class="button-voltar" @click="retornar()">Voltar</button>
            </div>
        </main>
    </div>
</template>

<script>
export default {
    name: "ViewPet",
    data() {
        return {
            title: "",
            race: "",
            age: 0,
            sex: 0,
            name: ""
        }
    },
    methods: {
        retornar() {
            this.$router.push("/pet/list");
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
        const item = JSON.parse(localStorage.getItem('petApp'))
        this.title = item[0].title
        this.race = item[0].race
        this.age = item[0].age
        this.sex = item[0].sex
        this.name = item[0].name
    }
}
</script>

<style scoped src="@/styles/view-pet.scss" lang="scss">

</style>