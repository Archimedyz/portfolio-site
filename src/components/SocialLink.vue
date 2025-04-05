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
        :href="props.link"
        target="_blank"
        rel="noopener noreferrer"
    >
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
    transition: background-color 0.5s;
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
    height: 50px;
}


/* Tablet styles */

@media (max-width: 768px) {
    .social-logo {
        height: 45px;
    }
}

/* Mobile styles */

@media (max-width: 576px) {
    .social-logo {
        height: 40px;
    }
}
</style>