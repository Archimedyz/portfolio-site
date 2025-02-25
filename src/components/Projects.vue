<script setup>
import ProjCard from './ProjCard.vue';
</script>

<template>
<div id="projects">
    <div class="section-content">
        <h1>Projects</h1>
        <div class="project-cards">
            <ProjCard
                title="Portfolio Website"
                description="A portfolio site designed with Vue. You're looking at it right now!"
                :projectTech="['Vue', 'JS', 'CSS', 'HTML']"
                imageFileName="proj-portfolio-site.png"
                link="/"
            />
        </div>
    </div>
</div>
</template>

<style scoped>
#projects {
    background-color: var(--color-quaternary);
    width: 100%;
}

.project-cards > * {
    max-width: 45%;
    margin-right: 10%;
}
</style>