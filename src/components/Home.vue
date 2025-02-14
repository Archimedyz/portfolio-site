<script setup>
import { ref } from 'vue'

const carouselLst = ref([
    "a backend developer.",
    "based in Montreal, QC.",
    "a chess enjoyer."
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
                            <div :key="carouselIndex">{{ carouselLst[carouselIndex] }}</div>
                        </Transition>
                    </p>
                </div>
            </div>
            <div id="greeting-right" class="half-banner">
                <!-- TODO: fill this in with heo image or something maybe images matching the carousel items -->
            </div>
        </div>
    </Transition>
</div>
</template>

<style scoped>
#home {
    background-color: var(--primary);
    display: block;
    width: 100%;
    min-height: 80vh
}

#greeting-banner {
    width: 100%;
}

.half-banner {
    display: inline-block;
    width: 40%;
    padding: 5% 0;
}

.half-banner > * {
    margin:auto;
    width: fit-content;
    padding: 25px;
}

#welcome-msg > heading {
    font-weight: 500;
    font-size: xxx-large;
}

#welcome-msg > p {
    font-weight: 500;
    font-size: x-large;
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
</style>