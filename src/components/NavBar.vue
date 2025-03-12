<script setup>
import { computed, ref, onMounted } from 'vue';
import Expand from './Expand.vue'


const isLogoHover = ref(false);
const isNavToggleHovered = ref(false);

const windowWidth = ref(window.innerWidth);
const isMobileView = computed(() => windowWidth.value < 768);

const isExpanded = ref(!isMobileView.value);

const navItems = ref([
    { anchor: "#home", text: "Home", hovered: false },
    { anchor: "#about", text: "About", hovered: false },
    { anchor: "#experience", text: "Experience", hovered: false },
    { anchor: "#projects", text: "Projects", hovered: false },
    { anchor: "#contact", text: "Contact", hovered: false }
]);

onMounted(() => {
    window.addEventListener("resize", () => {
        let wasNotMobileView = !isMobileView.value;
        windowWidth.value = window.innerWidth;
        if (!isMobileView.value) {
            isExpanded.value = true;
        }
        else if (wasNotMobileView)
        {
            isExpanded.value = false;
        }
    });
});
</script>

<template>
<div class="nav-bar">
    <div class="nav-content">
        <div class="logo-container">
            <a
                href="#"
                class="logo"
                @mouseover="isLogoHover=true"
                @mouseleave="isLogoHover=false"
                :class="{'hoveredLogo': isLogoHover}"
            >
                Awais Ali
            </a>
        </div>
        <div class="nav-menu">
            <svg
                class="nav-toggle"
                viewBox="0 0 30 30"
                @click="isExpanded=!isExpanded"
                @mouseover="isNavToggleHovered=true"
                @mouseleave="isNavToggleHovered=false"
                :class="{'hovered': isNavToggleHovered}"
                v-if="isMobileView"
            >
                <g fill="none" stroke="currentColor" stroke-width="3">
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M2 4h26M2 12h26M2 20h26"/>
                </g>
            </svg>
            <Expand :show="isExpanded">
                <div class="nav-link-flex">
                    <a v-for="item in navItems"
                        :href="item.anchor"
                        @mouseover="item.hovered=true"
                        @mouseleave="item.hovered=false"
                        class="nav-link"
                        :class="{ 'hovered': item.hovered }">
                        {{ item.text }}
                    </a>
                </div>
            </Expand>
        </div>
    </div>
</div>
</template>

<style scoped>
.nav-bar {
    position: sticky;
    top: 0px;
    left: 0px;
    width: 100%;
    height: auto;
    background-color: var(--color-primary);
    z-index: 1;
}

.nav-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-flow: row nowrap;
    align-items: flex-start;
    padding: 15px;
}

.logo-container {
    margin-left: 20px;
}

.logo {
    font-family: "Outfit", serif;
    font-style: bold;
    font-size: 2rem;
    text-decoration: none;
    color: var(--color-primary-light);
    cursor: pointer;
}

.nav-menu {
    text-align: right;
}

.nav-toggle {
    height: 30px;
    cursor: pointer;
    display: inline-block;
    margin-right: 15px;
    margin-top: 8px;
}

.nav-toggle path {
    color: var(--color-primary-light);
}

.nav-link-flex {
    display: flex;
    flex-flow: row nowrap;
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

.hovered path,
.hoveredLogo {
    color: var(--color-light);
}

@media (max-width: 768px) {
    .nav-link-flex {
        flex-direction: column;
    }
}
</style>