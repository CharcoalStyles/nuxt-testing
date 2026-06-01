<template>
  <sl-app-switcher
    id="switcher"
    mobile-header-img-url="/assets/images/hub24.svg"
    :applications="applications"
  ></sl-app-switcher>
</template>

<script setup lang="ts">
import { ref } from "vue";

const applications = ref([
  { label: "Form (ssr)", href: "/ssr/form", iconSrc: "https://api.iconify.design/bi/bell-fill.svg?height=16&color=%23ba3329" },
  { label: "Colour Ramp (ssr)", href: "/ssr/ramp", iconSrc: "https://api.iconify.design/bi/airplane-fill.svg?height=16&color=%23ba3329" },
  { label: "Form(ssg)", href: "/ssg/form", iconSrc: "https://api.iconify.design/bi/bell-fill.svg?height=16&color=%23ba33ba" },
  { label: "Colour Ramp (ssg)", href: "/ssg/ramp", iconSrc: "https://api.iconify.design/bi/airplane-fill.svg?height=16&color=%23ba33ba" },
]);
</script>
