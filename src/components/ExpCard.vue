<script setup>
import { ref, useTemplateRef, onMounted, onUpdated } from 'vue';

const props = defineProps([
    'heading', 'subheading', 'startDate', 'endDate', 'shortText', 'longText'
]);

const hoverMoreLess = ref(false);

const showDetails = ref(props.longText || props.shortText);
const expandDetails = ref(false);

const expandContent = useTemplateRef('expand-content');
const expandContentHeight = ref(0);

function toggleDetails(event)
{
    expandDetails.value = !expandDetails.value;
}

function setExpandContentHeight() {
    if (expandContent.value) {
        expandContentHeight.value = expandContent.value.offsetHeight;
    }
}

const addTransitions = ref(false);

onMounted(() => {
    // set the content height value after initial render, to avoid being 0.
    setExpandContentHeight();

    // update values after resizing, as it may affect content height
    window.addEventListener('resize', setExpandContentHeight);
});

onUpdated(() => {
    // only add transition CSS after the first update
    addTransitions.value = true;
});
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
                    @click="toggleDetails"
                    >
                    {{ expandDetails ? "Less" : "More" }}
                </button>
            </div>
            <div class="expand-container">
                <p
                    ref="expand-content"
                    class="long-text"
                    :class="{
                        'show-long-text':  expandDetails,
                        'long-text-transition': addTransitions
                    }"
                    >
                    {{ props.longText }}
                </p>
            </div>
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

.long-text-transition {
    transition: margin-top 0.6s ease-in;
}

.expand-container {
    overflow: hidden;
    display: block;
    width: 100%;
}

.show-long-text {
    margin-top: 0px;
}
</style>