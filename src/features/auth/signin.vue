<template>
  <defaultSlot>
    <template v-slot:body>
      <div class="d-flex items-align-center justify-content-center">
        <div class="d-flex flex-column">
          <form-component title="Login" :fields="fields" />
          <div class="d-flex flex-column mt-2">
            <div class="d-flex">
              <span class="d-flex align-items-center justify-content-center">Não tem conta?
                <router-link tag="a" class="m-0 p-1 nav-link" :to="{ name: 'auth.signup' }" exact>
                  Fazer Cadastro
                </router-link>
              </span>
            </div>

            <div class="d-flex">
              <span class="d-flex align-items-center justify-content-center">Esqueceu a senha?
                <router-link tag="a" class="m-0 p-1 nav-link" :to="{ name: 'auth.reset-password' }" exact>
                  Solicitar Nova
                </router-link>
              </span>
            </div>
          </div>
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
          { name: 'email', placeholder: 'seu@email.com', validations: ['required'] },
          { name: 'password', placeholder: 'sua senha', validations: ['required'] }
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
