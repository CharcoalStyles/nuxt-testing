<template>
  <div class="column">
    <div>
      <div class="top">
        <h1>Generic Form (ssg)</h1>

        <div>
          <p>
            A form using the
            <span class="h24ds">sl-form-control-group</span> component, with
            binding through a debounce to the avatar generator.
          </p>
          <p>This is being generated though Static Site Generation.</p>
        </div>
      </div>

      <div class="content">
        <div class="form-container">
          <div class="avatar">
            <img :src="avatar" alt="avatar" />
          </div>
          <HdsWrapper v-model="formData">
            <sl-form-control-group class="form-group">
              <sl-input
                label="Name"
                name="name"
                :value="formData!.name"
              ></sl-input>
              <sl-input
                label="Email"
                name="email"
                type="email"
                :value="formData!.email"
              ></sl-input>
              <sl-select label="Gender" name="gender" :value="formData!.gender">
                <sl-option value="Male">Male</sl-option>
                <sl-option value="Female">Female</sl-option>
              </sl-select>
            </sl-form-control-group>
          </HdsWrapper>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import HdsWrapper from "../../components/wrappers/HdsWrapper.vue";

const names = [
  {
    name: "John",
    email: "john@smith.com",
    gender: "Male",
  },
  {
    name: "Jane",
    email: "jane@smith.com",
    gender: "Female",
  },
  {
    name: "Bob",
    email: "bob@smith.com",
    gender: "Male",
  },
  {
    name: "Alice",
    email: "alice@smith.com",
    gender: "Female",
  },
];

const formData = ref(
  names[Math.floor(Math.random() * names.length)] || names[1],
);
import { useDebounceFn } from "@vueuse/core";

const avatar = ref(
  `https://api.dicebear.com/10.x/glyphs/svg?seed=${formData!.value!.name + formData!.value!.email}&flip=${formData!.value!.gender === "Female" ? "none" : "vertical"}`,
);

const debouncedFn = useDebounceFn(() => {
  avatar.value = `https://api.dicebear.com/10.x/glyphs/svg?seed=${formData!.value!.name + formData!.value!.email}&flip=${formData!.value!.gender === "Female" ? "none" : "vertical"}`;
}, 500);

watch(formData, debouncedFn);
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
  flex-direction: row;
  gap: 3em;
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
