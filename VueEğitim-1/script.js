const app = Vue.createApp({
    data() {
        return {
            counter: 0,
            name: ''
        };
    },
    computed: {
        // Copmuted'ın mantığını içerisinde yazılan koşullar , html içerisinde herhangi bir değer içerisinde buradaki 
        // fullNameComputed değeri yazıldığı zaman o html içeriği içerisindeki değer değişikliğe uğradığında bu bölüm çalışmaz, sadece bu bölüm içerisinde kullandığım değişkenlerden yani this.name değiştiği zaman burası çalışır
        fullNameComputed() {
            console.log("Execute edildi");
            if (this.name = '') {
                return '';
            }
            return this.name + ' ' + 'Özgürgil';
        }
    },
    methods: { // Vue de fonksüyon yazmak istediğimiz zaman methods içerisine yazarız.
        fullname() {
            if (this.name = '') {
                return '';
            }
            return this.name + ' ' + 'Özgürgil';
        },
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
