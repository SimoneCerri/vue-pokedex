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
      }
    },
    methods:
    {
      pokemonFound(pokemon) {
        this.pokemon = pokemon;
      }
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
        <Button class="mt-3" title="Catch it !"></Button>
        <PokeList></PokeList>
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
