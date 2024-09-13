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
        //console.log(pokemon.stats[0].base_stat);
      },
      catchPokemon() {
        //console.log('catch it');

        const savedPokemons = JSON.parse(localStorage.getItem('myPokemons')) || [];

        if (!savedPokemons.some(pokemon => pokemon.name === this.pokemon.name)) {

          savedPokemons.push(this.pokemon);
          this.myPokemons.push(this.pokemon);

          localStorage.setItem("myPokemons", JSON.stringify(savedPokemons));

          this.myPokemons = savedPokemons;
        }
        else {
          console.log(`You already have ${this.pokemon.name} !`);
        }
        //console.log(this.myPokemons);
      },
      setSelectedPokemon(pokemon) {
        this.pokemon = pokemon;
        //console.log(this.pokemon);
      },
    },
    mounted() {

    }
  }

</script>

<template>
  <div class="container pt-5">
    <div class="row justify-content-center">
      <div class="col-6 d-flex flex-column align-items-center">
        <div class="circles d-flex gap-4">
          <div class="circle">
          </div>
          <div class="small-circles d-flex gap-2">
            <div class="s-circle1"></div>
            <div class="s-circle2"></div>
            <div class="s-circle3"></div>
          </div>
        </div>
        <div class="pokedex-left">
          <div class="poke-search d-flex align-items-center mt-3">
            <Input @pokemon-found="pokemonFound"></Input>
            <Button @click="catchPokemon" class="mt-3" title="Catch it !"></Button>
          </div>
          <PokeImage :pokemon></PokeImage>
          <PokeStats :pokemon></PokeStats>
        </div>
      </div>
      <!-- /.col-6 -->
      <div class="col-6 pokedex-right d-flex align-items-center flex-column">
        <!-- <Button @click="catchPokemon" class="mt-3" title="Catch it !"></Button> -->
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
  height: 750px;
  width: 500px;
  border: 1px solid black;

  .circle {
    width: 70px;
    height: 70px;
    clip-path: circle(50% at 50% 50%);
    background-color: blue;
  }

  .circles {
    margin-top: 6%;
    margin-left: -60%;
  }

  .s-circle1,
  .s-circle2,
  .s-circle3 {
    width: 16px;
    height: 16px;
    clip-path: circle(50% at 50% 50%);
    /* border: 1px solid black; */
  }

  .s-circle1 {
    background-color: rgb(129, 21, 21);
  }

  .s-circle2 {
    background-color: rgb(191, 194, 48);
  }

  .s-circle3 {
    background-color: rgb(25, 129, 21);
  }
}

.pokedex-left {
  clip-path: polygon(0% 16%, 40% 16%, 64% 0%, 100% 0%, 100% 100%, 0% 100%);
  background-color: black;
  height: 700px;
  width: 500px;
  margin-top: -10.5%;
}

.pokedex-right {
  height: 700px;
  margin-top: 50px;
  clip-path: polygon(0% 0%, 36% 0%, 60% 16%, 100% 16%, 100% 100%, 0% 100%);
}
</style>
