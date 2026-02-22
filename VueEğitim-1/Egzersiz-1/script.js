const app = Vue.createApp({
    data() {
        return {
            firstGoal: 'Çınar Özgürgil',
            secondGoal: '<h3>Css</h3>',
            website: 'https://plus.unsplash.com/premium_photo-1770246101715-d173eb120dbf?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        };
    },
    methods: { // Vue de fonksüyon yazmak istediğimiz zaman methods içerisine yazarız.
        age() {
            const age = 19;
            return age;
        },
    }
});


// Buradaki mount değeri Vue ile kontrol etmek istediğimiz değer ne ise onu yazarız içerisine
app.mount('#frontend');
