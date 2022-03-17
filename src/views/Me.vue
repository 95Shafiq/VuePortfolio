<template>
    <div>
        <div class="w-full bg-black bg-opacity-90 fixed top-0 z-10">
            <div
                class="flex justify-between items-center max-w-6xl mx-auto px-4 py-4"
            >
                <div class="font-bold text-2xl sm:text-3xl">
                    <router-link :to="{ name: 'Home' }"
                        >Omar Gharieb</router-link
                    >
                </div>
                <div>
                    <TheNavigation />
                </div>
            </div>
        </div>
        <div
            class="max-w-6xl mx-auto mt-24 mb-12 p-6 bg-black bg-opacity-90 md:px-12"
        >
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
import TheNavigation from '../components/TheNavigation.vue'
components: {
    TheNavigation
}
</script>

<style></style>
