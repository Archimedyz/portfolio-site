<script setup>
import { ref } from 'vue';
import NavBar from './components/NavBar.vue'
import Home from './components/Home.vue'
import About from './components/About.vue'
import Experience from './components/Experience.vue'
import Projects from './components/Projects.vue'
import Contact from './components/Contact.vue'

const commitHash = ref(__COMMIT_HASH__);
</script>

<template>
    <NavBar />
    <main>
        <Home />
        <About />
        <Experience />
        <Projects />
        <Contact />
    </main>
    <footer>
        <i>portfolio-site_{{ commitHash }}</i>
    </footer>
</template>

<style scoped>
main > * {
    display: inline-block;
}

footer {
    text-align: center;
    background-color: var(--color-dark);
    color: var(--color-mid);
    font-size: 10px;
}
</style>