<template>
  <div class="column">
    <div>
      <div class="top">
        <h1>Colour Ramp (ssr)</h1>
        <div>
          <p>
            A page with a colour ramp and picker using the
            <span class="h24ds">sl-color-ramp</span> and
            <span class="h24ds">sl-color-picker</span> components, bound
            together.
          </p>
          <p>This is being generated though Server Side Rendering.</p>
        </div>
      </div>

      <div class="content">
        <div class="form-container">
          <sl-color-ramp :value="colour"></sl-color-ramp>

          <HdsWrapper v-model="colour">
            <sl-color-picker
              :value="colour"
              panel-placement="below"
            ></sl-color-picker>
          </HdsWrapper>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import HdsWrapper from "../../components/wrappers/HdsWrapper.vue";

const colour = ref("#283D84");
</script>

<style scoped>
.content {
  padding: 0;
  margin: 0;
  width: 100%;
}

.top {
  display: flex;
  flex-direction: column;
  gap: 1em;
}

.h24ds {
  font-family: "Outfit", sans-serif;
  color: var(--sl-color-primary-400);
  font-weight: 600;
}

.form-container {
  display: flex;
  flex-direction: column;
  gap: 2em;
  padding: 1em;
}

.avatar {
  width: 60px;
  height: 60px;
  overflow: hidden;
}

.form-group {
  flex-grow: 1;
}
</style>
