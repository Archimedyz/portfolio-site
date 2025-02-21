<script setup>
import ExpCard from './ExpCard.vue';
</script>

<template>
<div id="experience">
    <div class="section-content experience-content">
        <h1>My Experience</h1>
        <ExpCard
            heading="123Loadboard"
            subheading="Senior Software Developer"
            startDate="May 2016"
            endDate="Present"
            short-text="C# - MS SQL - Azure Devop - Jira"
            long-text="TODO - Provide more details about the job."
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

.experience-content {
    margin-bottom: 5%;
}
</style>