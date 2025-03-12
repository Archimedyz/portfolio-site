<script setup>
import { ref } from 'vue'

const carouselLst = ref([
    { text: "a backend developer.", img_src: "/assets/laptop-servers.png" },
    { text: "based in Montreal, QC.", img_src: "/assets/globe-pin.png" },
    { text: "a chess enjoyer.", img_src: "/assets/chess-pieces.png" }
]);

const carouselIndex = ref(0);

function incCarousel()
{
    carouselIndex.value = (carouselIndex.value + 1) % carouselLst.value.length;
}

const _ = setInterval(incCarousel, 3000);
</script>

<template>
<div id="home">
    <Transition name="fade" appear>
        <div class="greeting-banner">
            <div class="half-banner">
                <p class="welcome-heading">Ahoy! 👋</p>
                <p class="welcome-msg">
                    Nice to meet you. I'm <b>Awais</b> and I am <br />
                    <Transition name="carousel" mode="out-in">
                        <div :key="carouselIndex">{{ carouselLst[carouselIndex].text }}</div>
                    </Transition>
                </p>
            </div>
            <div class="half-banner">
                <Transition name="carousel" mode="out-in">
                    <img
                        class="carousel-img"
                        :key="carouselIndex"
                        :src="carouselLst[carouselIndex].img_src"
                    />
                </Transition>
            </div>
        </div>
    </Transition>
</div>
</template>

<style scoped>
#home {
    background-color: var(--color-primary);
    width: 100%;
    min-height: auto
}

.greeting-banner {
    width: 100%;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-evenly;
    align-items: center;
    padding: 50px 20px;
}

.half-banner {
    display: inline-block;
    width: 40%;
}

.welcome-heading {
    font-weight: 500;
    font-size: xxx-large;
}

.welcome-msg {
    font-weight: 500;
    font-size: x-large;
}

.carousel-img {
    max-width: 500px;
    width: 100%;
    min-width: 200px;
}

/* Transition CSS */

.fade-enter-from {
    transform: translateX(-20px);
    opacity: 0;
}

.fade-enter-active {
    transition: all 0.8s ease-out;
}

.carousel-enter-active,
.carousel-leave-active {
    transition: all 0.25s ease-out;
}

.carousel-enter-from {
    opacity: 0;
    transform: translateY(20px);
}

.carousel-leave-to {
    opacity: 0;
    transform: translateY(20px);
}

/* Mobile styles */

@media (max-width: 576px) {
    .greeting-banner {
        flex-direction: column;
        padding: 0px 0px;
    }

    .half-banner {
        width: 90%;
    }

    .carousel-img {
        display: block;
        width: 80%;
        max-width: 300px;
        min-width: 150px;
        margin: auto;
    }
}
</style>