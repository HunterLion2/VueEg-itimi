
<!-- Geliştirme Kodlarımızı bunun içerisinde yazarız. -->
<template>
    <h2>Öğrencilerim</h2>
    <!-- Burada kullandığımız key'in mantığı içerisine giriceğimiz değer olan student değeri benzersiz bir değerdir demek için gireriz. -->
    <ul v-for="student in students" :key="student.name">
      <li>{{ student.name }}</li>
    </ul>
</template>

<script>

export default {
  name: 'App',
  data(){
    return {
      students:[
        {
          name: 'Çınar Özgürgil',
          phone: '551 079 61 88'
        },{
          name: 'Hakan Özgürgil',
          phone: '551 079 61 88'
        }
      ]
    }
  }
}


</script>

