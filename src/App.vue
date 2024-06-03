<script setup>
import { RouterLink, RouterView } from "vue-router";
import Navbar from "./components/Navbar.vue";
import SocialIcons from "./components/SocialIcons.vue";
import MailButton from "./components/MailButton.vue";
import Home from "./views/Home.vue";
import Knowledge from "./views/Knowledge.vue";
import Projects from "./views/Projects.vue";
import About from "./views/About.vue";
import MovingBackground from "./components/MovingBackground.vue";
</script>

<template>
  <Navbar />
  <SocialIcons />
  <MovingBackground />
  <Home />
  <MailButton />
  <Knowledge />
  <Projects />
  <About />
</template>
