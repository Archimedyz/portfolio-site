<script setup>
import { ref } from 'vue';
import Expand from './Expand.vue';

const props = defineProps([
    'heading', 'subheading', 'startDate', 'endDate', 'shortText', 'longText'
]);

const hoverMoreLess = ref(false);

const showDetails = ref(props.longText || props.shortText);
const expandDetails = ref(false);
</script>

<template>
    <div class="exp-card">
        <h3 class="exp-heading">{{ props.heading }}</h3>
        <span class="exp-summary">
            <p class="exp-subheading">{{ props.subheading }}</p>
            <p class="exp-years">{{ props.startDate }} → {{ props.endDate }}</p>
        </span>
        <div class="exp-details" v-if="showDetails">
            <div class="details-summary">
                <p class="short-text">{{ props.shortText }}</p>
                <button
                    class="details-btn"
                    :class="{
                        'hovered-btn' : hoverMoreLess
                    }"
                    @mouseover="hoverMoreLess=true"
                    @mouseleave="hoverMoreLess=false"
                    @click="expandDetails = !expandDetails"
                    >
                    {{ expandDetails ? "Less" : "More" }}
                </button>
            </div>
            <Expand :show="expandDetails">
                <p class="long-text">{{ props.longText }}</p>
            </Expand>
        </div>
    </div>
</template>

<style scoped>
.exp-card {
    border: 0px solid var(--color-mid);
    border-radius: 5px;
    padding: 15px;
}

.exp-heading {
    margin-top: 0;
    margin-bottom: 4px;

}
.exp-summary {
    width: 80%;
}

.exp-subheading {
    display: inline-block;
    font-weight: var(--poppins-heavy);
    margin-top: 0;
    margin-bottom: 2px;
}

.exp-years {
    display: inline-block;
    padding-left: 6px;
    font-size: small;
    margin: 0;
}

.exp-details {
    width: 100%;
}

.details-summary {
    position: relative;
    width: 100%;
    max-width: 300px;
}

.details-btn {
    background-color: transparent;
    float: right;
    font-size: 0.8rem;
    border: none;
    color: var(--color-primary-light);
    font-weight: bold;
}

.hovered-btn {
    color: var(--color-light)
}

.short-text {
    margin: 0;
    font-size: 0.8rem;
    display: inline-block;
    width: 80%;
}

.long-text {
    margin-top: v-bind(-expandContentHeight);
    font-size: 0.8rem;
    margin-bottom: 0;
    padding-left: 24px;
    padding-top: 4px;
}
</style>