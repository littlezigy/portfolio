<template>
<div id = 'profile'>
    <div class = 'devfestajah'>
        <div class = 'text'>
            <p class = 'title'>Tech Talk: DevFest Ajah</p>
            <p>Tech Talk: Building APIs with Node.js</p>
            <p>DevFest Ajah, Nov 2019</p>
            <a href = 'https://docs.google.com/presentation/d/1wp-R7zpLhANfGZOlAnTKEIT3xypi2s9WXD6zspB3_OI/edit?usp=sharing'>See Slides</a>
        </div>

        <img src = 'https://res.cloudinary.com/ginani/image/upload/v1582492096/AdesuwaPortfolio/IMG_20191116_093916_jffask.jpg'>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {

        }
    }
}
</script>

<style scoped>
@media only screen and (min-width: 700px) {
    div#profile > div > * {
        width: 50%;
    }
}

div#profile {
    margin: 8rem 0;
}

div#profile > div {
    display: flex;
    flex-wrap: wrap;
    overflow: hidden;
}

div#profile > div .text {
    padding: 6rem;
}

div#profile img {
    max-height: 80vh;
    object-fit: cover;
}

div#provile > div > * {
    flex: 0 0 50%;
}

div#profile .title {
    font-size: 4rem;
    font-weight: bold;
}

div.devfestajah{
    background: #62b3de;
}
</style>
