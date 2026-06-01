<template>
  <div ref="wrapper" class="hds-wrapper" style="display: contents;">
    <slot></slot>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, watch } from 'vue';

const props = defineProps({
  modelValue: {
    type: [String, Number, Boolean, Array, Object],
    default: undefined
  }
});

const emit = defineEmits(['update:modelValue']);
const wrapper = ref(null);
const targetElements = ref([]);

const isCheckable = (el) => el.tagName.toLowerCase() === 'sl-checkbox' || el.tagName.toLowerCase() === 'sl-switch';

const updateFromEvent = (event) => {
  const target = event.target;
  if (!targetElements.value.includes(target)) return;

  const newValue = isCheckable(target) ? target.checked : target.value;

  // Single default element mode (applies to primitive values)
  if (typeof props.modelValue !== 'object' || props.modelValue === null) {
    emit('update:modelValue', newValue);
    return;
  }

  // Object mode: Update the specific key in the object using the element's 'name' attribute
  if (target.name && typeof props.modelValue === 'object') {
    emit('update:modelValue', { ...props.modelValue, [target.name]: newValue });
  }
};

const handleInput = (e) => updateFromEvent(e);
const handleChange = (e) => updateFromEvent(e);

const syncValueToTargets = (val) => {
  if (targetElements.value.length === 0) return;

  targetElements.value.forEach((el, index) => {
    // Single mode: update the first child
    if ((typeof val !== 'object' || val === null) && index === 0) {
      if (isCheckable(el)) el.checked = val;
      else el.value = val;
      return;
    }

    // Object mode: match child component property via 'name' attribute
    if (el.name && val !== null && typeof val === 'object') {
      if (val[el.name] !== undefined) {
        if (isCheckable(el)) el.checked = val[el.name];
        else el.value = val[el.name];
      }
    }
  });
};

onMounted(() => {
  // Find all element children inside the wrapper recursively
  const allElements = Array.from(wrapper.value.querySelectorAll('*'));
  targetElements.value = allElements.filter(el => el.tagName.toLowerCase().startsWith('sl-'));

  targetElements.value.forEach(el => {
    el.addEventListener('sl-input', handleInput);
    el.addEventListener('sl-change', handleChange);
  });
  
  // Set initial value to match Vue's state
  syncValueToTargets(props.modelValue);
});

onBeforeUnmount(() => {
  targetElements.value.forEach(el => {
    el.removeEventListener('sl-input', handleInput);
    el.removeEventListener('sl-change', handleChange);
  });
});

// Watch Vue's state and sync down to the web components.
watch(() => props.modelValue, (newVal) => {
  syncValueToTargets(newVal);
}, { deep: true });
</script>
