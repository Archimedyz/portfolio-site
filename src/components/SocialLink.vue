<script setup>
import { ref } from 'vue';

const props = defineProps([
    'link', 'logoSrc', 'logoAlt'
]);

const hovered = ref(false);
</script>

<template>
    <a
        class="social-link"
        :class="{
            'social-link-hovered': hovered
        }"
        @mouseover="hovered=true"
        @mouseleave="hovered=false"
        :href="props.link">
        <img
            class="social-logo"
            :src="props.logoSrc"
            :alt="props.logoAlt"
        />
    </a>
</template>

<style scoped>
.social-link {
    background-color: rgba(200, 200, 240, 1);
    transition: background-color 0.5s ease-in;
    display: inline-block;
    margin-right: 15px;
    margin-bottom: 15px;
    padding: 10px;
    border: 2px solid var(--color-mid);
    border-radius: 10px;
}

.social-link-hovered {
    background-color: white;
}

.social-logo {
    max-height: 50px;
    height: 100%;
}
</style>