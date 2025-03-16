<script setup>
// component imports
import SocialLink from './SocialLink.vue';

// asset imports
import githubLogoImage from '/src/assets/logos/GitHub-Lockup-Dark.svg';
import linkedInLogoImage from '/src/assets/logos/LinkedIn-Logo.png';
</script>

<template>
<div id="contact">
    <div class="section-content">
        <h1>Contact Me</h1>
        <p>Want to connect? You can reach me on my socials below.</p>
        <div class="social-links">
            <SocialLink
                link="https://github.com/Archimedyz"
                :logoSrc="githubLogoImage"
                logoAlt="Github logo"
            />
            <SocialLink
                link="https://www.linkedin.com/in/awaisali1248/"
                :logoSrc="linkedInLogoImage"
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