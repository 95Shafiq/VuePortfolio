<template>
    <div class="section">
        <h2 class="section-head">Gallery</h2>
        <p class="secondary-title">My Previous Projects</p>
        <div class="flex flex-col justify-center items-center mb-6">
            <div class="flex gap-1">
                <button class="gallery-btn" @click.prevent="allFilter">
                    All
                </button>
                <button class="gallery-btn" @click.prevent="appFilter">
                    Native
                </button>
                <button class="gallery-btn" @click.prevent="webFilter">
                    Vue.JS
                </button>
                <button class="gallery-btn" @click.prevent="cardFilter">
                    React.JS
                </button>
            </div>
        </div>
        <div
            class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-12"
        >
            <div
                v-if="app"
                class="gallery-preview animate__animated animate__fadeIn"
            >
                <span>Native</span
                ><a href="https://www.scarlet-tm.com/" target="_blank"
                    ><img
                        src="https://files.catbox.moe/f0tbg4.jpg"
                        alt="Team Scarlet"
                /></a>
            </div>
            <div
                v-if="web"
                class="gallery-preview animate__animated animate__fadeIn"
            >
                <span>Vue.JS</span
                ><a
                    href="https://95shafiq.github.io/MonsterSlayer/"
                    target="_blank"
                    ><img
                        src="https://files.catbox.moe/i89pdp.png"
                        alt="Monster Slayer"
                /></a>
            </div>
            <div
                v-if="app"
                class="gallery-preview animate__animated animate__fadeIn"
            >
                <span>Vue.JS</span
                ><a
                    href="https://95shafiq.github.io/MonsterSlayer/"
                    target="_blank"
                    ><img
                        src="https://files.catbox.moe/t7abyg.png"
                        alt="Omnifood"
                /></a>
            </div>
            <div
                v-if="app"
                class="gallery-preview animate__animated animate__fadeIn"
            >
                <span>Vue.JS</span
                ><a
                    href="https://95shafiq.github.io/MonsterSlayer/"
                    target="_blank"
                    ><img
                        src="https://files.catbox.moe/du5k3q.png"
                        alt="Media Stones"
                /></a>
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed } from '@vue/runtime-core'
import { useStore } from 'vuex'

const store = useStore()

const app = computed(() => {
    return store.state.app
})

const web = computed(() => {
    return store.state.web
})

const card = computed(() => {
    return store.state.card
})

function allFilter() {
    store.commit('allFilter')
}
function appFilter() {
    store.commit('appFilter')
}
function webFilter() {
    store.commit('webFilter')
}
function cardFilter() {
    store.commit('cardFilter')
}
</script>

<style lang="scss" scoped>
.gallery-btn {
    @apply text-sm font-bold px-5 py-2 bg-zinc-900 bg-opacity-75 inline-block mb-2 rounded;
}

.gallery-btn:active,
.gallery-btn:focus {
    @apply bg-green-500;
}

.gallery-preview {
    @apply flex-none items-stretch relative;

    span {
        @apply absolute py-2 px-4 bg-zinc-400 bg-opacity-75;
    }

    img {
        @apply object-cover w-full h-48 md:h-56;
    }
}
</style>
