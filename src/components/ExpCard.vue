<script setup>
const props = defineProps([
    'heading', 'subheading', 'startDate', 'endDate', 'text'
])
</script>

<template>
    <div class="exp-card">
        <h3 class="exp-heading">{{ props.heading }}</h3>
        <span class="exp-summary">
            <p class="exp-subheading">{{ props.subheading }}</p>
            <p class="exp-years">{{ props.startDate }} → {{ props.endDate }}</p>
        </span>
        <p class="exp-text">{{ props.text }}</p>
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

.exp-text {
    margin: 0;
    font-size: 0.8rem;
}
</style>