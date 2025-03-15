<script setup>
import { computed, ref, useTemplateRef, onMounted, onUpdated } from 'vue';

var props = defineProps([
    'show'
]);

const expandRef = useTemplateRef('expand');

const expandHeight = computed(() => {
    if (expandRef.value) {
        return expandRef.value.offsetHeight;
    }

    return 0;
});

const addTransitions = ref(false);

onMounted(() => {
    // update values after resizing, as it may affect content height
    window.addEventListener('resize', () => {
        // Force re-evaluation of the computed property by accessing it.
        expandHeight.value;
    });
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