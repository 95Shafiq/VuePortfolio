<template>
    <router-view v-slot="{ Component, route }">
        <transition
            :enter-active-class="route.meta.enterClass"
            :leave-active-class="route.meta.leaveClass"
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
