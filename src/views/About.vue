<template>
    <div>
        <div
            class="w-full bg-zinc-900 bg-opacity-90 fixed top-0 drop-shadow-sm"
        >
            <div
                class="flex justify-between items-center max-w-5xl mx-auto px-6 py-4"
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
        <div
            class="max-w-5xl mx-auto mt-24 mb-12 p-6 bg-zinc-900 bg-opacity-90"
        >
            <div class="section">
                <h2 class="section-head">About</h2>
                <p class="uppercase text-4xl font-bold mb-4">
                    Learn more about me
                </p>
                <div class="flex mb-12">
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
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua.
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
                                /><span class="font-bold">City:</span> New York,
                                USA
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
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Non ex maxime saepe asperiores rem eveniet
                            natus, eos numquam eum tenetur qui pariatur error
                            hic suscipit facere porro obcaecati architecto
                            officia corrupti iste. A beatae, ratione corporis
                            eos est laudantium iste aliquid veniam delectus
                            maxime earum consequatur excepturi dolor sint soluta
                            inventore nihil iure temporibus voluptatem aut
                            possimus eius dolorum mollitia quae! Dolor vel hic
                            veritatis tempora inventore commodi totam iure
                            perferendis consectetur laboriosam quis, earum
                            maxime alias praesentium excepturi cum facere,
                            voluptas quam distinctio nesciunt fugit similique?
                            Assumenda corporis veniam eligendi aut labore sit,
                            quam nesciunt nihil, praesentium, inventore eum.
                        </p>
                    </div>
                </div>
                <div
                    class="flex justify-center items-center mx-auto mt-5 gap-4"
                >
                    <div class="card">
                        <span class="card-span"
                            ><fa class="card-icon" :icon="['far', 'smile']"
                        /></span>
                        <p class="card-count">232</p>
                        <p>Happy Clients</p>
                    </div>
                    <div class="card">
                        <span class="card-span"
                            ><fa
                                style="right: 25%"
                                class="card-icon"
                                :icon="['far', 'file-code']"
                        /></span>
                        <p class="card-count">25</p>
                        <p>Compeleted Projects</p>
                    </div>
                </div>
            </div>
            <div class="section">
                <h2 class="section-head">Skills</h2>
                <div class="grid grid-cols-2 mt-4 gap-4">
                    <div>
                        <div class="progress-bar-title">
                            <span>HTML</span>
                            <span>100%</span>
                        </div>
                        <div class="progress-bar-wrap">
                            <div class="progress-bar" style="width: 100%"></div>
                        </div>
                    </div>
                    <div>
                        <div class="progress-bar-title">
                            <span>CSS</span>
                            <span>85%</span>
                        </div>
                        <div class="progress-bar-wrap">
                            <div class="progress-bar" style="width: 85%"></div>
                        </div>
                    </div>
                    <div>
                        <div class="progress-bar-title">
                            <span>Javascript</span>
                            <span>75%</span>
                        </div>
                        <div class="progress-bar-wrap">
                            <div class="progress-bar" style="width: 75%"></div>
                        </div>
                    </div>
                    <div>
                        <div class="progress-bar-title">
                            <span>Vue.js</span>
                            <span>70%</span>
                        </div>
                        <div class="progress-bar-wrap">
                            <div class="progress-bar" style="width: 70%"></div>
                        </div>
                    </div>
                    <div>
                        <div class="progress-bar-title">
                            <span>Tailwind.css</span>
                            <span>75%</span>
                        </div>
                        <div class="progress-bar-wrap">
                            <div class="progress-bar" style="width: 75%"></div>
                        </div>
                    </div>
                    <div>
                        <div class="progress-bar-title">
                            <span>Photoshop</span>
                            <span>80%</span>
                        </div>
                        <div class="progress-bar-wrap">
                            <div class="progress-bar" style="width: 80%"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="section mt-12">
                <h2 class="section-head mb-4">Iterests</h2>
                <div class="icon-box grid grid-cols-4 gap-4">
                    <div>
                        <span
                            ><fa class="text-orange-600" icon="hockey-puck"
                        /></span>
                        <h3>Lorem Ipsum</h3>
                    </div>
                    <div>
                        <span
                            ><fa class="text-red-600" icon="quidditch"
                        /></span>
                        <h3>Dolor Sitema</h3>
                    </div>
                    <div>
                        <span
                            ><fa class="text-amber-600" icon="running"
                        /></span>
                        <h3>Sed perspiciatis</h3>
                    </div>
                    <div>
                        <span
                            ><fa class="text-lime-600" icon="golf-ball"
                        /></span>
                        <h3>Magni Dolores</h3>
                    </div>
                    <div>
                        <span
                            ><fa class="text-blue-600" icon="dumbbell"
                        /></span>
                        <h3>Nemo Enim</h3>
                    </div>
                    <div>
                        <span
                            ><fa class="text-violet-600" icon="swimmer"
                        /></span>
                        <h3>Eiusmod Tempor</h3>
                    </div>
                    <div>
                        <span
                            ><fa class="text-rose-600" icon="football-ball"
                        /></span>
                        <h3>Midela Teren</h3>
                    </div>
                    <div>
                        <span
                            ><fa class="text-cyan-600" icon="table-tennis"
                        /></span>
                        <h3>Pira Neve</h3>
                    </div>
                </div>
            </div>
            <div class="section">
                <h2 class="section-head">Testmonials</h2>
                <div class="grid grid-cols-4 gap-4">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
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
.section {
    @apply mb-8;
}
.section-head {
    @apply uppercase font-medium text-gray-400;
}
.section-head::after {
    content: '';
    width: 120px;
    height: 2px;
    display: inline-block;
    background: #22c55e;
    margin: 4px 10px;
}

.card {
    @apply bg-zinc-800 bg-opacity-75 w-3/12 px-8 py-4 text-center relative;
}
.card-span {
    position: absolute;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    top: -20px;
    transform: translateX(-50%);
    @apply bg-gray-50 bg-opacity-10 text-green-500 text-2xl;
}
.card-icon {
    top: 20%;
    right: 20%;
    @apply absolute;
}

.card-count {
    @apply mt-2 text-3xl font-semibold;
}

.progress-bar-title {
    @apply flex justify-between font-bold text-sm;
}
.progress-bar-wrap {
    @apply w-full bg-gray-200 h-2.5 dark:bg-gray-700 mt-1;
}

.progress-bar {
    @apply bg-green-600 h-2.5;
}

.icon-box div {
    @apply px-4 py-4 bg-zinc-800 bg-opacity-90 items-center flex;
}
.icon-box div span {
    @apply mr-4 text-2xl;
}
.icon-box div h3 {
    @apply text-lg font-medium;
}
</style>
