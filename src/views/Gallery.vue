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
                    Coffee
                </button>
                <button class="gallery-btn" @click.prevent="webFilter">
                    Burger
                </button>
                <button class="gallery-btn" @click.prevent="cardFilter">
                    Pizza
                </button>
            </div>
        </div>
        <div class="flex flex-row flex-wrap justify-center items-center gap-6">
            <div
                v-if="app"
                class="gallery-preview animate__animated animate__fadeIn"
            >
                <span>Coffee</span
                ><img
                    src="https://image.freepik.com/free-photo/morning-with-turkish-coffee-brewing_1157-8839.jpg?w=740"
                    alt=""
                />
            </div>
            <div
                v-if="card"
                class="gallery-preview animate__animated animate__fadeIn"
            >
                <span>Pizza</span
                ><img
                    src="https://image.freepik.com/free-photo/mixed-pizza-with-various-ingridients_140725-3790.jpg?w=740"
                    alt=""
                />
            </div>
            <div
                v-if="app"
                class="gallery-preview animate__animated animate__fadeIn"
            >
                <span>Coffee</span
                ><img
                    src="https://image.freepik.com/free-photo/top-view-coffee-accessories-table_23-2148336769.jpg?w=740"
                    alt=""
                />
            </div>
            <div
                v-if="web"
                class="gallery-preview animate__animated animate__fadeIn"
            >
                <span>Burger</span
                ><img
                    src="https://image.freepik.com/free-photo/front-view-burger-stand_141793-15542.jpg?w=740"
                    alt=""
                />
            </div>
            <div
                v-if="app"
                class="gallery-preview animate__animated animate__fadeIn"
            >
                <span>Coffee</span
                ><img
                    src="https://image.freepik.com/free-photo/coffee-beans-with-props-making-coffee_1220-4536.jpg?w=740"
                    alt=""
                />
            </div>
            <div
                v-if="card"
                class="gallery-preview animate__animated animate__fadeIn"
            >
                <span>Pizza</span
                ><img
                    src="https://image.freepik.com/free-photo/flat-lay-delicious-pizza-tray_23-2149235624.jpg?w=740"
                    alt=""
                />
            </div>
            <div
                v-if="app"
                class="gallery-preview animate__animated animate__fadeIn"
            >
                <span>Coffee</span
                ><img
                    src="https://image.freepik.com/free-photo/cup-coffee-with-pile-coffee-beans_1112-438.jpg?w=740"
                    alt=""
                />
            </div>
            <div
                v-if="web"
                class="gallery-preview animate__animated animate__fadeIn"
            >
                <span>Burger</span
                ><img
                    src="https://image.freepik.com/free-photo/side-view-double-cheeseburger-with-grilled-beef-patties-cheese-lettuce-leaf-burger-buns_141793-4883.jpg?w=740"
                    alt=""
                />
            </div>
            <div
                v-if="card"
                class="gallery-preview animate__animated animate__fadeIn"
            >
                <span>Pizza</span
                ><img
                    src="https://image.freepik.com/free-photo/pizza-with-salami-tomatoes-olives-cheese-dough-with-whole-wheat-flour-italian-food_2829-6855.jpg?w=740"
                    alt=""
                />
            </div>
            <div
                v-if="app"
                class="gallery-preview animate__animated animate__fadeIn"
            >
                <span>Coffee</span
                ><img
                    src="https://image.freepik.com/free-photo/close-up-hands-barista-make-latte-coffee-art-paint_1150-12161.jpg?w=740"
                    alt=""
                />
            </div>
            <div
                v-if="web"
                class="gallery-preview animate__animated animate__fadeIn"
            >
                <span>Burger</span
                ><img
                    src="https://image.freepik.com/free-photo/front-view-meat-burger-with-cheese-salad-tomatoes-dark-floor_140725-89524.jpg?w=740"
                    alt=""
                />
            </div>
            <div
                v-if="app"
                class="gallery-preview animate__animated animate__fadeIn"
            >
                <span>Coffee</span
                ><img
                    src="https://image.freepik.com/free-photo/top-view-coffee-cup-coffee-beans-dark-table_176474-560.jpg?w=740"
                    alt=""
                />
            </div>
            <div
                v-if="web"
                class="gallery-preview animate__animated animate__fadeIn"
            >
                <span>Burger</span
                ><img
                    src="https://image.freepik.com/free-photo/front-view-woman-eating-meat-burgers_141793-17491.jpg?w=740"
                    alt=""
                />
            </div>
            <div
                v-if="app"
                class="gallery-preview animate__animated animate__fadeIn"
            >
                <span>Coffee</span
                ><img
                    src="https://image.freepik.com/free-photo/cup-coffee-coffee-beans_164008-356.jpg?w=740"
                    alt=""
                />
            </div>
            <div
                v-if="card"
                class="gallery-preview animate__animated animate__fadeIn"
            >
                <span>Pizza</span
                ><img
                    src="https://image.freepik.com/free-photo/side-view-pizza-with-salami-ham-green-peppers-tomatoes-black-olives-cheese-table_141793-2996.jpg?w=740"
                    alt=""
                />
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
// .app {
//     @apply bg-red-500;
// }
// .card {
//     @apply bg-cyan-500;
// }
// .web {
//     @apply bg-lime-500;
// }

.gallery-btn {
    @apply text-sm font-bold px-5 py-2 bg-zinc-900 bg-opacity-75 inline-block mb-2 rounded;
}

.gallery-btn:active,
.gallery-btn:focus {
    @apply bg-green-500;
}

.gallery-preview {
    @apply flex-none items-stretch relative;
}

.gallery-preview > span {
    @apply absolute py-2 px-4 bg-zinc-400 bg-opacity-75;
}

.gallery-preview > img {
    @apply object-cover w-full h-48 md:h-56;
}
</style>
