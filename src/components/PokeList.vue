<script>

export default
    {
        name: "PokeList",
        props: {
            myPokemons:
            {
                type: Array
            }
        },
        data() {
            return {

            }
        },
        methods:
        {

        },
        mounted() {

        }
    }
</script>

<template>
    <div class="poke-captured mt-3 text-center">
        <h1 class="">
            Poke Collection
        </h1>
        <ul class="list-unstyled d-flex flex-wrap justify-content-center">
            <li v-for="pokemon in myPokemons" :key="pokemon">
                <img :src="pokemon.sprite" alt="">
            </li>
        </ul>
    </div>
</template>

<style scoped>
.poke-captured {
    background-color: white;
    height: 600px;
    width: 80%;
}
</style>