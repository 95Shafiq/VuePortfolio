<template>
    <div>
        <div class="section" id="about">
            <h2 class="section-head">About</h2>
            <p class="secondary-title">Learn more about me</p>
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
                    <p class="italic mb-4 text-lg">
                        I am interested in any relative postion either it's
                        full-time or part-time.
                    </p>
                    <div class="grid grid-cols-2 gap-2 mb-4">
                        <p>
                            <fa
                                icon="chevron-right"
                                class="mr-1 text-green-500"
                            /><span class="font-bold">Website: </span>
                            <a
                                class="underline"
                                href="www.omargharieb.tk"
                                target="_blank"
                                >www.omargharieb.tk</a
                            >
                        </p>
                        <p>
                            <fa
                                icon="chevron-right"
                                class="mr-1 text-green-500"
                            /><span class="font-bold">Degree:</span> BSc in
                            Computer Science
                        </p>
                        <p>
                            <fa
                                icon="chevron-right"
                                class="mr-1 text-green-500"
                            /><span class="font-bold">Phone:</span> +20
                            1016930950
                        </p>
                        <p>
                            <fa
                                icon="chevron-right"
                                class="mr-1 text-green-500"
                            /><span class="font-bold">Email:</span>
                            omar.gharieb@outlook.com
                        </p>
                        <p>
                            <fa
                                icon="chevron-right"
                                class="mr-1 text-green-500"
                            /><span class="font-bold">City:</span> Nasr City,
                            Cairo
                        </p>
                        <p>
                            <fa
                                icon="chevron-right"
                                class="mr-1 text-green-500"
                            /><span class="font-bold">Freelance:</span>
                            Available
                        </p>
                    </div>
                    <p class="text-lg">
                        I am a curious Vue.js Frontend Developer, I love
                        learning about new technologies and trying new things. I
                        have a fine experience in HTML, CSS, Sass, Tailwind.css,
                        Javascript, Vue.js, Vuex, Photoshop, Illustrator,
                        InDesign, and Adobe XD. I've almost 9 years of
                        experience working among teams both onsite and remotely.
                        I also work as a Freelance translator at Fiverr.com
                    </p>
                </div>
            </div>
            <div class="flex justify-center items-center mx-auto mt-5 gap-4">
                <div class="card">
                    <span class="card-span"
                        ><fa class="card-icon" :icon="['far', 'smile']"
                    /></span>
                    <p class="card-count">75+</p>
                    <p>Happy Clients</p>
                </div>
                <div class="card">
                    <span class="card-span"
                        ><fa
                            style="right: 25%"
                            class="card-icon"
                            :icon="['far', 'file-code']"
                    /></span>
                    <p class="card-count">150+</p>
                    <p>Compeleted Projects</p>
                </div>
            </div>
        </div>
        <!-- <div class="section" id="skills">
            <h2 class="section-head">Skills</h2>
            <div class="grid grid-cols-2 mt-4 gap-4">
                <div>
                    <div class="progress-bar-title">
                        <span>HTML</span>
                        <span>??%</span>
                    </div>
                    <div class="progress-bar-wrap">
                        <div class="progress-bar" style="width: 100%"></div>
                    </div>
                </div>
                <div>
                    <div class="progress-bar-title">
                        <span>CSS</span>
                        <span>??%</span>
                    </div>
                    <div class="progress-bar-wrap">
                        <div class="progress-bar" style="width: 100%"></div>
                    </div>
                </div>
                <div>
                    <div class="progress-bar-title">
                        <span>Javascript</span>
                        <span>??%</span>
                    </div>
                    <div class="progress-bar-wrap">
                        <div class="progress-bar" style="width: 100%"></div>
                    </div>
                </div>
                <div>
                    <div class="progress-bar-title">
                        <span>Vue.js</span>
                        <span>??%</span>
                    </div>
                    <div class="progress-bar-wrap">
                        <div class="progress-bar" style="width: 100%"></div>
                    </div>
                </div>
                <div>
                    <div class="progress-bar-title">
                        <span>Tailwind.css</span>
                        <span>??%</span>
                    </div>
                    <div class="progress-bar-wrap">
                        <div class="progress-bar" style="width: 100%"></div>
                    </div>
                </div>
                <div>
                    <div class="progress-bar-title">
                        <span>Photoshop</span>
                        <span>??%</span>
                    </div>
                    <div class="progress-bar-wrap">
                        <div class="progress-bar" style="width: 100%"></div>
                    </div>
                </div>
            </div>
        </div> -->
        <div class="section" id="interests">
            <h2 class="section-head">Skills</h2>
            <div class="icon-box grid grid-cols-4 gap-4">
                <div>
                    <span
                        ><fa class="text-orange-500" :icon="['fab', 'html5']"
                    /></span>
                    <h3>HTML</h3>
                </div>
                <div>
                    <span
                        ><fa class="text-blue-500" :icon="['fab', 'css3-alt']"
                    /></span>
                    <h3>CSS, Sass</h3>
                </div>
                <div>
                    <span
                        ><fa class="text-cyan-500" :icon="['fab', 'css3-alt']"
                    /></span>
                    <h3>Tailwind.css</h3>
                </div>
                <div>
                    <span
                        ><fa
                            class="text-yellow-500"
                            :icon="['fab', 'js-square']"
                    /></span>
                    <h3>Javascript</h3>
                </div>
                <div>
                    <span
                        ><fa class="text-green-500" :icon="['fab', 'vuejs']"
                    /></span>
                    <h3>Vue.js, Vuex</h3>
                </div>
                <div>
                    <span
                        ><fa
                            class="text-purple-600"
                            :icon="['fas', 'terminal']"
                    /></span>
                    <h3>RESTful APIs</h3>
                </div>
                <div>
                    <span
                        ><fa
                            class="text-rose-600"
                            :icon="['fas', 'window-restore']"
                    /></span>
                    <h3>Responsive Design</h3>
                </div>
                <div>
                    <span
                        ><fa class="text-cyan-600" :icon="['fas', 'database']"
                    /></span>
                    <h3>Firebase</h3>
                </div>
            </div>
        </div>
        <div class="section" id="testmonials">
            <h2 class="section-head">Testmonials</h2>
            <div class="grid grid-cols-4 gap-4">
                <div class="testmonial-box col-span-2 bg-violet-600">
                    <div class="testmonial-head">
                        <img
                            class="w-16 h-16 object-cover rounded-full mr-4"
                            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                            alt="alt-pfp"
                        />
                        <div class="flex flex-col text-lg leading-6">
                            <h2 class="font-semibold">Tim Horton</h2>
                            <p class="text-sm">Lorem, ipsum.</p>
                        </div>
                    </div>
                    <div class="testmonial-content">
                        <p class="text-md mt-2 font-semibold">
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Repudiandae possimus aut numquam perspiciatis
                            quam eos dolore itaque ab architecto molestias?
                        </p>
                        <p class="text-sm mt-3">
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Voluptates non aliquam quas recusandae
                            perspiciatis iure illo, quae natus assumenda itaque
                            vel maiores quod deleniti sunt corrupti iste earum
                            repellat nemo! Nihil blanditiis nobis dolorum ut.
                        </p>
                    </div>
                </div>
                <div class="testmonial-box bg-slate-700">
                    <div class="testmonial-head">
                        <img
                            class="w-16 h-16 object-cover rounded-full mr-4"
                            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                            alt="alt-pfp"
                        />
                        <div class="flex flex-col text-lg leading-6">
                            <h2 class="font-semibold">Zac Smith</h2>
                            <p class="text-sm">Lorem, ipsum.</p>
                        </div>
                    </div>
                    <div class="testmonial-content">
                        <p class="text-md mt-2 font-semibold">
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Provident recusandae dolorum rerum.
                        </p>
                        <p class="text-sm mt-3">
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Voluptates non aliquam quas recusandae
                            perspiciatis iure illo.
                        </p>
                    </div>
                </div>
                <div
                    class="testmonial-box row-span-2 text-slate-800 bg-slate-50"
                >
                    <div class="testmonial-head">
                        <img
                            class="w-16 h-16 object-cover rounded-full mr-4"
                            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                            alt="alt-pfp"
                        />
                        <div class="flex flex-col text-lg leading-6">
                            <h2 class="font-semibold">Jane Doe</h2>
                            <p class="text-sm">Lorem, ipsum.</p>
                        </div>
                    </div>
                    <div class="testmonial-content">
                        <p class="text-md mt-2 font-semibold">
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Repudiandae possimus aut numquam perspiciatis
                            quam eos dolore itaque ab architecto molestias?
                        </p>
                        <p class="text-sm mt-3">
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Voluptates non aliquam quas recusandae
                            perspiciatis iure illo, quae natus assumenda itaque
                            vel maiores quod deleniti sunt corrupti iste earum
                            repellat nemo! Nihil blanditiis nobis dolorum ut.
                        </p>
                    </div>
                </div>
                <div class="testmonial-box text-slate-800 bg-slate-50">
                    <div class="testmonial-head">
                        <img
                            class="w-16 h-16 object-cover rounded-full mr-4"
                            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                            alt="alt-pfp"
                        />
                        <div class="flex flex-col text-lg leading-6">
                            <h2 class="font-semibold">Andy Docks</h2>
                            <p class="text-sm">Lorem, ipsum.</p>
                        </div>
                    </div>
                    <div class="testmonial-content">
                        <p class="text-md mt-2 font-semibold">
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit.
                        </p>
                        <p class="text-sm mt-3">
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Voluptates non aliquam quas recusandae
                            perspiciatis iure illo, quae natus assumenda itaque
                            vel maiores.
                        </p>
                    </div>
                </div>
                <div class="testmonial-box col-span-2 bg-slate-900">
                    <div class="testmonial-head">
                        <img
                            class="w-16 h-16 object-cover rounded-full mr-4"
                            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                            alt="alt-pfp"
                        />
                        <div class="flex flex-col text-lg leading-6">
                            <h2 class="font-semibold">Sam Cable</h2>
                            <p class="text-sm">Lorem, ipsum.</p>
                        </div>
                    </div>
                    <div class="testmonial-content">
                        <p class="text-md mt-2 font-semibold">
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Repudiandae possimus aut numquam perspiciatis
                            quam eos dolore itaque ab architecto molestias?
                        </p>
                        <p class="text-sm mt-3">
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Voluptates non aliquam quas recusandae
                            perspiciatis iure illo, quae natus assumenda itaque
                            vel maiores quod deleniti sunt corrupti iste earum
                            repellat nemo! Nihil blanditiis nobis dolorum ut.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup></script>

<style lang="scss">
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

.testmonial-box {
    @apply p-4 rounded;
}

.testmonial-head {
    @apply flex flex-row items-center;
}
</style>
