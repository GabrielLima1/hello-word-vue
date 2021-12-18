<template>
  <defaultSlot>
    <template v-slot:body>
      <div class="d-flex items-align-center justify-content-center bg-white w-100">
        <div class="d-flex">
          <form-component title="Enviar email para" :fields="fields" />
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
          { name: 'email', type: 'text', placeholder: 'seu@email.com', validations: ['required'] }
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
