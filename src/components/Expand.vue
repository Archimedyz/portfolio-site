<script setup>
import { computed, ref, useTemplateRef, onMounted, onUpdated } from 'vue';

var props = defineProps([
    'show'
]);

const expandRef = useTemplateRef('expand');
const expandHeight = ref(0);

function setExpandHeight() {
    if (expandRef.value) {
        expandHeight.value = expandRef.value.offsetHeight;
    }
}

const addTransitions = ref(false);

onMounted(() => {
    // set the content height value after initial render, to avoid being 0.
    setExpandHeight();

    // update values after resizing, as it may affect content height
    window.addEventListener('resize', setExpandHeight);
});

onUpdated(() => {
    // only add transition CSS after the first update
    addTransitions.value = true;
});
</script>

<template>
    <div class="expand-container">
        <div
            ref="expand"
            class="expand"
            :class="{
                'expand-show': props.show,
                'expand-transition': addTransitions
            }"
        >
            <slot />
        </div>
    </div>
</template>

<style scoped>
.expand-container {
    overflow-y: hidden;
}

.expand {
    margin-top: v-bind(-expandHeight);
}

.expand-show {
    margin-top: 0px;
}

.expand-transition {
    transition: margin-top 0.6s ease-in;
}
</style>