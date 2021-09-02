<template>
    <div class="view-pet">
        <main class="square">
            <section class="pet-principal">
                <div class="imagem-pet">
                    <img src="https://www.dicaspetz.com.br/wp-content/uploads/2017/04/comportamento-dos-gatos-1.jpg" alt="" class="imagem">
                </div>
                <div class="dado-pet">
                    <div class="titulo-pet">
                        <span class="titulo">Gato de raça abandonado</span>
                    </div>
                    <div class="info-pet">
                        <span class="span-dados">
                            Raça: <span class="span-info">Siamês</span></span>
                        <span class="span-dados">
                            Idade: <span class="span-info">Adulto</span></span>
                        <span class="span-dados">
                            Sexo: <span class="span-info">Macho</span></span>
                    </div>
                </div>
            </section>
            <section class="description">
                <div class="titulo-description-session">
                    <span class="titulo-description">Descrição: </span>
                </div>
                
                <p class="text-description">Este gato foi encontrado em uma rua, quase subnutrido. Não tinha coleira. Nossa equipe cuidou e tratou bem dele e agora estamos buscando alguém que aceite cuidar dele. 
                    Quem tiver interesse, basta apenas contatar algum de nossos funcionários ou ir à sede de nossa ONG.
                </p>
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
    methods: {
        retornar() {
            this.$router.push("/pet/list");
        }
    }
}
</script>

<style scoped src="@/styles/view-pet.scss" lang="scss">

</style>