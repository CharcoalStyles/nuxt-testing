<template>
    <div class="footer">
        <div class="footer-content">
           <p>Rendered at: {{ data.timestamp }}</p>
        </div>
    </div>
</template>

<script setup>
const { data } = await useFetch("/api/time");
</script>

<style scoped>
.footer {
    display: flex;
    justify-content: end;
    align-items: center;
    background-color: #ddd;
    color: #000;
    margin: 0;
    padding: 0.5em 1em;
}

.footer-content {
    display: flex;
    justify-content: right;
    align-items: right;
    gap: 1em;
}
</style>