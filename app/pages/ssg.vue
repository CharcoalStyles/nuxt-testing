<template>
  <div class="column">
    <div>
      <h1>SSG page</h1>
    </div>

    <div class="content">
      <p>This page is generated at build time.</p>
      <p>
        Depending on decisions around certain content, we will possibly have
        different pages generated at build time.
      </p>
    </div>
    <div class="content">
      <p>The time is: {{ data.timestamp }}</p>
    </div>
  </div>
</template>

<script setup>
const {data} = await useFetch('/api/time');
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