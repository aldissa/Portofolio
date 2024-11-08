<template>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous" />

    <main>
        <div id="home" style="overflow: hidden">
            <div class="d-flex justify-content-center align-items-center" style="min-height: 100vh">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-md-6 mb-4 order-md-2">
                            <div class="flex justify-center md:justify-start fadein-right">
                                <img alt="avatar" :src="profile" fetchpriority="high" decoding="async" style="width: 80%; max-width: 200%; border-radius: 50%; margin: 0 auto 20px; display: block;" class="rounded-circle pict">
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="text-left">
                                <h5 style="color: #fffffe; margin-bottom: -1rem;"><b>Hello I'm</b></h5>
                                <h1 class="text-large" style="color: #ff8906;">
                                    <span style="font-size: 4rem;" class="fadein-left"><b>{{ nama }}</b></span>
                                </h1>
                                <h1 class="typewrite text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-600 text-white md:text-2xl fadein-up" v-html="currentRole"></h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>

    <!-- About -->
    <div
        class="bg-[#1e1e1f] px-5 py-5 text-left border border-[#383838] text-amber-50">
        <article data-page="about">
            <header>
                <div class="text-2xl font-bold text-white mb-5 fadein-bot title-section flex items-center">
                    About Me &nbsp;
                    <div class="h-[1px] w-32 bg-amber-200 md:w-96 aos-init aos-animate" data-aos="zoom-in-left"
                        data-aos-duration="600"></div>
                </div>
            </header>

            <section
                class="text-sm md:text-lg text-justify flex flex-col gap-4 md:flex-row md:gap-8 md:justify-left md:items-center">
                <div class="flex justify-center">
                    <img :src="profile"  alt="Avatar" class="w-9/12 rounded-full mb-3 fadein-up">
                </div>
                <div class="md:w-7/12">
                    <p class="mb-3 md:mb-7 fadein-left fadeins-1">
                        &nbsp; &nbsp; &nbsp; Hello! My name is Muhammad Aldi Syamsul Anwar, a first-year Computer Science student with a passion for exploring the world of coding and technology. 
                        I am currently diving into the fundamentals of full-stack development, with a goal to create seamless and engaging digital experiences.
                    </p>
                    <p class="mb-3 fadein-left fadeins-2">
                        &nbsp; &nbsp; &nbsp; With a background in technical and analytical skills, I’m committed to continuous learning and building projects that solve real-world problems. 
                        I’m excited to connect and grow in the tech community while sharing my journey as a budding developer.
                    </p>
                </div>
            </section>
        </article>
    </div>
    
    <div class="page-container">
        <div class="custom-card">
            <article data-page="about">
                <header>
                    <div class="custom-header">
                        <h3 class="custom-title">Skills 
                            <div class="custom-title-line" style="height: 1px; width: 96px; background-color: #ff8906; animation: zoom-in-left 0.6s" data-aos-duration="600"></div></h3>
                    </div>
                </header>

                <nav class="skills-tabs">
                    <button @click="activeTab = 1" :class="{ active: activeTab === 1 }">Tech stack</button>
                    <button @click="activeTab = 2" :class="{ active: activeTab === 2 }">Tools</button>
                </nav>

                <section>
                    <div v-show="activeTab === 1" class="custom-grid">
                        <div v-for="item in techstack" :key="item.id" class="custom-item">
                            <img :src="item.imageUrl" alt="tech icon" loading="lazy" class="custom-img">
                            <div class="custom-text">
                                <div class="custom-tech">{{ item.name }}</div>
                            </div>
                        </div>
                    </div>

                    <div v-show="activeTab === 2" class="custom-grid">
                        <div v-for="item in tools" :key="item.id" class="custom-item">
                            <img :src="item.imageUrl" alt="tool icon" loading="lazy" class="custom-img" />
                            <div class="custom-text">{{ item.name }}</div>
                        </div>
                    </div>
                </section>
            </article>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
        return {
            activeTab: 1,
            techstack: [
            { 
                id: 1,
                name: "HTML 5", 
                imageUrl: "https://cdn-icons-png.flaticon.com/512/1051/1051277.png" 
            },
            { 
                id: 2, 
                name: "CSS", 
                imageUrl: "https://cdn-icons-png.flaticon.com/512/732/732190.png" 
            },
            { 
                id: 3, 
                name: "JavaScript", 
                imageUrl: "https://cdn.worldvectorlogo.com/logos/javascript-1.svg" 
            },
            { 
                id: 4, 
                name: "Laravel", 
                imageUrl: "https://cdn.worldvectorlogo.com/logos/laravel-2.svg" 
            },
            { 
                id: 5, 
                name: "Vuejs", 
                imageUrl: "https://cdn.iconscout.com/icon/free/png-256/free-vue-282497.png?f=webp" 
            },
            { 
                id: 6, 
                name: "Tailwind", 
                imageUrl: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" 
            },
            { 
                id: 7, 
                name: "Bootstrap", 
                imageUrl: "https://getbootstrap.com/docs/5.2/assets/brand/bootstrap-logo-shadow.png" 
            },
            { 
                id: 8, 
                name: "Python", 
                imageUrl: "https://cdn-icons-png.flaticon.com/128/5968/5968350.png" 
            },
            ],
            tools: [
            { 
                id: 1, 
                name: "VS Code", 
                imageUrl: "https://cdn.worldvectorlogo.com/logos/visual-studio-code-1.svg" },
            { 
                id: 2, 
                name: "Git", 
                imageUrl: "https://cdn-icons-png.flaticon.com/512/270/270798.png" },
            { 
                id: 3, 
                name: "Postman", 
                imageUrl: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" },
            { 
                id: 4, 
                name: "Docker", 
                imageUrl: "https://cdn.worldvectorlogo.com/logos/docker.svg" },
            ],


            toRotate: ["Web Developer", "Full-stack Engineer"],
            profile: "img/pp.jpg",
            period: 2000,
            nama: "Muhammad Aldi",
            loopNum: 0,
            isDeleting: false,
            currentRole: "",
        };
        },
        mounted() {
        this.tick();
        },
        methods: {
        tick() {
            let i = this.loopNum % this.toRotate.length;
            let fullTxt = this.toRotate[i];
            this.currentRole = this.isDeleting
            ? fullTxt.substring(0, this.currentRole.length - 1)
            : fullTxt.substring(0, this.currentRole.length + 1);
    
            let delta = 200 - Math.random() * 100;
            if (this.isDeleting) delta /= 2;
            if (!this.isDeleting && this.currentRole === fullTxt) {
                delta = this.period;
                this.isDeleting = true;
            } else if (this.isDeleting && this.currentRole === "") {
                this.isDeleting = false;
                this.loopNum++;
                delta = 500;
            }
            setTimeout(() => this.tick(), delta);
            },
        },
    };
