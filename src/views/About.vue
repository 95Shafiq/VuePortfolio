<template>
    <div>
        <div class="section" id="about">
            <h2 class="section-head">About</h2>
            <p class="secondary-title">Learn more about me</p>
            <div class="md:flex mb-12">
                <img
                    class="w-full md:w-80 md:h-96 object-cover mb-4"
                    src="https://i.ibb.co/mvg0gbq/141929228-2842636065954750-8001183048998547824-n.jpg"
                    alt="pfp"
                />
                <div class="flex flex-col py-1 px-4">
                    <p class="text-3xl font-semibold text-green-500 mb-3">
                        Vue.js & Windi.css Developer
                    </p>
                    <p class="italic mb-4 text-lg">
                        I am interested in any relative position either it's
                        full-time or part-time.
                    </p>
                    <div class="grid lg:grid-cols-2 gap-2 mb-4">
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
            <!-- <div class="grid md:grid-cols-2 lg:grid-cols-4 mx-auto mt-5 gap-4">
                <div class="card lg:col-start-2">
                    <span class="card-span"
                        ><fa class="card-icon" :icon="['far', 'smile']"
                    /></span>
                    <p class="card-count">75+</p>
                    <p>Happy Clients</p>
                </div>
                <div class="card lg:col-start-3">
                    <span class="card-span"
                        ><fa
                            style="right: 25%"
                            class="card-icon"
                            :icon="['far', 'file-code']"
                    /></span>
                    <p class="card-count">150+</p>
                    <p>Compeleted Projects</p>
                </div>
            </div> -->
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
            <div
                class="icon-box grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4"
            >
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
        <div class="section" id="testimonials">
            <h2 class="section-head">Testimonials</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-4">
                <div
                    class="testimonial-box"
                    v-for="(testimonial, index) in testimonials"
                    :key="index"
                >
                    <div class="testimonial-head">
                        <img
                            class="w-16 h-16 object-cover rounded-full mr-4"
                            :src="testimonial.imgSrc"
                            alt="alt-pfp"
                        />
                        <div class="flex flex-col text-lg leading-6">
                            <h2 class="font-semibold">
                                {{ testimonial.name }}
                            </h2>
                            <p class="text-sm font-medium">
                                {{ testimonial.country }}
                            </p>
                        </div>
                    </div>
                    <div class="testimonial-content">
                        <p class="text-lg p-2 mt-2 font-medium">
                            {{ testimonial.body }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            testimonials: [
                {
                    imgSrc: 'https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/709dc97c753fc35c3d8c28d52876983f-746463651553287567.2330961/39D3693A-3B0A-4A0A-8EA6-7329D0138189',
                    name: 'Mutlaq Al-Jared',
                    country: 'Kuwait',
                    body: 'Omar is the best, I worked with a lot of other people but he always delivers fast and with high quality.. sure will come back',
                },
                {
                    imgSrc: 'https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/profile/photos/42308677/original/13612401_1168224636533798_6893057819877577078_n.jpg',
                    name: 'khaled Al-fussail',
                    country: 'Yemen',
                    body: 'A very excellent experience Quick to communicate and understand',
                },
                {
                    imgSrc: 'https://images.pexels.com/photos/5253574/pexels-photo-5253574.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                    name: 'neverlandqa',
                    country: 'Qatar',
                    body: 'Omar is amazing, a true professional. He responds in the fastest manner and provides high-level services indeed. I highly recommend him and will definitely work with him again. Thank you Omar!',
                },
                {
                    imgSrc: 'https://images.pexels.com/photos/5253574/pexels-photo-5253574.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                    name: 'Ali Kamal',
                    country: 'Kuwait',
                    body: 'Finished before deadline and smooth no mistakes at all. great working with Omar!',
                },
                {
                    imgSrc: 'https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/9fc74e84c06a6ef600b0796b08a6ae8c-1617462506955/afea7e1e-2c7c-4cf1-8191-2a5c2e27f4ac.jpg',
                    name: 'Alex James',
                    country: 'Ireland',
                    body: 'Great Service. Speedy initial reply and project was delivered quickly. Would use again!',
                },
            ],
        }
    },
}
</script>

<style lang="scss">
.card {
    @apply bg-zinc-800 bg-opacity-75 px-8 py-4 text-center relative;
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

.testimonial-box {
    @apply p-4 rounded;

    &:nth-child(1) {
        @apply bg-violet-500 md:col-span-2 lg:col-span-3;
    }

    &:nth-child(2) {
        @apply bg-slate-700 lg:col-span-2;
    }

    &:nth-child(3) {
        @apply bg-slate-100 text-slate-800 md:row-span-2 lg:col-span-2 lg:row-span-2;
    }

    &:nth-child(4) {
        @apply bg-slate-100 text-slate-900 md:row-span-2 lg:col-span-2;
    }

    &:nth-child(5) {
        @apply bg-slate-900 md:col-span-1 lg:col-span-3;
    }

    .testimonial-head {
        @apply flex flex-row items-center;
    }
}
</style>
