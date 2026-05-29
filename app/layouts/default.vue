<template>
  <div>
    <Header />
    <div class="content">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import Header from "../components/header.vue";
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

.content {
  max-width: 42em;
  margin: 0 auto;
  padding: 1em;
  display: block;
  line-height: 1.5;
  font-size: 1.1em;
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
