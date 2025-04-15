<script setup>
import { ref, useTemplateRef, onMounted, onUpdated } from 'vue';
import { NCollapse, NCollapseItem, NIcon } from 'naive-ui';
import { debounce } from 'lodash';

var props = defineProps([
    'show'
]);
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
</style>