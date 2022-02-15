<template>
    <div class="section">
        <h2 class="section-head">Contact</h2>
        <p class="secondary-title">Contact Me</p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="container">
                <span><fa :icon="['fas', 'users']" /></span>
                <div>
                    <h2>Social Profiles</h2>
                    <div class="icon-container">
                        <a
                            href="https://www.twitter.com/xMorsi/"
                            target="_blank"
                            ><fa :icon="['fab', 'twitter']"
                        /></a>
                        <a
                            href="https://www.facebook.com/xMorsi/"
                            target="_blank"
                            ><fa :icon="['fab', 'facebook']"
                        /></a>
                        <a href="https://github.com/95Shafiq" target="_blank"
                            ><fa :icon="['fab', 'github']"
                        /></a>
                        <a
                            href="https://www.linkedin.com/in/omargharieb/"
                            target="_blank"
                            ><fa :icon="['fab', 'linkedin']"
                        /></a>
                    </div>
                </div>
            </div>
            <div class="container">
                <span><fa :icon="['fas', 'phone']" /></span>
                <div>
                    <h2>Contacts</h2>
                    <div class="flex flex-col">
                        <p>omar.gharieb@outlook.com</p>
                        <p>(+20) 1016930950</p>
                    </div>
                </div>
            </div>
            <form
                class="md:col-span-2 grid grid-cols-1 gap-4 bg-zinc-800 bg-opacity-75 px-6 py-6"
            >
                <input
                    type="text"
                    name="name"
                    class="form-control md:col-span-1"
                    id="name"
                    placeholder="Your Name"
                />
                <input
                    type="text"
                    name="email"
                    class="form-control md:col-span-1"
                    id="email"
                    placeholder="Your Email"
                />
                <input
                    type="text"
                    name="subject"
                    class="form-control md:col-span-2"
                    id="subject"
                    placeholder="Subject"
                />
                <textarea
                    type="text"
                    name="message"
                    class="form-control form-textarea md:col-span-2"
                    id="message"
                    placeholder="Message"
                />
                <div class="col-span-1 md:col-span-2 flex">
                    <button
                        class="bg-green-500 rounded mx-auto items-center py-3 px-6"
                        type="submit"
                    >
                        Send Message
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>

<script></script>

<style lang="scss" scoped>
.section {
    .container {
        @apply flex flex-row bg-zinc-800 bg-opacity-75 px-6 py-6 text-white;

        span {
            height: 4rem;
            width: 4rem;
            @apply p-4 rounded-full mr-4 text-xl pl-5
                bg-zinc-200 bg-opacity-10 text-green-500;
        }

        div {
            h2 {
                @apply text-lg md:text-2xl text-zinc-400 font-bold mb-2;
            }

            p {
                @apply break-all;
            }

            .icon-container {
                @apply flex flex-row gap-2 md:gap-4 text-2xl;

                a:hover {
                    @apply text-green-500;
                }
            }
        }
    }
    .form-control {
        @apply px-3 py-2 bg-zinc-800 bg-opacity-90;
    }
    .form-textarea {
        min-height: 10rem;
    }
}
</style>
