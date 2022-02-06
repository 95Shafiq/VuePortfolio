<template>
    <div class="flex gap-5 text-xl">
        <router-link class="nav-link" :to="{ name: 'Home' }">Home</router-link>
        <router-link class="nav-link" :to="{ name: 'About' }"
            >About</router-link
        >
        <router-link class="nav-link" :to="{ name: 'Resume' }"
            >Resume</router-link
        >
        <router-link class="nav-link" :to="{ name: 'Services' }"
            >Services</router-link
        >
        <router-link class="nav-link" to="#">Portfolio </router-link>
        <router-link class="nav-link" to="#">Contact </router-link>
    </div>
</template>

<script></script>

<style scoped>
.nav-link {
    @apply border-b-2 border-transparent hover:border-b-2 hover:border-slate-100 transition ease-in-out delay-150 hover:text-green-500 hover:-translate-y-1 duration-300;
}
.nav-link:hover {
    @apply border-b-2 border-slate-100 text-green-500 -translate-y-1;
}
a.router-link-exact-active {
    @apply font-semibold;
}
</style>
