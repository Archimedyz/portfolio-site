<script setup>
import { ref } from 'vue';

const onHover = ref(false);

const navItems = ref([
    { anchor: "#home", text: "Home", hovered: false },
    { anchor: "#about", text: "About", hovered: false },
    { anchor: "#experience", text: "Experience", hovered: false },
    { anchor: "#projects", text: "Projects", hovered: false },
    { anchor: "#contact", text: "Contact", hovered: false }
]);

const logoHover = ref(false);
</script>

<template>
<div class="nav-bar">
    <div class="nav-content">
        <div class="nav-logo">
            <a
                href="#"
                @mouseover="logoHover=true"
                @mouseleave="logoHover=false"
                class="nav-logo-link"
                :class="{'hoveredLogo': logoHover}">
                Awais Ali
            </a>
        </div>
        <div class="nav-links">
            <a v-for="item in navItems"
                :href="item.anchor"
                @mouseover="item.hovered=true"
                @mouseleave="item.hovered=false"
                class="nav-link"
                :class="{ 'hovered': item.hovered }">
                {{ item.text }}
            </a>
        </div>
    </div>
</div>
</template>

<style scoped>
.nav-bar {
    position: sticky;
    top: 0px;
    left: 0px;
    height: 10vh;
    width: 100%;
    background-color: var(--color-primary);
    z-index: 1;
}

.nav-content {
    position: relative;
    height: 100%
}

.nav-content > div {
    position: absolute;
    bottom: 5px;
}

.nav-logo {
    display: inline-flex;
    left: 50px;
}

.nav-logo-link {
    font-family: "Outfit", serif;
    font-style: bold;
    font-size: 2rem;
    text-decoration: none;
    color: var(--color-primary-light);
    cursor: pointer;
}

.nav-links {
    display: inline-flex;
    right: 20px;
}

.nav-link {
    vertical-align: top;
    font-size: 1.5rem;
    margin-right: 15px;
    text-decoration: none;
    color: var(--color-primary-light);
    border-bottom: 2px solid transparent;
}

.hovered {
    border-bottom-color: var(--color-light);
    color: var(--color-light);
}

.hoveredLogo {
    color: var(--color-light);
}
</style>