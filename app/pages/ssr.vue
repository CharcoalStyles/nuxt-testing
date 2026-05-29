<template>
  <div class="column">
    <div>
      <h1>SSR page</h1>
    </div>

    <div class="content">
      <p>This page is rendered on the server and is the default rendering mode.</p>
      <p></p>
    </div>
    <div class="content">
      <p>The time is: {{ data.timestamp }}</p>
    </div>
  </div>
</template>

<script setup>
const { data } = await useFetch("/api/time");
</script>

<style scoped>
.column {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1em;
}

.content {
  padding: 0;
  margin: 0;
  width: 100%;
}
</style>
