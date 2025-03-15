<script setup>
import SocialLink from './SocialLink.vue';
</script>

<template>
<div id="contact">
    <div class="section-content">
        <h1>Contact Me</h1>
        <p>Want to connect? You can reach me on my socials below.</p>
        <div class="social-links">
            <SocialLink
                link="https://github.com/Archimedyz"
                logoSrc="/src/assets/logos/GitHub-Lockup-Dark.svg"
                logoAlt="Github logo"
            />
            <SocialLink
                link="https://www.linkedin.com/in/awaisali1248/"
                logoSrc="/src/assets/logos/LinkedIn-Logo.png"
                logoAlt="LinkedIn logo"
            />
        </div>
        <p>Looking forward to hearing from you!</p>
    </div>
</div>
</template>

<style scoped>
#contact {
    background-color: var(--color-quinary);
    width: 100%;
}
</style>