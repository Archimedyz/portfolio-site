<script setup>
import { ref, useTemplateRef, onMounted, onUpdated } from 'vue';
import { NCollapse, NCollapseItem, NIcon } from 'naive-ui';
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
        <n-collapse
            default-expanded-names=""
            :expanded-names="show ? ['expand-content'] : []"
            display-directive="show"
        >
            <template #arrow>
                <n-icon style="height: 0;"></n-icon>
            </template>
            <n-collapse-item name="expand-content">
                <slot />
            </n-collapse-item>
        </n-collapse>
        </div>
</template>

<style scoped>
.expand-container {
    /* This is done to (somewhat) offset Naive-UI's baked in padding. */
    margin-top: -16px;
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