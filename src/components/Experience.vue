<script setup>
import ExpCard from './ExpCard.vue';
</script>

<template>
<div id="experience">
    <div class="section-content experience-content checkered-background">
        <h1>My Experience</h1>
        <div class="work-exp">
            <div class="timeline">
                <ExpCard
                    heading="123Loadboard"
                    subheading="Senior Software Developer & System Integration Lead"
                    startDate="May 2016"
                    endDate="Present"
                    short-text="C# - MS SQL - Azure Devop - Jira"
                    long-text="Nearly 9 years of progressive experience. Started as a Junior Backend Developer and advanced through demonstrated technical expertise and leadership. Spearheaded system integrations with third-party partners, managing a dedicated team to ensure seamless platform connectivity. Proficient in C#, MS SQL, and Azure DevOps, with broad exposure to technologies including MQTT, Powershell, and Azure Cloud services. Proven ability to deliver complex projects independently and within diverse team structures, contributing to the team's growth from 5 to over 20 developers. Extensive experience in development, testing, maintenance, and troubleshooting of core systems."
                />
                <ExpCard
                    heading="MarketUCan"
                    subheading="Web Developer Intern"
                    startDate="June 2015"
                    endDate="August 2015"
                    short-text="PHP - MS SQL - HTML - JS - CSS"
                    long-text="Experience across the full technology stack, from front-end design to back-end development. Contributed to the design and implementation of website features and tools, working collaboratively with a team of three developers. Demonstrated proficiency in PHP, MS SQL, HTML, JavaScript, and CSS, while primarily managing individual projects."
                />
            </div>
        </div>
        <div class="edu-exp">
            <div class="timeline"></div>
        </div>
    </div>
</div>
</template>

<style scoped>
#experience {
    background-color: var(--color-tertiary);
    width: 100%;
}

.experience-content {
    padding-bottom: 5%;
}

.work-exp {
    width: 100%;
}

.edu-exp {
    width: 100%;
}

.timeline {
    display: inline-block;
    width: 100%;
    position: relative;
}

.timeline::before {
    content: '';
    width: 2px;
    background-color: var(--color-accent);
    display: block;
    top: 0;
    bottom: 0;
    position: absolute;
    border: 1px solid var(--color-accent);
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
}

.timeline > * {
    margin-left: 20px;
}

.timeline > *::before { /* points on the timeline */
    content: '';
    width: 10px;
    height: 10px;
    border-radius: 50%;
    position: absolute;
    background-color: var(--color-primary-light);
    left: -4px;
    margin-top: 8px;
    border: 1px solid var(--color-primary-light);
}
</style>