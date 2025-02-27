<script setup>
import NavBar from './components/NavBar.vue'
import Home from './components/Home.vue'
import About from './components/About.vue'
import Experience from './components/Experience.vue'
import Projects from './components/Projects.vue'
import Contact from './components/Contact.vue'
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
    </footer>
</template>

<style scoped>
main > * {
    display: inline-block;
}
</style>