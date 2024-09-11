<script>

export default
    {
        name: "PokeStats",
        props: {
            pokemon: Object,
        },
        data() {
            return {
                max: 255,
            }
        },
        methods:
        {

        },
        mounted() {
            /* console.log('Pokemon Stats:', this.pokemon.stats);
            console.log('Value:', this.pokemon.stats[0].base_stat);
            console.log('Max:', this.max); */
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
                <li class="d-flex align-items-center">
                    <span class="col-3">Hp</span>
                    <div class="col-9">
                        <b-progress :value="pokemon.stats[0].base_stat" :max="max" animated></b-progress>
                    </div>
                </li>
                <li class="d-flex align-items-center">
                    <span class="col-3">Attack</span>
                    <div class="col-9">
                        <b-progress :value="pokemon.stats[1].base_stat" :max="max" animated></b-progress>
                    </div>
                </li>
                <li class="d-flex align-items-center">
                    <span class="col-3">Defense</span>
                    <div class="col-9">
                        <b-progress :value="pokemon.stats[2].base_stat" :max="max" animated></b-progress>
                    </div>
                </li>
                <li class="d-flex align-items-center">
                    <span class="col-3">Sp.Attack</span>
                    <div class="col-9">
                        <b-progress :value="pokemon.stats[3].base_stat" :max="max" animated></b-progress>
                    </div>
                </li>
                <li class="d-flex align-items-center">
                    <span class="col-3">Sp.Defense</span>
                    <div class="col-9">
                        <b-progress :value="pokemon.stats[4].base_stat" :max="max" animated></b-progress>
                    </div>
                </li>
                <li class="d-flex align-items-center">
                    <span class="col-3">Speed</span>
                    <div class="col-9">
                        <b-progress :value="pokemon.stats[5].base_stat" :max="max" animated></b-progress>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<style scoped>
.poke-stats {
    background-color: green;
    height: 400px;
    width: 80%;
}
</style>