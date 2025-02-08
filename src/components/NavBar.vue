<script setup>
</script>

<template>
<div id="nav-bar">
    <div id="nav-content">
        <div id="nav-logo">Awais Ali</div>
        <div id="nav-links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
        </div>
    </div>
</div>
</template>

<style scoped>
    #nav-bar {
        position: sticky;
        top: 0px;
        left: 0px;
        height: 10vh;
        width: 100%;
        background-color: var(--primary)
    }

    #nav-content {
        position: relative;
        height: 100%
    }

    #nav-content > div {
        position: absolute;
        bottom: 5px;
    }

    #nav-logo {
        font-family: "Playwrite GB S", serif;
        font-style: italic;
        font-size: 2rem;
        display: inline-flex;
        left: 50px;
        color: var(--secondary);
    }

    #nav-links {
        display: inline-flex;
        right: 20px;
    }

    #nav-links a {
        font-size: 1.5rem;
        padding-right: 15px;
        text-decoration: none;
        color: var(--secondary);
    }
</style>