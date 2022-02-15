<template>
    <div>
        <div class="section">
            <h2 class="section-head">Resume</h2>
            <p class="secondary-title">Check my Resume</p>
        </div>
        <div class="section">
            <div class="grid grid-cols-1 lg:grid-cols-2">
                <div>
                    <h2 class="resume-title">Sumary</h2>
                    <div class="resume-item">
                        <span class="resume-header">Omar Gharieb</span>
                        <p class="italic text-lg leading-6">
                            Innovative and deadline-driven Frontend Engineer
                            with 1+ years of experience designing and developing
                            user-centered websites marketing material from
                            initial concept to final, polished deliverable.
                        </p>
                        <ul class="list-disc ml-5">
                            <li>Nasr Cisty, Cairo</li>
                            <li>(+20) 1016930950</li>
                            <li>omar.gharieb@outlook.com</li>
                        </ul>
                    </div>
                </div>
                <div class="lg:row-start-2">
                    <h2 class="resume-title">Education</h2>
                    <div class="resume-item">
                        <span class="resume-header"
                            >Bachelor of Applied Science - BASc, Computer
                            Science</span
                        >
                        <span class="resume-timespan"> 2014 - 2020 </span>
                        <p class="italic text-lg leading-6 mb-3">
                            New Cairo Academy - New Cairo, Cairo
                        </p>
                        <p class="italic text-lg leading-6">
                            I've spent 6 years learning about Data Analysis,
                            Data Structure, Design Patterns and work with my
                            colleagues to develope and create an online examing
                            system to make their lives easier.
                        </p>
                    </div>
                </div>
                <div class="lg:col-start-2 lg:row-start-1 lg:row-span-3">
                    <h2 class="resume-title">Professional Experience</h2>
                    <div class="resume-item">
                        <span class="resume-header"
                            >React.js Developer @ New Cairo Academy</span
                        >
                        <span class="resume-timespan"> 2018 - 2019 </span>
                        <p class="italic text-lg leading-6 mb-3">
                            New Cairo, Cairo
                        </p>
                        <ul class="list-disc ml-5">
                            <li>
                                Lead the design and development of an online
                                examing system.
                            </li>
                            <li>
                                Coded a responsive and fast UI with my colleague
                                using the newest technologies.
                            </li>
                        </ul>
                    </div>
                    <div class="resume-item">
                        <span class="resume-header"
                            >Book Designer @ Bravo Books</span
                        >
                        <span class="resume-timespan">Apr 2017 - Jul 2017</span>
                        <p class="italic text-lg leading-6 mb-3">
                            Tanta, Gharbiah
                        </p>
                        <ul class="list-disc ml-5">
                            <li>
                                Designed and Formated several books for
                                publiching.
                            </li>
                            <li>
                                Proofread and Edited several educational books.
                            </li>
                        </ul>
                    </div>
                    <div class="resume-item">
                        <span class="resume-header"
                            >UI/UX Designer @ IT-Core</span
                        >
                        <span class="resume-timespan">2015 - 2016</span>
                        <p class="italic text-lg leading-6 mb-3">
                            Tanta, Gharbiah
                        </p>
                        <ul class="list-disc ml-5">
                            <li>
                                Designed and Developed modern and responsive
                                user interfaces.
                            </li>
                            <li>
                                Worked with my colleagues on delivering the best
                                experience possible for our clients.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.resume-item {
    @apply relative border-l-2 border-slate-500 px-4 text-lg mb-4;
}

.resume-header {
    @apply text-xl text-green-500 font-bold align-top block leading-5 uppercase mb-4;
}

.resume-item ul {
    @apply my-4;
}

.resume-item::before {
    content: '';
    position: absolute;
    width: 16px;
    height: 16px;
    border-radius: 50px;
    left: -9px;
    top: 0;
    @apply bg-green-500 border-green-500;
}

.resume-timespan {
    @apply text-sm font-bold px-4 py-2 bg-zinc-900 bg-opacity-75 inline-block mb-2;
}
</style>
