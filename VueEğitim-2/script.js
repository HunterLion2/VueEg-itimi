const app = Vue.createApp({
    data() {
        return {
            firstBox: false,
            secondBox: false,
            thirdBox: false
        }

    },
    watch: {},
    computed: {},
    methods: {
        choosebox(number) {
            if(number === '1') {
                this.firstBox = true
            } else if(number === '2') {
                this.secondBox = true
            } else if(number === '3') {
                this.thirdBox = true
            }
        }
    }
});

app.mount('#frontend');