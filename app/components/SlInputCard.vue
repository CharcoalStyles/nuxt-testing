<template>
  <sl-card class="aesthetic-card">
    
    <!-- We dynamically define multiple named bindings: firstName and lastName -->
    <HdsWrapperMultiple v-model:firstName="firstName" v-model:lastName="lastName">
      <div class="field-item">
        <label>First Name</label>
        <sl-input name="firstName" placeholder="First..." filled></sl-input>
      </div>

      <div class="field-item">
        <label>Last Name</label>
        <sl-input name="lastName" placeholder="Last..." filled></sl-input>
      </div>
    </HdsWrapperMultiple>

    <div class="controls">
      <sl-button size="small" variant="primary" @click="setBoth">Set to 'Vue Rocks!'</sl-button>
    </div>
    
    <div slot="footer" class="card-footer">
      <strong>Bound Values:</strong> <br>
      <span class="highlight">First: {{ firstName }}</span> <br>
      <span class="highlight">Last: {{ lastName }}</span>
    </div>
  </sl-card>
</template>

<script setup>
import { ref } from 'vue';
import HdsWrapperMultiple from './wrappers/HdsWrapperMultiple';

const firstName = ref('Hello');
const lastName = ref('Hub24 DS');

const setBoth = () => {
  firstName.value = 'Vue';
  lastName.value = 'Rocks!';
};
</script>

<style scoped>
.aesthetic-card {
  --border-radius: 12px;
  width: 100%;
}
.aesthetic-card::part(base) {
  border: none;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
}
.card-header h2 {
  margin: 0;
  font-family: 'Outfit', sans-serif;
  color: var(--sl-color-primary-600);
}
.card-footer {
  font-family: monospace;
  color: var(--sl-color-neutral-600);
  background-color: var(--sl-color-neutral-50);
  padding: 12px;
  border-radius: 6px;
  line-height: 1.6;
}
.highlight {
  color: var(--sl-color-success-600);
  font-weight: 600;
  margin-left: 8px;
}
.controls {
  margin-top: 16px;
}
.field-item {
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-bottom: 12px;
}
.field-item label {
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--sl-color-neutral-700);
}
</style>
