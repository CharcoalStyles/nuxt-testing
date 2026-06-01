<template>
  <header>
    <div class="left">
      <AppSwitcher />
      <div class="logo">
        <NuxtLink to="/">
          <img src="/logoipsum-415.svg" alt="Test logo" />
        </NuxtLink>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import AppSwitcher from "./AppSwitcher.vue";
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ddd;
  color: #000;
  margin: 0;
  padding: 0.5em 1em;
}

.left {
  display: flex;
  align-items: left;
  justify-content: left;
  gap: 1em;
  padding: 0;
  margin: 0;
}

.logo {
  margin: 0;
  padding: 0;
}

.logo a {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  margin: 0;
}

.logo img {
  max-height: 50px;
}

.links {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  margin: 0;
}
</style>
