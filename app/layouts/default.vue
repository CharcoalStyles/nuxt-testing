<template>
  <div class="app-layout">
    <Header />

    <main class="main-content">
      <!-- NuxtPage/ slot for child page views -->
      <slot /> 
    </main>

    <Footer />
  </div>
</template>

<script setup lang="ts">
import Header from "../components/header.vue";
import Footer from "../components/footer.vue";
</script>

<style>
html {
  font-family:
    "Source Sans Pro",
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    Roboto,
    "Helvetica Neue",
    Arial,
    sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  background-color: #eef;
  color: #326;
  margin: 0;
  padding: 0;
}
*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
.app-layout {
  display: flex;
  flex-direction: column;
  /* Use dvh (dynamic viewport height) to prevent mobile browser address bar layout jumps */
  min-height: 100dvh; 
}

.main-content {
  /* Tells the content area to consume all available empty space */
  flex-grow: 1; 
  max-width: 1000px;
  min-width: 500px;
  margin: 0 auto;
  margin-top: 1em;
}

.page-enter-active,
.page-leave-active {
  transition: all 0.2s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(0.2rem);
}
</style>
