<template>

  <section class="src-componentes-respuestas">
    
    <table class="table">
          <tr>
            <th>Número de pregunta</th>
            <th>Respuesta</th>
          </tr>
          <tr v-for="(respuesta,index) in preguntas" :key="index">
            <td>{{ respuesta.numero }}</td>
            <td>{{ respuesta.respuestas }}</td>
          </tr>
        </table>

  </section>

</template>

<script lang="js">

  export default  {
    name: 'src-componentes-respuestas',
    props: [],
    mounted () {

    },
    data () {
      return {
        preguntas : [
          { numero: 1, respuestas: ["C"]},
          { numero: 2, respuestas: ["C"]},
          { numero: 3, respuestas: ["B"]},
       ]
          


      }
    },
    methods: {

    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .src-componentes-respuestas {

  }

  table{
    background-color: aqua;
  }
</style>
