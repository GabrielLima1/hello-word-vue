<template>
  <defaultSlot>
    <template v-slot:body>
      <div class="d-flex items-align-center justify-content-center bg-white w-100">
        <div class="d-flex">
          <form-component title="Cadastre-se" :fields="fields" />
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
          { name: 'name', label: 'Nome', placeholder: 'Seu nome', validations: ['required'] },
          { name: 'email', label: 'E-mail', placeholder: 'seu melhor email', validations: ['required'] },
          { name: 'password', label: 'Senha', placeholder: 'sua senha', validations: ['required'] },
          { name: 'confirm_password', label: 'Confirme sua senha', placeholder: 'só mais uma vez =)', validations: ['required'] }
        ]
      }
    }
  }
</script>
