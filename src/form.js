import Vue from 'vue'
import VueForm from 'vue-form'

Vue.use(VueForm, options)

var options = {
        validators: {
            'sin-espacios' : function(value) {
                return !value.includes(' ')
            }
        }
    }
