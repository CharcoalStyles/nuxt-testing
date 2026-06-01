<template>
  <div class="column">
    <div>
      <h1>Vue & Nuxt Demo</h1>
    </div>

    <div class="content">
      <p>
        This site is a demo of Vue and Nuxt, showcasing the two main rendering
        modes SSR and SSG.
      </p>
      <p>
        The first time you visit this site it will pull down a the Vue/Nuxt
        scaffold with the content of the route, either SSR or SSG. From there,
        the application will work similar to a SPA, either downloading the SSG
        blob or the server will render and return SSR blob.
      </p>
    </div>
  </div>
</template>


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
