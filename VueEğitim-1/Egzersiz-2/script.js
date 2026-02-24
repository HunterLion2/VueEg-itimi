const app = Vue.createApp({
    data() {
        return {
            number: 0
        };
    },
    watch: {},
    computed: {
        result(){
            if(this.number < 25) {
             return '25 ten küçük değer buldunuz.';   
            }
            else if(this.number = 25) {
             return this.number;  
            }
            else {
             return '25 ten büyük değer buldunuz.';   
            }
        }
    },
    methods: {
        add(num) {
            this.number = this.number + num
        },
        reduce(num) {
            this.number = this.number - num
        }
    }
});

app.mount('#frontend');