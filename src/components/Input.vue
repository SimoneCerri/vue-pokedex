<script>
import Button from './Button.vue';
import axios from 'axios';

export default
    {
        name: "Input",
        components:
        {
            Button,
        },
        props:
        {
            pokemon: Object,
        },
        data() {
            return {
                search: '',
                pokemon: '',
            }
        },
        methods:
        {
            callPokeApi() {
                axios.get(`https://pokeapi.co/api/v2/pokemon/${this.search}`).then(response => {
                    console.log(response.data);
                    if (response.data) {
                        this.pokemon = response.data
                    }
                    else {

                    }
                }
                )
            }
        },
        mounted() {

        }
    }
</script>

<template>
    <input class="search-bar mt-3" type="text" placeholder="Who's that pokemon ?" v-model="search">
    <Button title="Search" @click="callPokeApi"></Button>
</template>

<style scoped></style>