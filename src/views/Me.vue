<template>
    <div>
        <div class="w-full bg-black bg-opacity-90 fixed top-0 drop-shadow-sm">
            <div
                class="flex justify-between items-center max-w-5xl mx-auto px-6 py-4"
            >
                <div class="text-4xl font-bold active:text-green-500">
                    <router-link :to="{ name: 'Home' }"
                        >Omar Gharieb</router-link
                    >
                </div>
                <div>
                    <Nav />
                </div>
            </div>
        </div>
        <div class="max-w-5xl mx-auto mt-24 mb-12 p-6 bg-black bg-opacity-90">
            <router-view v-slot="{ Component, route }">
                <transition
                    :enter-active-class="route.meta.enterClass"
                    :leave-active-class="route.meta.leaveClass"
                    mode="out-in"
                >
                    <component :is="Component" />
                </transition>
            </router-view>
        </div>
    </div>
</template>

<script setup>
import Nav from '../components/Nav.vue'
components: {
    Nav
}
</script>

<style></style>
