<template>
  <div id="app">
    <nav>
    <a id = 'logo' href = '/'>Adesuwa</a>

    <div @click = 'togglemenu' id = 'burger'>
        <div></div>
    </div>
    <router-link to = '/resume'>Resume</router-link>
    <a class = 'navlinks' href = '#work'>Work</a>
    <a class = 'navlinks' href = '#stack'>About</a>
    <a class = 'navlinks' href = '#contactme'>Contact</a>
    </nav>

    <div id = 'menu-overlay'></div>

    <div id = 'page-app-container'>
        <router-view :key='$route.fullPath' />
    </div>

    <footer id = 'about'>
    &copy; 2020. Adesuwa Dawodu
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
        menutoggle: 0
    }
  },
  methods: {
    togglemenu: function() {
        console.log("menu", this.menutoggle);
        let navlinks = document.getElementsByClassName('navlinks');
        let overlay = document.getElementById('menu-overlay');
        if(this.menutoggle === 0) {
            overlay.classList.add('show');
            for(let i = 0; i<navlinks.length; i++) {
                navlinks[i].classList.add('show');
            }
            this.menutoggle = 1;
            document.querySelectorAll('div#burger, div#burger div').forEach(
                item=> item.classList.add('active')
            );
        } else {
            overlay.classList.remove('show');
            for(let i = 0; i<navlinks.length; i++) {
                navlinks[i].classList.remove('show');
            }
            this.menutoggle = 0;
            document.querySelectorAll('div#burger, div#burger div').forEach(
                item=> item.classList.remove('active')
            );
        }
    }
  }
}
</script>

<style>
body {
    min-height: 100vh;
    padding-bottom: 6em;
    position: relative;
    font-size: 1.4rem;
    color: #1f1e1e;
}
img {
    max-width: 100%;
}
p.page::before {
    content: "------";
}

a#logo {
    color: #009e7b;
}

div#page-app-container {
    margin-bottom: 3rem;
}
footer {
    margin-top: 3rem;
    height: 6em;
    background: #c879cb;
    color: white;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
}

.page {
    padding: 0 20%;
}

nav a#logo {
    display: block;
}

nav {
    display: grid;
    padding: 3rem 10% 0 10%;
    grid-auto-rows: 3em;
    grid-template-columns: 50% repeat(auto-fit, minmax(4em, 1fr));
    font-size: 1.5rem;
    text-align: right;
}


nav #logo {
    text-align: left;
}
div#menu-overlay {
    display: none;
}
@media only screen and (min-width: 731px) {
    nav div#burger {
        display: none;
    }
}
@media only screen and (max-width: 730px) {
    div#menu-overlay.show {
        display: block;
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background: #00937b;
        z-index: 1;
    }
    nav a {
        padding: 1rem 0;
    }

    nav a.navlinks {
        display: none;
        z-index: 2;
        color: white;
        text-align: center;
        font-size: 3em;
        border-bottom: 1px solid white;
    }

    nav a.navlinks.show {
        display: block;
        width: 100%;
    }

    nav {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }

    nav div#burger {
        width: 40px;
        z-index: 2;
        cursor: pointer;
    }
    
    nav div#burger:before, nav div#burger:after, nav div#burger div {
        background: rgb(7, 1, 1);
        border-radius: 3px;
        content : "";
        display: block;
        height: 5px;
        margin: 7px 0;
        transition: all .2s ease-in-out;
    }
    nav  div#burger.active:before {
        transform: translateY(12px) rotate(135deg);
    }

    nav div#burger.active:after {
        transform: translateY(-12px) rotate(-135deg);
    }

    nav div#burger div.active {
        transform: scale(0);
    }
}
</style>
