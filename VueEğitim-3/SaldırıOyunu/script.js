const app = Vue.createApp({
    data() {
        return {
            mehealty: 100,
            computerhealty: 100,
            total: 0
        }

    },
    watch: {},
    computed: {},
    methods: {
        attack() {
            var rand = Math.floor(Math.random() * 10);

            this.computerhealty -= rand + 10;
            this.mehealty -= rand;

            this.total += 1;
        },
        superattack() {
            var rand = Math.floor(Math.random() * 10);

            this.computerhealty -= rand + 25;

            this.total = 0;

        },
        healty() {
            var rand = Math.floor(Math.random() * 10);
            var healtyrand2 = Math.floor(Math.random() * 10);

            this.mehealty -= rand;
            this.mehealty += healtyrand2;

            this.total += 1;
        }
    }
});

app.mount('#frontend');