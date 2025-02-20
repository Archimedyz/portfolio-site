<script setup>
import ExpCard from './ExpCard.vue';
</script>

<template>
<div id="experience">
    <div class="section-content">
        <h1>My Experience</h1>
        <ExpCard
            heading="123Loadboard"
            subheading="Senior Software Developer"
            startDate="May 2016"
            endDate="Present"
            text="TODO - Provide more details about the job."
        />
        <ExpCard
            heading="MarketUCan"
            subheading="Web Developer Intern"
            startDate="June 2015"
            endDate="August 2015"
            text="TODO - Provide more details about the job."
        />
    </div>
</div>
</template>

<style scoped>
#experience {
    background-color: var(--color-tertiary);
    width: 100%;
}
</style>