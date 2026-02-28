const app = Vue.createApp({
    data() {
        return {
            textvalue: [],
            text: "",
            views: 1
        }

    },
    watch: {},
    computed: {},
    methods: {
        added() {
            this.textvalue.push(this.text);
            this.text = ''
        },
        view() {
            if(this.views == 0) {
               this.views = 1; 
            } else {
               this.views = 0; 
            }
        }
    }
});

app.mount('#frontend');