<template>
  <defaultSlot>
    <template v-slot:body>
      <div class="d-flex items-align-center justify-content-center bg-white w-100">
        <div class="d-flex">
          <form-component title="Cadastro" :fields="fields" />
        </div>
      </div>
    </template>
  </defaultSlot>
</template>

<script>
  import defaultSlot from '@/components/slots/default'
  import formComponent from '@/components/form-component'
 
  export default {
    components: {
      defaultSlot,
      formComponent
    },
    data () {
      return {
        fields: [
          { name: 'name', type: 'text', label: '', placeholder: 'Seu nome', validations: ['required'] },
          { name: 'email', type: 'text', label: '', placeholder: 'seu@email.com', validations: ['required'] },
          { name: 'password', label: '', placeholder: 'sua senha', validations: ['required'] }
        ],
        user: {
          email: 'email@email.com',
          password: ''
        }
      }
    },
    methods: {
      setEmail () {
        this.v$.$touch()
        console.log(this.v$)
        alert('oi')
      }
    }
  }
</script>
