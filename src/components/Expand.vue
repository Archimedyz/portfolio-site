<script setup>
import { ref, useTemplateRef, onMounted, onUpdated } from 'vue';
import { debounce } from 'lodash';

var props = defineProps([
    'show'
]);

const expandRef = useTemplateRef('expand');

const expandHeight = ref(0);

const updateExpandHeightOnNextFrame = () => {
  requestAnimationFrame(() => {
    if (expandRef.value) {
      // Force a layout recalculation
      expandRef.value.style.display = 'block';
      expandHeight.value = expandRef.value.offsetHeight;
      expandRef.value.style.display = '';
    }
    else {
      expandHeight.value = 0;
    }

    addTransitions.value = false;
  });
};

const addTransitions = ref(false);

onMounted(() => {
    const debouncedResizeUpdate = debounce(updateExpandHeightOnNextFrame, 100);

    // update values after resizing, as it may affect content height
    window.addEventListener('resize', debouncedResizeUpdate);

    updateExpandHeightOnNextFrame();
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