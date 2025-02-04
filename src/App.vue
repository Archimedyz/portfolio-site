<script setup>
import Home from './components/Home.vue'
import About from './components/About.vue'
import Experience from './components/Experience.vue'
import Projects from './components/Projects.vue'
import Contact from './components/Contact.vue'
</script>

<template>
    <header>
        <!-- Add some logo/image to link back to the main page -->
        <div id="nav-links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
        </div>
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