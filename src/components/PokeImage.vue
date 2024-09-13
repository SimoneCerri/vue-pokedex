<script>

export default
    {
        name: "PokeImage",
        props: {
            pokemon: Object,
        },
        data() {
            return {
                showFront: true,
                intervalId: null
            }
        },
        methods:
        {

        },
        computed: {
            currentSprite() {
                if (this.pokemon) {
                    return this.showFront ? this.pokemon.sprite || this.pokemon.sprites.front_default : this.pokemon.sprites.back_default;
                }
                return '';
            }
        },
        mounted() {
            this.intervalId = setInterval(() => {
                this.showFront = !this.showFront;
            }, 2000);
        },
        beforeDestroy() {
            if (this.intervalId) {
                clearInterval(this.intervalId);
            }
        }
    };
</script>

<template>
    <div class="poke-img mt-3">
        <div class="circle1"></div>
        <div class="circle2"></div>
        <img v-if="pokemon" :src="currentSprite" alt="Pokemon sprite">
        <div class=" circle3">
        </div>
        <div class="stripes">
            <hr>
            <hr>
            <hr>
            <hr>
        </div>
    </div>
</template>

<style scoped>
.poke-img {
    background-color: #333;
    height: 360px;
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 40px solid rgb(189, 181, 181);
    clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 10% 100%, 0% 90%);

    .circle1 {
        background-color: red;
        width: 12px;
        height: 12px;
        clip-path: circle(50% at 50% 50%);
        position: absolute;
        bottom: 64%;
        left: 38.5%;
        border: 1px solid black;
    }

    .circle2 {
        background-color: red;
        width: 12px;
        height: 12px;
        clip-path: circle(50% at 50% 50%);
        position: absolute;
        bottom: 64%;
        left: 41.5%;
        border: 1px solid black;
    }

    .circle3 {
        background-color: red;
        width: 16px;
        height: 16px;
        clip-path: circle(50% at 50% 50%);
        position: absolute;
        bottom: 44.8%;
        left: 34%;
        border: 1px solid black;
    }

    .stripes {
        width: 50px;
        position: absolute;
        bottom: 44%;
        left: 44.5%;

        hr {
            border: none;
            height: 5px;
            background-color: black;
            margin: 3px 0;
        }
    }

    img {
        width: 200px;
    }
}
</style>