</script>

<style scoped>
    main, #home {
        background-color: #16161a;
        margin: 0;
        padding: 0;
    }
    
    .fadein-left {
        opacity: 0;
        animation: fadeInLeft 0.5s ease-out forwards;
    }
    
    @keyframes fadeInLeft {
        0% {
        opacity: 0;
        transform: translateX(-100%);
        }
        100% {
        opacity: 1;
        transform: translateX(0);
        }
    }

    .fadeins-1 {
        animation-delay: 500ms;
    }

    .fadeins-2 {
        animation-delay: 800ms;
    }
    
    .pict {
        box-shadow: 0px 0px 73px -9px rgba(255, 219, 112, 0.44);
    }
    
    .fadein-up {
        opacity: 0;
        animation: fadeInUp 0.5s ease-out forwards;
        animation-delay: 500ms;
    }
    
    @keyframes fadeInUp {
        from {
        opacity: 0;
        transform: translate3d(0, 100%, 0);
        }
        to {
        opacity: 1;
        transform: translate3d(0, 0, 0);
        }
    }
    
    .fadein-right {
        opacity: 0;
        animation: fadeInRight 0.5s ease-out forwards;
        animation-delay: 500ms;
    }
    
    @keyframes fadeInRight {
        0% {
        opacity: 0;
        transform: translateX(100%);
        }
        100% {
        opacity: 1;
        transform: translateX(0);
        }
    }
    
    .custom-card {
        padding: 2rem 1rem;
        background-color: #16161a;
        border-radius: 10px;
        color: #fffffe;
        max-width: 100%;
        width: 100%;
    }
    
    .custom-header {
        text-align: left;
        margin-bottom: 1rem;
    }
    
    .custom-grid {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 1.5rem;
    }
    
    .custom-item {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        padding: 1rem;
        border: 1px solid #ff8906;
        border-radius: 8px;
        transition: background-color 0.3s ease;
    }
    
    .custom-item:hover {
        background-color: rgba(255, 137, 6, 0.1);
    }

    .custom-img {
        width: 40px;
        height: 40px;
        margin-bottom: 0.5rem;
    }
    
    .custom-img-container {
        width: 32px;
        height: 32px;
        overflow: hidden;
    }
    
    .custom-text {
        color: #fffffe;
        font-size: 0.875rem;
    }

    .page-container {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #16161a;
        min-height: 50vh;
    }

    .skills-tabs {
        display: flex;
        gap: 1rem;
        margin-bottom: 1.5rem;
    }

    .skills-tabs button {
        padding: 0.5rem 1rem;
        border: none;
        border-bottom: 2px solid transparent;
        background: none;
        color: #fffffe;
        cursor: pointer;
        font-size: 1rem;
        transition: all 0.3s;
    }

    .skills-tabs button.active {
        border-bottom: 2px solid #ff8906;
        color: #ff8906;
    }

    .skills-tabs button:hover {
        color: #ff8906;
        border-bottom: 2px solid #ff8906;
    }
</style>
