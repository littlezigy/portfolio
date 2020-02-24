<template>
<div>
    <div id = 'intro-header'>
        <section id = 'intro'>
            <p id = 'hi'>Hi</p>
            <p id = 'name'>I'm Adesuwa</p>
            <p id = 'title'>I am a Fullstack Developer</p>

            <a id = 'contact' href = '#contact' class = button>Contact</a>
        </section>

        <img id = 'me' src = "https://res.cloudinary.com/ginani/image/upload/v1582489860/AdesuwaPortfolio/IMG_20191128_093327_uhefwv.jpg" alt = 'Adesuwa Dawodu'/>
    </div>

    <main class = 'page'>
    </main>

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
    flex-wrap: wrap;
    margin-bottom: 5rem;
}
#social img {
    width: 80px;
    height: 80px;
}
img#me {
    margin-top: 5rem;
    max-width: 100%;
    transform: rotate(180deg);
    -moz-transform: rotate(180deg);
    -o-transform: rotate(180deg);
    -ms-transform: rotate(180deg);
    -webkit-transform: rotate(180deg);
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


