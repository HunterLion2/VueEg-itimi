const app = Vue.createApp({
    data() {
        return {
            counter: 0,
            name: ''
        };
    },
    methods: { // Vue de fonksüyon yazmak istediğimiz zaman methods içerisine yazarız.
        reset() {
            this.name = '';
        },
        login() {
            alert("Giriş Yapıldı");
        },
        setName(event) {
            this.name = event.target.value + ' ' + lastname; // Buradaki değer sayesinde event değerinden gelen değerin içerisindeki value değerine ulaşmış oluruz.
        },
        upper() {
            this.counter += 1;
        },
        downer() {
            this.counter -= 1;
        }
    }
});


// Buradaki mount değeri Vue ile kontrol etmek istediğimiz değer ne ise onu yazarız içerisine
app.mount('#frontend');
