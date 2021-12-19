<template>
  <defaultSlot>
    <template v-slot:body>
      <div class="d-flex items-align-center justify-content-center bg-white w-100">
        <div class="d-flex">
          <form-component title="Esqueci minha senha" :fields="fields" />
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
          { name: 'email', label: 'E-mail', placeholder: 'seu melhor e-mail', validations: ['required'] }
        ]
      }
    }
  }
</script>
