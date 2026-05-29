<template>
    <header>
        <div class="logo">
            <NuxtLink  to="/">
                <img src="/logoipsum-415.svg" alt="Test logo" />
            </NuxtLink >
        </div>
        <div class="links">
            <NuxtLink  to="/ssr">SSR</NuxtLink >
            <NuxtLink  to="/ssg">SSG</NuxtLink >
        </div>
    </header>
</template>

<style scoped>
header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #444466;
    color: #ffffff;
    margin: 0;
    padding: .5em 1em;
}

.logo {
    margin: 0;
    padding: 0;
}

.logo a {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    margin: 0;
}

.logo img {
    max-height: 50px;
}

.links {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    margin: 0;
}

.links a {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    margin: 0 10px;
    text-decoration: none;
    color: var(--color-text);
}

.links a:hover {
    text-decoration: underline;
}
</style>