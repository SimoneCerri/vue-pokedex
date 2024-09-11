<script>
import Input from './Input.vue';
import Button from './Button.vue';
import PokeList from './PokeList.vue';
import PokeImage from './PokeImage.vue';
import PokeStats from './PokeStats.vue';

export default
  {
    name: "Pokedex",
    components:
    {
      Input,
      Button,
      PokeList,
      PokeImage,
      PokeStats
    },
    data() {
      return {
        pokemon: null,
        myPokemons: JSON.parse(localStorage.getItem('myPokemons')) || [],
      }
    },
    methods:
    {
      pokemonFound(pokemon) {
        this.pokemon = pokemon;
      },
      catchPokemon() {
        const savedPokemons = JSON.parse(localStorage.getItem('myPokemons')) || [];

        if (!savedPokemons.some(pokemon => pokemon.name === this.pokemon.name)) {

          savedPokemons.push(this.pokemon);
          this.myPokemons.push(this.pokemon);

          localStorage.setItem("myPokemons", JSON.stringify(savedPokemons));

          this.myPokemons = savedPokemons;
        }
        else {
          console.log(`You already have ${pokemon.name} !`);
        }
        console.log(this.myPokemons);
      },
      setSelectedPokemon(pokemon) {
        this.pokemon = pokemon;
        //console.log(this.pokemon);
      },
    }
  }

</script>

<template>
  <div class="container pt-5">
    <div class="row justify-content-center">
      <div class="col-6 d-flex flex-column align-items-center">
        <div class="poke-search">
          <Input @pokemon-found="pokemonFound"></Input>
        </div>
        <PokeImage :pokemon></PokeImage>
        <PokeStats :pokemon></PokeStats>
      </div>
      <!-- /.col-6 -->
      <div class="col-6 d-flex align-items-center flex-column">
        <Button @click="catchPokemon" class="mt-3" title="Catch it !"></Button>
        <PokeList @selected-pokemon="setSelectedPokemon" :myPokemons></PokeList>
      </div>
      <!-- /.col-6 -->
    </div>
    <!-- /.row -->
  </div>
  <!-- /.container -->
</template>

<style scoped>
.col-6 {
  background-color: red;
  height: 700px;
  width: 500px;
  border: 1px solid black;
}
</style>
