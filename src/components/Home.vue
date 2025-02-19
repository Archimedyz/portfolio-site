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
        <div id="greeting-banner">
            <div id="greeting-left" class="half-banner">
                <div id="welcome-msg">
                    <heading>Ahoy! 👋</heading>
                    <p>
                        Nice to meet you. I'm <b>Awais</b> and I am <br />
                        <Transition name="i-am" mode="out-in">
                            <div :key="carouselIndex">{{ carouselLst[carouselIndex].text }}</div>
                        </Transition>
                    </p>
                </div>
            </div>
            <div id="greeting-right" class="half-banner">
                <div id="img-container">
                    <Transition name="img-carousel" mode="out-in">
                        <img :key="carouselIndex" :src="carouselLst[carouselIndex].img_src" />
                    </Transition>
                </div>
            </div>
        </div>
    </Transition>
</div>
</template>

<style scoped>
#home {
    background-color: var(--primary);
    width: 100%;
    min-height: 80vh
}

#greeting-banner {
    width: 100%;
}

.half-banner {
    display: inline-block;
    width: 45%;
    vertical-align: middle;
    margin-left: 4%;
}

#greeting-left {
    padding-top: 15%;
    margin-top: 0%;
    min-height: 400px;
}

.half-banner > * {
    margin: auto;
    width: fit-content;
}

#welcome-msg > heading {
    font-weight: 500;
    font-size: xxx-large;
}

#welcome-msg > p {
    font-weight: 500;
    font-size: x-large;
}

#img-container > img {
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

.i-am-enter-active,
.i-am-leave-active {
  transition: all 0.25s ease-out;
}

.i-am-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

.i-am-leave-to {
  opacity: 0;
  transform: translateY(20px);
}

.img-carousel-enter-active,
.img-carousel-leave-active {
  transition: all 0.25s ease-out;
}

.img-carousel-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

.img-carousel-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
</style>