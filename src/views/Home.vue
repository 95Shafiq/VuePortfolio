<template>
    <div
        class="flex justify-center items-center h-screen flex-col absolute left-40"
    >
        <div>
            <h1 class="text-6xl mb-5 font-bold">
                <router-link :to="{ name: 'Home' }">Omar Gharieb</router-link>
            </h1>
            <p class="text-3xl mb-6">
                I'm a passionate
                <span class="border-b-2 border-green-800"
                    >Front-End Developer</span
                >
                from Cairo
            </p>
            <Nav />
            <div class="flex flex-row gap-5 mt-6 text-3xl">
                <a
                    class="hover:text-sky-600 transition ease-in-out delay-150 hover:-translate-y-1 duration-300"
                    href="https://www.twitter.com/xMorsi/"
                    target="_blank"
                    ><fa :icon="['fab', 'twitter']"
                /></a>
                <a
                    class="hover:text-blue-900 transition ease-in-out delay-150 hover:-translate-y-1 duration-300"
                    href="https://www.facebook.com/xMorsi/"
                    target="_blank"
                    ><fa :icon="['fab', 'facebook']"
                /></a>
                <a
                    class="hover:text-purple-700 transition ease-in-out delay-150 hover:-translate-y-1 duration-300"
                    href="https://github.com/95Shafiq"
                    target="_blank"
                    ><fa :icon="['fab', 'github']"
                /></a>
                <a
                    class="hover:text-blue-700 transition ease-in-out delay-150 hover:-translate-y-1 duration-300"
                    href="https://www.linkedin.com/in/omargharieb/"
                    target="_blank"
                    ><fa :icon="['fab', 'linkedin']"
                /></a>
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
import Nav from '../components/Nav.vue'

components: {
    Nav
}
const store = useStore()
const name = computed(() => {
    return store.state.user.name
})
</script>

<style></style>
