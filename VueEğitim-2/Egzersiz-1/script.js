const app = Vue.createApp({
    data() {
        return {
            color: ''
        }

    },
    watch: {},
    computed: {},
    methods: {
        choosebox(color) {
            if(color === 'red') {
                this.color = 'red'
            } else if(color === 'blue') {
                this.color = 'blue'
            } else if(color === 'green') {
                this.color = 'green'
            }
        }
    }
});

app.mount('#frontend');