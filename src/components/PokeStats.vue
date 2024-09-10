<script>

export default
    {
        name: "PokeStats",
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
    <div class="poke-stats mt-5">
        <div v-if="pokemon" class="p-3">
            <ul class="list-unstyled d-flex flex-column gap-2">
                <li>Name: {{ pokemon.name }}</li>
                <li>Type: {{ pokemon.name }}</li>
                <li v-for="(type, index) in pokemon.types" :key="index"> Type: {{ type.type.name }}</li>
                <li>Weight: {{ pokemon.weight }} lbs</li>
                <li>Height: {{ pokemon.height }} ''</li>
                <li>Stats</li>
            </ul>
        </div>
    </div>
</template>

<style scoped>
.poke-stats {
    background-color: green;
    height: 350px;
    width: 80%;
}
</style>