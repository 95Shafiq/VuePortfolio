<template>
    <div class="section">
        <h2 class="section-head">Services</h2>
        <p class="secondary-title">My Services</p>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-5 gap-4">
            <div class="card-wrapper">
                <span class="card-wrapper-span"
                    ><fa class="fa-icon" :icon="['fab', 'blogger-b']"
                /></span>
                <h2>Blogger Themes</h2>
                <p>I will install and customize a blogger theme for you.</p>
            </div>
            <div class="card-wrapper">
                <span class="card-wrapper-span"
                    ><fa class="fa-icon" :icon="['fab', 'wordpress']"
                /></span>
                <h2>Wordpress Themes</h2>
                <p>I will isntall and customize a wordpress theme for you.</p>
            </div>
            <div class="card-wrapper">
                <span class="card-wrapper-span"
                    ><fa class="fa-icon" :icon="['fas', 'globe']"
                /></span>
                <h2>Translate a Video</h2>
                <p>
                    I will translate any video you want from English to Arabic
                    and vice versa
                </p>
            </div>
            <div class="card-wrapper">
                <span class="card-wrapper-span"
                    ><fa class="fa-icon" :icon="['fas', 'keyboard']"
                /></span>
                <h2>Transcribe a Video</h2>
                <p>
                    I will Transcribe a video for you in English or Arabic and
                    give you a timecodded script.
                </p>
            </div>
            <div class="card-wrapper">
                <span class="card-wrapper-span"
                    ><fa class="fa-icon" :icon="['fas', 'closed-captioning']"
                /></span>
                <h2>Subtitle a Video</h2>
                <p>
                    I will time your transcript and add a subtitle to your video
                    in English or Arabic.
                </p>
            </div>
        </div>
    </div>
</template>

<script></script>

<style lang="scss" scoped>
.section {
    .card-wrapper {
        @apply bg-zinc-800 bg-opacity-75 px-8 py-12 text-center relative hover:-translate-y-2 transition-all ease-in-out;

        * {
            @apply my-4;
        }
        .card-wrapper-span {
            @apply text-2xl px-5 py-4 bg-green-600 bg-opacity-100 rounded relative;

            .fa-icon {
                @apply text-white translate-y-4;
            }
        }
        .card-wrapper-span::before {
            position: absolute;
            content: '';
            left: -8px;
            top: -8px;
            height: 100%;
            width: 100%;
            background: rgba(255, 255, 255, 0.15);
            border-radius: 5px;
            transition: all 0.3s ease-out 0s;
            transform: translateZ(-1px);
            z-index: 1;
        }

        h2 {
            @apply text-2xl mt-8 font-bold;
        }
    }
}
</style>
