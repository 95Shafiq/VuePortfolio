<template>
    <div>
        <div class="w-full bg-stone-900">
            <div
                class="flex justify-between items-center max-w-5xl mx-auto py-4"
            >
                <div
                    class="text-4xl font-bold transition ease-in-out delay-150 hover:text-green-500 hover:translate-x-1 duration-300"
                >
                    <router-link :to="{ name: 'Home' }"
                        >Omar Gharieb</router-link
                    >
                </div>
                <div>
                    <Nav />
                </div>
            </div>
        </div>
        <div class="max-w-5xl mx-auto mt-5 p-5 bg-stone-900">
            <h2 id="psuedoH2" class="uppercase font-medium text-gray-400">
                About
            </h2>
            <p class="uppercase text-4xl font-bold mb-4">Learn more about me</p>
            <div class="flex">
                <img
                    class="w-80 h-96"
                    src="https://i.ibb.co/mvg0gbq/141929228-2842636065954750-8001183048998547824-n.jpg"
                    alt="pfp"
                />
                <div class="flex flex-col py-1 px-4">
                    <p class="text-3xl font-semibold text-green-500 mb-3">
                        Vue.js & Tailwind.css Developer
                    </p>
                    <p class="italic mb-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                    </p>
                    <div class="grid grid-cols-2 gap-2 mb-4">
                        <p>
                            <fa
                                icon="chevron-right"
                                class="mr-1 text-green-500"
                            /><span class="font-bold">Birthday:</span> 1 May
                            1995
                        </p>
                        <p>
                            <fa
                                icon="chevron-right"
                                class="mr-1 text-green-500"
                            /><span class="font-bold">Age:</span> 30
                        </p>
                        <p>
                            <fa
                                icon="chevron-right"
                                class="mr-1 text-green-500"
                            /><span class="font-bold">Website:</span>
                            www.example.com
                        </p>
                        <p>
                            <fa
                                icon="chevron-right"
                                class="mr-1 text-green-500"
                            /><span class="font-bold">Degree:</span> Master
                        </p>
                        <p>
                            <fa
                                icon="chevron-right"
                                class="mr-1 text-green-500"
                            /><span class="font-bold">Phone:</span> +123 456
                            7890
                        </p>
                        <p>
                            <fa
                                icon="chevron-right"
                                class="mr-1 text-green-500"
                            /><span class="font-bold">Email:</span>
                            email@example.com
                        </p>
                        <p>
                            <fa
                                icon="chevron-right"
                                class="mr-1 text-green-500"
                            /><span class="font-bold">City:</span> New York, USA
                        </p>
                        <p>
                            <fa
                                icon="chevron-right"
                                class="mr-1 text-green-500"
                            /><span class="font-bold">Freelance:</span>
                            Available
                        </p>
                    </div>
                    <p>
                        Officiis eligendi itaque labore et dolorum mollitia
                        officiis optio vero. Quisquam sunt adipisci omnis et ut.
                        Nulla accusantium dolor incidunt officia tempore. Et
                        eius omnis. Cupiditate ut dicta maxime officiis quidem
                        quia. Sed et consectetur qui quia repellendus itaque
                        neque. Aliquid amet quidem ut quaerat cupiditate. Ab et
                        eum qui repellendus omnis culpa magni laudantium
                        dolores.
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import Nav from '../components/Nav.vue'
components: {
    Nav
}
</script>

<style scoped>
#psuedoH2::after {
    content: '';
    width: 120px;
    height: 2px;
    display: inline-block;
    background: #22c55e;
    margin: 4px 10px;
}
</style>
