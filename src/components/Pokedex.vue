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
        <div class="pokedex-left d-flex flex-column align-items-center">
          <div class="poke-search d-flex">
            <Input @pokemon-found="pokemonFound"></Input>
            <Button @click="catchPokemon" class="mt-4" title="Catch it !"></Button>
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
  height: 860px;
  width: 500px;
  border: 1px solid black;
  box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);

  .poke-search {
    padding-top: 80px;

    input {
      border-radius: 10px 0 0 10px;
      outline: none;
      border: none;
      padding: 0.25em;
    }

    button {
      outline: none;
      border: none;
      border-radius: 0 10px 10px 0;
    }
  }

  .circle {
    width: 70px;
    height: 70px;
    clip-path: circle(50% at 50% 50%);
    box-shadow: inset 10px 10px 20px rgba(0, 0, 0, 0.6),
      5px 5px 15px rgba(0, 0, 0, 0.5);
    background: radial-gradient(circle at 30% 30%, lightblue, blue);
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
  }

  .s-circle1 {
    background: radial-gradient(circle at 30% 30%, red, rgb(68, 5, 5));
  }

  .s-circle2 {
    background: radial-gradient(circle at 30% 30%, rgb(233, 233, 127), rgb(122, 122, 8));
  }

  .s-circle3 {
    background: radial-gradient(circle at 30% 30%, lightgreen, green);
  }
}

.pokedex-left {
  clip-path: polygon(0% 12%, 40% 12%, 64% 0%, 100% 0%, 100% 100%, 0% 100%);
  background-color: black;
  height: 760px;
  width: 500px;
  margin-top: -10.5%;
}

.pokedex-right {
  height: 760px;
  margin-top: 50px;
  clip-path: polygon(0% 0%, 36% 0%, 60% 12%, 100% 12%, 100% 100%, 0% 100%);
}
</style>
