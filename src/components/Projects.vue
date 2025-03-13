<script setup>
import ProjCard from './ProjCard.vue';
</script>

<template>
<div id="projects">
    <div class="section-content">
        <h1>Projects</h1>
        <div class="project-list">
            <ProjCard
                class="project-card"
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

.project-list {
    display: flex;
    flex-flow: row wrap;
}

.project-card {
    min-width: 300px;
    width: 40%;
    max-width: 400px;
    margin: 2% 2%
}

/* Mobile styles */

@media (max-width: 576px) {
    .project-card {
        min-width: 100px;
        width: 90%;
        max-width: 300px;
        margin: 2% 2%
    }
}
</style>