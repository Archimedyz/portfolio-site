<script setup>
import { computed } from 'vue';

const props = defineProps([
    'title', 'description', 'projectTech', 'imageFileName', 'siteLink', 'repoLink'
]);

function getLinkTarget(link) {
    return /^https?:\/\//.test(link) // test for absolute link
        ? '_blank'
        : '_self';
}

const siteLinkTarget = computed(() => getLinkTarget(props.siteLink));
const repoLinkTarget = computed(() => getLinkTarget(props.repoLink));

</script>

<template>
    <div class='project-card'>
        <div class="project-img">
            <img :src="'src/assets/' + props.imageFileName" alt="project image"/>
        </div>
        <div class="project-info-div">
            <div class="project-title-div">
                <h3 class="project-title">{{ props.title }}</h3>
                <div class="project-links">
                    <a v-if="props.siteLink" :href="props.siteLink" :target="siteLinkTarget" rel="noopener noreferrer">
                        <img
                            class="link-img"
                            src="/src/assets/icons/open-link.png"
                            alt="go to project"
                        />
                    </a>
                    <a v-if="props.repoLink" :href="props.repoLink" :target="repoLinkTarget" rel="noopener noreferrer">
                        <img
                            class="link-img"
                            src="/src/assets/icons/Github_Invertocat_light.svg"
                            alt="go to repo"
                        />
                    </a>
                </div>
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
    display: flex;
    flex-flow: row nowrap;
    align-items: flex-start;
    justify-content: space-between;
}

.project-title {
    vertical-align: middle;
    margin: 5px 5px 5px 0;
    max-width: 75%;
}

.link-img {
    height: 24px;
    margin-top: 6px;
    margin-left: 6px;
    vertical-align: middle;
    display: inline-block;
}

.tech-item {
    margin-right: 4px;
    font-size: 0.8rem;
    font-weight: bold;
}


</style>