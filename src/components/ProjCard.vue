<script setup>
import { ref } from 'vue';

const props = defineProps([
    'title', 'description', 'projectTech', 'imageFileName', 'link'
])

</script>

<template>
    <div class='project-card'>
        <div class="project-img">
            <img :src="'/assets/' + props.imageFileName" alt="project image"/>
        </div>
        <div class="project-info-div">
            <div class="project-title-div">
                <h3 class="project-title">{{ props.title }}</h3>
                <a :href="props.link">
                    <img 
                        class="go-to-img" 
                        src="/assets/icons/open-link.png"
                        alt="go to project"
                    />
                </a>
            </div>
            <div class="project-technologies">
                <span v-for="(tech, i) in props.projectTech" class="tech-item">
                    {{ (i > 0 ? '- ' : '') + tech }}
                </span>
            </div>
            <div class="project-description">
                <p class="description">
                    {{ props.description }}
                </p>
            </div>
        </div>
    </div>
</template>

<style scoped>
.project-card {
    border-radius: 10px;
    border: 1px solid black;
    box-shadow: var(--color-dark) 2px 2px; 
}

.project-img {
    border-top-left-radius: inherit;
    border-top-right-radius: inherit;
    width: 100%;
}

.project-img > img {
    border-top-left-radius: inherit;
    border-top-right-radius: inherit;
    width: 100%;
}

.project-info-div {
    padding: 5px 10px;
}

.project-title-div{
    width: 100%;
    display: block;
}

.project-title {
    display: inline-block;
    vertical-align: middle;
    margin: 5px 5px 5px 0;
}

.go-to-img {
    height: 24px;
    vertical-align: middle;
    display: inline-block;
}

.tech-item {
    margin-right: 4px;
    font-size: 0.8rem;
    font-weight: bold;
}


</style>