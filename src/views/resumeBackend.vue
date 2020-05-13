<template>
<fragment>
    <div id = 'actions'>
        <button @click = 'printResume'>Download Resume</button>
    </div>

    <div id = 'resumehtml' v-html = 'resumehtml'>   </div>

    <div id = 'actions' v-if = 'resumehtml'>
        <button @click = 'printResume'>Download Resume</button>
    </div>
</fragment>
</template>

<style scoped>
div#resumehtml {
    margin: 5rem;
    padding-top: 0rem !important;
    border: 5px solid grey;
}
div#actions:first-child {
    justify-content: flex-end;
    padding: 3rem;
    padding-bottom: 1rem;
}
div#actions {
    display: flex;
    justify-content: center;
}
button {
    padding: 2rem;
    background: #925d8f;
    border: none;
    border-radius: 0.5rem;
    font-weight: bold;
    -webkit-appearance: none;
    -moz-appearance: none;
    font-size: 1.5rem;
    color: white;
}
button:focus {
    outline-color: green;
}
button:active {
    background: #633060;
}
</style>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            resumehtml: null,
            downloadPDF: null
        }
    },
    methods: {
        printResume: function() {
            let pdf = new Uint8Array(this.downloadPDF.data);

            let file = new Blob([pdf], {type: 'application/pdf'});
            let url = window.URL.createObjectURL(file);

            let a = document.createElement('a');
            a.href = url;
            a.download = 'Adesuwa_Dawodu-Backend_Developer.pdf';
            a.target = "_blank";
            a.click();

            let win = window.open('', '_blank');
            win.location = url;
        }
    },
    mounted() {
        console.log('MOUNTED');

        console.log(process.env.VUE_APP_API);

        let url = process.env.VUE_APP_API;
        if(this.$route.params.type === 'fullstack') url += '/resume/fullstack';
        else url += '/resume'
        console.log('URL', url);

        axios.defaults.baseURL = process.env.VUE_APP_API;

        axios.interceptors.request.use( config => {
            console.log('CONFIG\n', config);
            return config;
        });

        return axios({url: url, baseURL: process.env.VUE_APP_API})
        .then(res=> {
            console.log('RES', res);
            this.resumehtml = res.data.html;
            this.downloadPDF = res.data.pdf;
        });
    }
}
</script>
