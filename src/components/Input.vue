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
        data() {
            return {
                search: '',
            }
        },
        methods:
        {
            async callPokeApi() {
                try {
                    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${this.search}`);
                    console.log(response.data);
                    return response.data;
                } catch (error) {
                    throw new Error('Pokemon not found');
                }
            },
            async onSearchClick() {
                try {
                    const pokemon = await this.callPokeApi();
                    console.log('Pokemon found !');
                    this.$emit('pokemon-found', pokemon);
                } catch (error) {
                    console.error(error);
                }
            }
        },
        mounted() {

        }
    }
</script>

<template>
    <input class="search-bar mt-3" type="text" placeholder="Who's that pokemon ?" @keyup.enter="onSearchClick"
        v-model="search">
    <Button title="Search" @click="onSearchClick"></Button>
</template>

<style scoped></style>