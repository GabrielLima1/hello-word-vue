<template>
  <defaultSlot>
    <template v-slot:body>
      <div class="d-flex items-align-center justify-content-center">
        <h4> Informe os dados abaixo:</h4>
        <form @submit.prevent="submit">
          <label>E-mail:</label>
          <div v-if="v$.user.email.$error" />
          <input-text :value="user.email" />
          <input type="text" class="form-control" v-model="user.email">
        </form>
      </div>
    </template>
  </defaultSlot>
</template>

<script>
  import defaultSlot from '@/components/slots/default'
  import useVuelidate from '@vuelidate/core'
  import { required, email } from '@vuelidate/validators'
  import inputText from '@/components/input-text'
 
  export default {
    setup () {
      return { v$: useVuelidate() }
    },
    components: {
      defaultSlot,
      inputText
    },
    validations () {
      return {
        user: {
          name: { required },
          email: { required, email },
        }
      }
    },
    data () {
      return {
        user: {
          email: 'email@email.com',
          password: ''
        }
      }
    },
    methods: {
      submit () {
        this.v$.$touch()
        console.log(this.v$)
        alert('oi')
      }
    }
  }
</script>
