<script>

</script>

<template>
  <div class="container pt-5">
    <div class="row justify-content-center">
      <div class="col-6 d-flex flex-column align-items-center">
        <div class="poke-search">
          <input class="search-bar mt-3" type="text" placeholder="Who's that pokemon ?" v-model="search">
          <button class="search-button">
            Search
          </button>
        </div>
        <div class="poke-img mt-3">
          <img src="" alt="">
        </div>
        <div class="poke-stats mt-5">
        </div>
      </div>
      <!-- /.col-6 -->
      <div class="col-6 d-flex align-items-center flex-column">
        <button class="poke-add mt-3">
          Catch it !
        </button>
        <div class="poke-captured mt-3">
          <h1 class="text-center">
            My Pokemon :
          </h1>
          <ul class="list-unstyled">
            <li>
            </li>
          </ul>
        </div>
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

.poke-img {
  background-color: white;
  height: 200px;
  width: 80%;
}

.poke-stats {
  background-color: green;
  height: 350px;
  width: 80%;
}

.poke-captured {
  background-color: white;
  height: 600px;
  width: 80%;
}
</style>
