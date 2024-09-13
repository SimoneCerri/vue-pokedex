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
    <div class="poke-stats mt-3 mb-3">
        <div v-if="pokemon" class="p-2">
            <div class="d-flex flex-column gap-2">
                <div class="short-info d-flex justify-content-evenly text-center">
                    <div> <strong>Name:</strong> <br> {{ pokemon.name }}</div>
                    <div v-for="(type, index) in pokemon.types" :key="index"> <strong>Type:</strong> <br> {{
                        type.type.name }}</div>
                    <div><strong>Weight:</strong> <br> {{ pokemon.weight }} lbs</div>
                    <div><strong>Height:</strong> <br> {{ pokemon.height }} ''</div>
                </div>
                <div class="text-center"><strong>Stats</strong></div>
                <div class="d-flex align-items-center">
                    <span class="col-3">Hp</span>
                    <div class="col-9">
                        <b-progress :value="pokemon.stats[0].base_stat" :max="max" animated></b-progress>
                    </div>
                </div>
                <div class="d-flex align-items-center">
                    <span class="col-3">Attack</span>
                    <div class="col-9">
                        <b-progress :value="pokemon.stats[1].base_stat" :max="max" animated></b-progress>
                    </div>
                </div>
                <div class="d-flex align-items-center">
                    <span class="col-3">Defense</span>
                    <div class="col-9">
                        <b-progress :value="pokemon.stats[2].base_stat" :max="max" animated></b-progress>
                    </div>
                </div>
                <div class="d-flex align-items-center">
                    <span class="col-3">Sp.Attack</span>
                    <div class="col-9">
                        <b-progress :value="pokemon.stats[3].base_stat" :max="max" animated></b-progress>
                    </div>
                </div>
                <div class="d-flex align-items-center">
                    <span class="col-3">Sp.Defense</span>
                    <div class="col-9">
                        <b-progress :value="pokemon.stats[4].base_stat" :max="max" animated></b-progress>
                    </div>
                </div>
                <div class="d-flex align-items-center">
                    <span class="col-3">Speed</span>
                    <div class="col-9">
                        <b-progress :value="pokemon.stats[5].base_stat" :max="max" animated></b-progress>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.poke-stats {
    background-color: rgb(40, 184, 40);
    height: 400px;
    width: 80%;
    border-radius: 20px;
}
</style>