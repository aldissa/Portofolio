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
                                <img alt="avatar" fetchpriority="high" decoding="async" data-nimg="1" style="
                                    width: 80%;
                                    max-width: 200%;
                                    border-radius: 50%;
                                    margin: 0 auto 20px;
                                    display: block;"
                                    class="rounded-circle pict" >
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="text-center text-md-left">
                                <h5 style="color: #fffffe"><b>Hello I`m</b></h5>
                                <h1 class="text-large" style="color: #ff8906; margin-bottom: 1rem">
                                    <span style="font-size: 4rem; font: bold">
                                        <b>{{ nama }}</b>
                                    </span>
                                </h1>
                                <div>
                                    <h1 class="typewrite text-xl font-semibold text-transparent bg-clip-text        bg-gradient-to-r from-amber-200 to-amber-600 text-white md:text-2xl fadein-up"
                                    ref="typewriter">
                                        <span class="wrap">
                                            <b>{{ txt }}</b>
                                        </span>
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>

    <!-- About -->
    <div style="background-color: #242629; padding: 15px; color: #fffffe; max-width: 100%">
        <article data-page="about">
            <header>
                <div style="
                    font-size: 1.25rem;
                    font-weight: bold;
                    color: white;
                    margin-bottom: 1rem;
                    animation: fadeInLeft 0.5s ease-out forwards;
                    ">
                    About Me &nbsp;
                    <div style="
                    height: 1px;
                    width: 96px;
                    background-color: #ff8906;
                    animation: zoom-in-left;" data-aos-duration="600"></div>
                </div>
            </header>
            <section style="
                font-size: 0.875rem;
                text-align: justify;
                animation: fadeInUp 0.5s ease-out forwards;
                ">
                <div style="width: 100%; font-size: 1rem;">
                    <p style="animation: fadein-left 0.5s forwards; padding: 20px;">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius, minus voluptates odit hic,
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
                        <h3 class="custom-title">
                            <div class="custom-title-line"></div>
                            Skills
                            <div style="
                                height: 1px;
                                width: 96px;
                                background-color: #ff8906;
                                animation: zoom-in-left 0.6s"
                                data-aos-duration="600"></div>
                        </h3>
                    </div>
                </header>
                <section>
                    <div></div>
                    <div v-show="activeTab === 1">
                        <div class="custom-grid">
                            <div v-for="item in tech" :key="item.id" class="custom-item">
                                <div class="custom-img-container">
                                    <img :src="item.imageUrl" alt="HTML" loading="lazy" class="custom-img">
                                </div>
                                <div class="custom-text">
                                    <div class="custom-tech">{{ item.name }}</div>
                                </div>
                            </div>
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
                tech: [
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
                ],
                toRotate: ["Backend Developer", "Frontend Developer",],
                period: 2000,
                txt: "as",
                nama: "Muhammad Aldi",
                loopNum: 0,
                isDeleting: false,
                isNavOpen: false,
                isScrolled: false,
                isMobileView: false,
            };
        },
        mounted() {
            this.$nextTick(() => {
                this.tick();
            });
            this.checkMobileView();
            window.addEventListener("resize", this.checkMobileView);
        },
        beforeDestroy() {
            window.removeEventListener("resize", this.checkMobileView);
        },
        methods: {
            tick() {
                let typewriter = this.$refs.typewriter;

                if (!typewriter) {
                    return;
                }

                let i = this.loopNum % this.toRotate.length;
                let fullTxt = this.toRotate[i];

                this.txt = this.isDeleting
                    ? fullTxt.substring(0, this.txt.length - 1)
                    : fullTxt.substring(0, this.txt.length + 1);
                typewriter.innerHTML = `<span class="wrap">${this.txt}</span>`;


                let that = this;
                let delta = 200 - Math.random() * 100;

                if (this.isDeleting) {
                    delta /= 2;
                }

                if (!this.isDeleting && this.txt === fullTxt) {
                    delta = this.period;
                    this.isDeleting = true;
                } else if (this.isDeleting && this.txt === "") {
                    this.isDeleting = false;
                    this.loopNum++;
                    delta = 500;
                }

                setTimeout(() => {
                    that.tick();
                }, delta);
            },
            
        }
    }
</script>

<style scoped>
    main,
    #home {
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
            transform: translateX(100%)
        }

        100% {
            opacity: 1;
            transform: translateX(0);
        }
    }

    .pict {
        box-shadow: 0px 0px 73px -9px rgba(255, 219, 112, 0.44);
        -webkit-box-shadow: 0px 0px 73px -9px rgba(255, 219, 112, 0.44);
        -moz-box-shadow: 0px 0px 73px -9px rgba(255, 219, 112, 0.44);
    }

    .fadein-up {
        opacity: 0;
        animation-name: fadeInUp;
        animation-duration: 0.5s;
        animation-fill-mode: forwards;
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

    @media (max-width: 767px) {
        .card-container {
            padding: 20px;
        }

    }
    
    .card-container {
        margin-top: 30px;
        margin-left: 150px;
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 30vh;
    }

    .card {
        background-color: #1e1e1f;
        box-shadow: 0 4px 8px black;
        transition: transform 0.2s;
        padding: 20px;
        border-radius: 10px;
        color: #fffffe;
        max-width: 1000px;
        width: 100%;
    }

    .custom-card {
        padding: 2rem 1.5rem;
        background-color: #16161a;
        border-radius: 10px;
        color: #fffffe;
        max-width: 1000px;
        width: 100%;
    }

    .custom-header{
        text-align: left;
        margin-bottom: 1.25rem;
    }

    .custom-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
        gap: 2rem;
    }

    .custom-item {
        display: flex;
        cursor: pointer;
        align-items: center;
        gap: 0.5rem;
        padding: 0.25rem 0.5rem;
        border: 1px solid #ff8906;
        border-radius: 5px;
        transition: background-color 0.3s ease;
    }

    .custom-item:hover {
        background-color: rgba(255, 137, 6, 0.1);
    }

    .custom-img-container {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 32px;
        height: 32px;
        overflow: hidden;
    }

    .custom-img {
        width: 100%;
        height: auto;
    }

    .custom-text {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
    }
</style>