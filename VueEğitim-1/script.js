const app = Vue.createApp({
    data() {
        return {
            counter: 0,
            name: '',
            fullname: '',
            lastName: ''
        };
    },
    /* 
                                                            computed	                                   watch
        Ne döndürür?	                            Bir değer döndürür	                    Bir değer döndürmez
        Ne zaman kullanılır?	                    Bir değeri hesaplamak için	            Bir değer değişince bir işlem yapmak için
        Örnek kullanım	                            Ad + Soyadı birleştirmek	            API isteği atmak, log basmak, sayacı sıfırlamak 
    */
    // watch içerisine değiştiğinde işlem yapmak istediğimiz değerleri name() şeklinde yazarız.
    watch: {
        // Burada yazdığımız value değeri yukarıdaki data içerisindeki lastName değerini this.lastName şeklinde çağırmamak içindir.
        counter(value) {
            if(value > 20) {
                this.counter = 0;
            }
        }
    },
    computed: {
        // Copmuted'ın mantığını içerisinde yazılan koşullar , html içerisinde herhangi bir değer içerisinde buradaki 
        // fullNameComputed değeri yazıldığı zaman o html içeriği içerisindeki değer değişikliğe uğradığında bu bölüm çalışmaz, sadece bu bölüm içerisinde kullandığım değişkenlerden yani this.name değiştiği zaman burası çalışır
        fullNameComputed() {
            console.log("Execute edildi");
            if (this.name == '' || this.lastName == '') {
                return '';
            }
            return this.name + ' ' + this.lastName;
        }
    },
    methods: { // Vue de fonksüyon yazmak istediğimiz zaman methods içerisine yazarız.
        fullname() {
            if (this.name == '') {
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
