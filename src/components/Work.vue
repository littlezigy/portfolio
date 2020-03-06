<template>
<div id = 'work'>
    <div id = 'libraries'>
        <h3>Libraries</h3>
        <div>
            <a v-for = '(project, index) in libraries' :href = project.link :key=index>
                <p class = 'title'>{{ project.title }}</p>
                <p class = 'subtitle'>{{ project.subtitle }}</p>
                <p class = 'small monospace'>{{ project.other }}</p>
            </a>
        </div>
        <a id = 'see-more'>See more</a>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            libraries: [{
                            title: 'Node.js SQL Migrate',
                            subtitle: 'Nodejs library for migration using SQL scripts',
                            other: 'npm i node-sql-migrate',
                            link: 'https://github.com/littlezigy/node-sql-migrate'
                        }, {
                            title: 'postgresorm',
                            subtitle: 'A very basic PostgreSQL ORM.',
                            other: 'npm i postgresorm',
                            link: 'https://github.com/littlezigy/postgresorm'
                        }, {
                            title: 'Response Helper',
                            subtitle: 'responsehelper',
                            other: 'npm i @littlezigy/responsehelper',
                            link: 'https://github.com/littlezigy/responsehelper'
                       }]
        }
    }
}
</script>
<style scoped>
p {
    margin: 0 0 1em 0;
}
div#work {
    padding: 3rem 40px;
    width: 100%;
}
div#libraries {
    display: flex;
    flex-direction: column;
    align-items: center;
}
div#libraries > div {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(290px, 400px));
    grid-gap: 30px;
    width: 100%;
}
div#libraries > div > * {
    border: 4px solid pink;
    border-radius: 8px;
    padding: 1em 2em 0 2em;
    color: inherit;
}
#see-more {
    align-self: flex-end;
    display: none;
}
h3 {
    text-align: center;
}
h3:before {
    content: '< ';
}
h3:after {
    content: ' />';
}

p.title {
    text-align: center;
}
</style>
