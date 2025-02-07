<script setup>
</script>

<template>
<div id="nav-bar">
    <div id="nav-logo">Awais Ali</div>
    <div id="nav-links">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#experience">Experience</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
    </div>
</div>
</template>

<style scoped>
    #nav-bar {
        position: fixed;
        top: 0px;
        left: 0px;
        height: 10vh;
        width: 100%;
        background-color: var(--primary)
    }

    #nav-logo {
        float: left;
        height: 100%;
    }

    #nav-links {
        float: right;
        position: relative;
        bottom: 0px;
    }

    #navlinks a {
        font-size: 1.5em;
        font-family: "Bungee Shade", serif;
    }
</style>