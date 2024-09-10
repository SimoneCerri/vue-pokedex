<script>

export default
    {
        name: "PokeImage",
        props: {
            pokemon: Object,
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
    <div class="poke-img mt-3">
        <img v-if="pokemon" :src="pokemon.sprites.front_default" alt="">
    </div>
</template>

<style scoped>
.poke-img {
    background-color: white;
    height: 200px;
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
        width: 200px;
    }
}
</style>