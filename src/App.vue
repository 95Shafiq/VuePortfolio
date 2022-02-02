<template>
    <router-view v-slot="{ Component }">
        <transition
            enter-active-class="animate__animated animate__fadeIn"
            leave-active-class="animate__animated animate__fadeIn"
            mode="out-in"
        >
            <component :is="Component" />
        </transition>
    </router-view>
    <span class="fixed bottom-2 right-2 text-md"
        >Developed by
        <a
            class="font-medium text-green-500 hover:text-slate-50"
            href="https://github.com/95Shafiq"
            target="_blank"
            >@95Shafiq</a
        ></span
    >
</template>
