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
                openOption: null,
            }
        },
        methods:
        {
            showOptions(index) {
                if (this.openOption === index) {
                    this.openOption = null;
                } else {
                    this.openOption = index;
                }
                //console.log(this.openOption);
            },
            viewPokemon(pokemon) {
                this.$emit('selected-pokemon', pokemon);
                //console.log(pokemon);
                this.openOption = null;
            },
            removePokemon(index) {
                this.myPokemons.splice(index, 1);
                localStorage.setItem("myPokemons", JSON.stringify(this.myPokemons));
                this.openOption = null;
            },
        },
        mounted() {
            //console.log(this.myPokemons);
        }
    }
</script>

<template>
    <div class="poke-captured text-center">
        <!-- <h1 class="">
            Poke Collection
        </h1> -->
        <ul class="list-unstyled d-flex flex-wrap justify-content-center">
            <li v-for="(pokemon, index) in myPokemons" :key="index" class="position-relative">
                <img @click="showOptions(index)" :src="pokemon.sprites.front_default" alt="">
                <div v-if="openOption === index" class="context-menu">
                    <ul>
                        <li @click="viewPokemon(pokemon)">Inspect</li>
                        <li @click="removePokemon(index)">Remove</li>
                    </ul>
                </div>
            </li>
        </ul>
    </div>
</template>

<style scoped>
.poke-captured {
    background-color: rgb(189, 181, 181);
    height: 400px;
    width: 80%;
    margin-top: 150px;
    -webkit-overflow-scrolling: touch;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
    border-radius: 20px;

    .context-menu {
        position: absolute;
        background-color: white;
        border: 1px solid #ccc;
        padding: 10px;
        z-index: 1000;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
        border-radius: 20px;
    }

    .context-menu ul {
        list-style-type: none;
        padding: 0;
        margin: 0;
    }

    .context-menu ul li {
        padding: 5px 10px;
        cursor: pointer;
    }

    .context-menu ul li:hover {
        background-color: #f0f0f0;
        border-radius: 20px;
    }
}
</style>