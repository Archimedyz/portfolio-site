<script setup>
import { ref } from 'vue';

const props = defineProps([
    'heading', 'subheading', 'startDate', 'endDate', 'shortText', 'longText'
]);

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
                <button class="details-btn" @click="expandDetails = !expandDetails">{{ expandDetails ? "Less" : "More" }}</button>
            </div>
            <Transition name="expand">
                <p class="long-text" v-if="expandDetails">{{ props.longText }}</p>
            </Transition>
        </div>
    </div>
</template>

<style scoped>
.exp-card {
    border: 2px solid var(--color-mid);
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

.details-summary
{
    position: relative;
    width: 100%;
}

.details-btn {
    background-color: transparent;
    position: absolute;
    right: 0px;
}

.short-text {
    margin: 0;
    font-size: 0.8rem;
    display: inline-block;
}

.long-text {
    margin: 0;
    font-size: 0.8rem;
}

/* Transition CSS */

/* .expand-leave-to,
.expand-enter-from {
    height: 0;
}

.expand-enter-active,
.expand-leave-active {
  transition: all 1s ease-in;
} */
</style>