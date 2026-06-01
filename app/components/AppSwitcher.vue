<template>
  <ClientOnly>
    <div @click="handleWebComponentClick">
      <sl-app-switcher
        id="switcher"
        mobile-header-img-url="/assets/images/hub24.svg"
        :applications="applications"
      ></sl-app-switcher>
    </div>
  </ClientOnly>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "#app";

const router = useRouter();

const handleWebComponentClick = (event: Event) => {
  // ComposedPath allows us to see through the Shadow DOM boundary
  const path = event.composedPath();

  // Find if any element in the click path is an anchor tag
  const anchor = path.find((el) => {
    return (el as Element).tagName === "A";
  }) as HTMLAnchorElement | undefined;

  if (!anchor) return;

  const href = anchor.getAttribute("href");
  const target = anchor.getAttribute("target");

  // Ignore external links, mailto, tel, and new tab clicks
  if (
    !href ||
    href.startsWith("http") ||
    href.startsWith("//") ||
    target === "_blank"
  ) {
    return;
  }

  // Prevent standard browser navigation (full-page reload)
  event.preventDefault();

  // Safely push the route into Nuxt's internal router
  router.push(href);
};

const applications = ref([
  {
    label: "Form (ssr)",
    href: "/ssr/form",
    iconSrc:
      "https://api.iconify.design/bi/bell-fill.svg?height=16&color=%23ba3329",
  },
  {
    label: "Colour Ramp (ssr)",
    href: "/ssr/ramp",
    iconSrc:
      "https://api.iconify.design/bi/airplane-fill.svg?height=16&color=%23ba3329",
  },
  {
    label: "Form(ssg)",
    href: "/ssg/form",
    iconSrc:
      "https://api.iconify.design/bi/bell-fill.svg?height=16&color=%23ba33ba",
  },
  {
    label: "Colour Ramp (ssg)",
    href: "/ssg/ramp",
    iconSrc:
      "https://api.iconify.design/bi/airplane-fill.svg?height=16&color=%23ba33ba",
  },
]);
</script>
