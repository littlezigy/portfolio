<template>
<div class = 'page'>
    <main>
        <div>
            <p>Stack</p>
            <div id = 'stack'>
                <p>I work mainly with Node.js. Click each icon to learn how I work with each language / framework / technology</p>
                <div id = 'stack-list'>
                    <div v-for = '(item, index) in stack' :key = 'index'>
                        <p @click = 'showOverlay = true; item.show = true'> {{ item.name }}</p>
                        <div class = 'popup' v-if = 'item.show === true' :key = 'index' @click = 'closeall'>
                            <p>{{ item.name }}</p>
                            <p v-for = '(message, index) in item.content' :key = 'index'>{{ message }}</p>
                            <p class = 'closemessage'>Click anywhere to close</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
    <div id = 'overlay' @click = 'closeall' v-if = 'showOverlay === true'></div>
</div>
</template>

<script>
export default{
    data() {
        return {
            showOverlay: false,
            stack: [{
                name: 'Node.js',
                content: ['My favorite language. I love JavaScript, hence, I love Node.js'],
                show: false
              }, {
                name: "Vue.js",
                show: false,
                content: [
                            'My favorite thing about this framework is its documentation.',
                            'My go to for an SPA (Single Page Application).'
                ]
              }, {
                name: 'PHP',
                show: false,
                content: [
                    'I like to use PHP on my frontends for templating. My favorite combinations for a fullstack project are a Node.js backend and a PHP frontend.'
                ]
              }, {
                name: 'HTML',
                content: [
                    
                ],
                show: false
              }, {
                name: 'CSS',
                content: [
                    
                ],
                show: false
              }
            ]
        }
    },
    methods: {
        closeall: function() {
            console.log("Boomer");
            this.showOverlay = false;
            for(let i = 0; i< this.stack.length; i++) {
                this.stack[i].show = false;
            }
        }
    }
}
</script>

<style>
main {
    z-index: 1;
}
main>div{
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-template-rows: auto;
}
@media only screen and (max-width: 480px) {
    main>div {
        display: flex;
        flex-wrap: wrap;
    }
}
main>div>p:nth-child(odd) {
    font-size: 1.5em;
    font-weight: bold;
}
div#services{
    display: grid;
    grid-template-columns: 1fr 1fr;
}
div#stack > div {
    display: grid;
    grid-template-columns: repeat(auto-fill, 100px);
    grid-template-rows: auto;
}
div#stack-list > div {
    cursor: pointer;
}
.popup {
    background: white;
    border-radius: 1em;
    padding: 1em;
    color: black;
    transform: translate(-50%, -50%);
    z-index: 3;
    width: 50%;
    max-width: 20em;
    box-sizing: border-box;
    position: fixed;
    top: 50%;
    left: 50%;
}
p#about-filler {
    font-size: 1.5em;
}
div#overlay {
    width: 100vw;
    height: 100vh;
    position: fixed;
    background-color: rgba(0, 0, 0, 0.2);
    top: 0;
    left: 0;
    z-index: 2;
    backdrop-filter: blur(20px);
}
.closemessage {
    font-size: 0.8em;
    margin-top: 2em;
}
</style>


