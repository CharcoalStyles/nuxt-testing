<template>
  <div ref="wrapper" class="hds-wrapper-multiple" style="display: contents;">
    <slot></slot>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, useAttrs, watch } from 'vue';

const attrs = useAttrs();
const wrapper = ref(null);
const targetElements = ref([]);

const isCheckable = (el) => el.tagName.toLowerCase() === 'sl-checkbox' || el.tagName.toLowerCase() === 'sl-switch';

const updateFromEvent = (event) => {
  const target = event.target;
  if (!targetElements.value.includes(target) || !target.name) return;

  const newValue = isCheckable(target) ? target.checked : target.value;
  
  // In Vue 3, if you define v-model:firstName="...", the listener is securely passed as $attrs['onUpdate:firstName']
  // Capitalizing the first letter of name to match Vue's automatic camel-casing event convention
  // e.g. "firstName" becomes "onUpdate:firstName"
  const eventName = `onUpdate:${target.name}`;
  if (typeof attrs[eventName] === 'function') {
    attrs[eventName](newValue);
  }
};

const handleInput = (e) => updateFromEvent(e);
const handleChange = (e) => updateFromEvent(e);

const syncValues = () => {
  if (targetElements.value.length === 0) return;
  targetElements.value.forEach((el) => {
    // We expect the native name= attribute to correspond perfectly to the v-model property
    if (el.name && attrs[el.name] !== undefined) {
      if (isCheckable(el)) el.checked = attrs[el.name];
      else el.value = attrs[el.name];
    }
  });
};

onMounted(() => {
  // Find all HDS element children inside the wrapper recursively
  const allElements = Array.from(wrapper.value.querySelectorAll('*'));
  targetElements.value = allElements.filter(el => el.tagName.toLowerCase().startsWith('sl-'));

  targetElements.value.forEach(el => {
    el.addEventListener('sl-input', handleInput);
    el.addEventListener('sl-change', handleChange);
  });
  
  syncValues();
});

onBeforeUnmount(() => {
  targetElements.value.forEach(el => {
    el.removeEventListener('sl-input', handleInput);
    el.removeEventListener('sl-change', handleChange);
  });
});

// Watch over attrs via deeply cloning them to stay responsive
watch(() => ({...attrs}), () => {
  syncValues();
}, { deep: true });
</script>
