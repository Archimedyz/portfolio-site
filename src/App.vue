<script setup>
import NavBar from './components/NavBar.vue'
import Home from './components/Home.vue'
import About from './components/About.vue'
import Experience from './components/Experience.vue'
import Projects from './components/Projects.vue'
import Contact from './components/Contact.vue'
</script>

<template>
    <header>
        <NavBar />
    </header>
    <main>
        <Home />
        <About />
        <Experience />
        <Projects />
        <Contact />
    </main>
    <footer>
        Link to Github<br/>
        Link to LinkedIn
    </footer>
</template>

<style scoped>

</style>