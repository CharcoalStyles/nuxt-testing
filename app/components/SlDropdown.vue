<template>
  <sl-card class="aesthetic-card">
    <!-- 
      Notice how v-model seamlessly connects the selected value
      from inside the Shoelace web component back to Vue state.
    -->
    <HdsWrapper v-model="selectedColor">
      <sl-select placeholder="Pick a color" filled>
        <sl-option value="teal">Teal</sl-option>
        <sl-option value="orange">Orange</sl-option>
        <sl-option value="blue">Blue</sl-option>
      </sl-select>
    </HdsWrapper>

    <div class="controls">
      <sl-button
        size="small"
        variant="primary"
        @click="selectedColor = 'orange'"
        >Set to Orange</sl-button
      >
    </div>

    <div slot="footer" class="card-footer">
      <strong>Selected Color:</strong>
      <span class="highlight" :style="spanStyle">{{
        selectedColor || "None"
      }}</span>
    </div>
  </sl-card>
</template>

<script setup>
import { ref, computed } from "vue";
import HdsWrapper from "./wrappers/HdsWrapper";

const selectedColor = ref("teal");
const spanStyle = computed(() => {
  switch (selectedColor.value) {
    case "teal":
      return { color: `var(--sl-color-teal-600)` };
    case "orange":
      return { color: `var(--sl-color-orange-600)` };
    case "blue":
      return { color: `var(--sl-color-blue-500)` };
    default:
      return { color: `var(--sl-color-neutral-600)` };
  }
});
</script>

<style scoped>
.aesthetic-card {
  --border-radius: 120px;
  width: 100%;
}
.aesthetic-card::part(base) {
  border: none;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
}
.card-header h2 {
  margin: 0;
  font-family: "Outfit", sans-serif;
  color: var(--sl-color-primary-600);
}
.card-footer {
  font-family: monospace;
  color: var(--sl-color-neutral-600);
  background-color: var(--sl-color-neutral-50);
  padding: 12px;
  border-radius: 6px;
  display: flex;
  align-items: center;
}
.highlight {
  font-weight: bold;
  margin-left: 8px;
  text-transform: capitalize;
}
.controls {
  margin-top: 16px;
}
</style>
