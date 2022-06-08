<template>

  <section class="src-componentes-formulario-av">
    <div class="jumbotron">
      <h2><i>Ingreso de información</i></h2>
      <hr>
      <br>

      <vue-form :state="formstate" @submit.prevent="enviar()">
        
        <!-- nombre -->
        <validate tag="div">
          <label for="nombre">Nombre</label>
          <input type="text" id="nombre" v-model="formData.nombre" required :minlength="minLength" :maxlength="maxLength" sin-espacios name="nombre" autocomplete="off" class="form-control" />
    
          <field-messages name="nombre" show="$dirty">
            <div slot="required" class="alert alert-danger mt-1">Este campo es obligatorio</div>
            <div slot="minlength" class="alert alert-danger mt-1">
              Este campo requiere como mínimo {{minLength}} caracteres.
            </div>
            <div slot="maxlength" class="alert alert-danger mt-1">
              Este campo admite como máximo {{maxLength}} caracteres.
            </div>
            <div slot="sin-espacios" class="alert alert-danger mt-1">
              Este campo no admite espacios intermedios.
            </div>
          </field-messages>
        </validate>
        <br>

        
        <!-- apellido -->
        <validate tag="div">
          <label for="apellido">Apellido</label>
          <input type="text" id="apellido" v-model="formData.apellido" required :minlength="minLength" :maxlength="maxLength" sin-espacios name="apellido" autocomplete="off" class="form-control" />
    
          <field-messages name="apellido" show="$dirty">
            <div slot="required" class="alert alert-danger mt-1">Este campo es obligatorio</div>
            <div slot="minlength" class="alert alert-danger mt-1">
              Este campo requiere como mínimo {{minLength}} caracteres.
            </div>
            <div slot="maxlength" class="alert alert-danger mt-1">
              Este campo admite como máximo {{maxLength}} caracteres.
            </div>
            <div slot="sin-espacios" class="alert alert-danger mt-1">
              Este campo no admite espacios intermedios.
            </div>
          </field-messages>
        </validate>
        <br>

        
        <!-- nota -->
        <validate tag="div">
          <label for="nota">Nota</label>
          <input type="number" id="nota" v-model.number="formData.nota" required :min="minNota" :max="maxNota" name="nota" autocomplete="off" class="form-control" />
    
          <field-messages name="pago" show="$dirty">
            <div slot="required" class="alert alert-danger mt-1">Este campo es obligatorio</div>
          </field-messages>
        </validate>
        <br>

        <!-- botón -->
        <button class="btn btn-success my-3" :disabled="formstate.$invalid" type="submit">Enviar</button>
      </vue-form>
      <br>
      <hr>

      <!-- tabla -->
      <h2><i>Detalle de alumnos</i></h2>
      <br>

      <div v-if="alumnos.length" class="table-responsive">
        <table class="table">
          <tr>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Nota</th>
          </tr>
          <tr v-for="(alumno,index) in alumnos" :key="index" :style="{color: analizarNota(nota)}">
            <td>{{ alumno.nombre }}</td>
            <td>{{ alumno.apellido }}</td>
            <td>{{ alumno.nota }}</td>
          </tr>
          <td>{{ }}</td>
          <tr>
            <th></th>
          </tr>
        </table>
      </div>
      <h3 v-else class="alert alert-info">No hay alumnos registrados</h3>
    </div>
  </section>





</template>

<script lang="js">

  export default  {
    name: 'src-componentes-formulario',
    props: [],
    mounted () {

    },
    data () {
      return {
        formState : {},
        formData : this.getInicialData(),
        alumnos: [],
        minLength : 3,
        maxLength : 15,
        minNota : 0,
        maxNota : 10,
      }
    },
    methods: {
      getInitialData() {
        return {
          nombre : null,
          apellido: null,
          nota: null,
        }
      },
      enviar() {
        let alumno = {...this.formData}

        console.log(alumno)
        this.alumnos.push(alumno)

        this.formData = this.getInitialData()
        this.formstate._reset()
      },
      AnalizarNota(nota) {
        let color
        if(nota >= 4 && nota <= 6 ) {color = '#00F'} 
        else if (nota >= 7 && nota <= 10 ) {color = '#F00'} 
        else color = "#cc0000"
        return color
    },
    computed: {

    }
  }
}

</script>

<style scoped lang="css">
  .src-componentes-formulario {

  }
</style>
