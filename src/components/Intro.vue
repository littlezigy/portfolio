<template>
<div>
    <div id = 'intro-header'>
        <section id = 'intro'>
            <p id = 'hi'>Hi</p>
            <p id = 'name'>I'm Adesuwa</p>
            <p id = 'title'>I am a Fullstack Developer</p>

            <a id = 'contact' href = 'contact' class = button>Contact</a>
        </section>

        <img id = 'me' src = "https://res.cloudinary.com/ginani/image/upload/v1582489860/AdesuwaPortfolio/IMG_20191128_093327_uhefwv.jpg"/>
    </div>

    <main class = 'page'>
    <p>I am a fullstack web developer and if I'm not staring into a console, I can be found implementing a UI design to spec</p>
    </main>

    <section id = 'social' class = 'page'>
        <a href = 'https://github.com/littlezigy'>
            <img src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/github.svg" alt = 'Github'/>
        </a>
        <a href = 'https://linkedin.com/in/adesuwa-dawodu'>
            <img src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/linkedin.svg" alt = 'LinkedIn'/>
        </a>
        <a href = 'https://twitter.com/Zigyzoe'>
            <img src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/twitter.svg" alt = 'Twitter'/>
        </a>
    </section>

    <section id = 'testimonials'>
        <p>Testimonials</p>
        <div class = 'main'>
        </div>
    </section>
</div>
</template>

<script>
export default {
    data() {
        return {
            options: {
                threshold: 0.5
            }
        }
    },
    mounted: function() {
        this.loadIntroSection();
    },
    methods: {
        docReady: function(callback) {
            if(document.readyState === ' complete' || document.readyState === 'interactive') {
                console.log("Document is ready!");
                setTimeout(callback, 1);
            } else {
                document.addEventListener("DOMContentLoaded", callback);
            }
        },
        recursiveDelay: function(cb, executionNum, timeoutInSeconds) {
            if(executionNum > 0) {
                cb();

                setTimeout(()=> {
                    this.recursiveDelay(cb, executionNum+1, timeoutInSeconds);
                }, 1000* timeoutInSeconds);
            }
        },
        setDelay: function(element, timeout = 1) {
            setTimeout(()=> {
                element.classList.add('fadein');
            }, 1000*timeout);
        },
        loadIntroSection: function(/*loaderFn, executionNum, timeoutInSeconds*/) {
            //load all classes with fadein
            let paragraphs = document.querySelector("section#intro").children;
            console.log("paragraphs", paragraphs);
            let observer = new IntersectionObserver((entries, observer)=>{
                entries.forEach((entry, index) => {
                    this.setDelay(entry.target, 2*index + 1);
                    observer.unobserve(entry.target);
                });
            }, this.options);

            for(let i = 0; i<paragraphs.length; i++) {
                observer.observe(paragraphs[i]);
            }
            observer.observe(document.querySelector('a#contact'));
        },
        setClassFadein: function(element) {
            element.classList.add('fadein');
        }
    }
}
</script>

<style>
.fadein {
    opacity: 1 !important;
}
section#intro {
    min-height: 75vh;
    padding: 0 20%;
}

section#intro > *{
    transition: opacity 1s ease-in;
}
p#hi {
    font-size: 2em;
}
p#name {
    font-size: 3em;
}
p#title {
    font-size: 3em;
}
p#title, p#name, p#hi, a#contact {
    opacity: 0;
}
section#social {
    display: flex;
    justify-content: space-evenly;
}
#social img {
    width: 80px;
    height: 80px;
}
img#me {
    max-width: 100%;
}

section#testimonials {
    display: none;
}

@media only screen and (min-width: 1000px) {
    img#me, section#intro {
        display: inline-block;
    }
    section#intro {
        padding: 0;
        color: #b92759;
    }

    div#intro-header {
        display: grid;
        grid-template-columns: 1fr 1fr;
        padding-left: 10%;
    }
}
</style>


