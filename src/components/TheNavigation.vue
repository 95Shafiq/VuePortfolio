<template>
    <div class="gap-5 text-xl hidden lg:flex">
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
        <router-link class="nav-link" :to="{ name: 'Gallery' }"
            >Gallery
        </router-link>
        <router-link class="nav-link" :to="{ name: 'Contact' }"
            >Contact
        </router-link>
    </div>
    <button
        @click="showSidebar = !showSidebar"
        class="flex absolute top-6 right-4 text-lg lg:hidden z-10"
        :class="{ 'text-green-500': showSidebar }"
    >
        <fa :icon="['fas', 'bars']" />
    </button>
    <div class="mob-nav" :class="{ 'translate-x-full': !showSidebar }">
        <router-link
            @click="showSidebar = !showSidebar"
            class="nav-link"
            :to="{ name: 'Home' }"
            >Home</router-link
        >
        <router-link
            @click="showSidebar = !showSidebar"
            class="nav-link"
            :to="{ name: 'About' }"
            >About</router-link
        >
        <router-link
            @click="showSidebar = !showSidebar"
            class="nav-link"
            :to="{ name: 'Resume' }"
            >Resume</router-link
        >
        <router-link
            @click="showSidebar = !showSidebar"
            class="nav-link"
            :to="{ name: 'Services' }"
            >Services</router-link
        >
        <router-link
            @click="showSidebar = !showSidebar"
            class="nav-link"
            :to="{ name: 'Gallery' }"
            >Gallery
        </router-link>
        <router-link
            @click="showSidebar = !showSidebar"
            class="nav-link"
            :to="{ name: 'Contact' }"
            >Contact
        </router-link>
    </div>
</template>

<script>
import { ref } from 'vue'
export default {
    setup() {
        const showSidebar = ref(false)
        return {
            showSidebar,
        }
    },
}
</script>

<style scoped>
.nav-link {
    @apply border-b-2 border-transparent;
}

a.router-link-exact-active {
    @apply font-semibold text-green-500;
}

.mob-nav {
    @apply flex gap-4 flex-col text-right absolute h-screen inset-y-0 right-0 px-16 py-16 bg-black bg-opacity-90 text-2xl sm:text-2xl
    lg:hidden transform transition duration-200 ease-in-out;
}
</style>
