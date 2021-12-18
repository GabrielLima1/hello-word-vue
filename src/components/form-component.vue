<template>
  <div class="d-flex flex-column">
    <show-messages title="Verifique os seguintes Erros!" icon="icon-close" :showClose="false" classType="danger" :messages="errors" />

    <form @submit.prevent="submit">
      <span class="d-flex justify-content-center">
        <h3> {{ title }} </h3>
      </span>
      <template v-for="(field, index) in fields" :key="index">
          <label class="mt-3" v-if="field.label">{{ field.label }}</label>
          <input-text class="mb-2" @input="setValue($event, field)" :placeholder="field.placeholder" />
      </template>
      <button type="submit" class="btn btn-primary px-4 py-2 mt-3 w-100"> {{ submitText }} </button>
    </form>
  </div>
</template>
<script>
  import inputText from '@/components/input-text'
  import ShowMessages from '@/components/show-messages'

  export default {
    props: {
      title: {
        type: String,
        default: ''
      },
      fields: {
        type: Array,
        required: true
      },
      submitText: {
        type: String,
        default: 'Enviar'
      }
    },
    components: {
      inputText,
      ShowMessages
    },
    methods: {
      submit () {
        this.resetErrors()
        if (this.isValid()) {
          this.$emit('submit', this.formObj)
        }
      },
      setValue (value, field) {
        if (value !== undefined) {
          this.obj[field.name] = value.target.value
        }
      },
      isValid () {
        if (this.fields.length !== 0) {
          this.fields.map((field) => {
            if (field.validations.includes('required')) {
              this.isBlank(field)
            }
          })

          return this.errors.length === 0
        }
      },
      isBlank (field) {
        let value = this.obj[field.name]
        // debugger
        if (value === undefined || value.trim() === '') {
          this.setError(field, 'é obrigatório')
        }
      },
      setError (field, message) {
        let { label, name } = field
        label = (label !== '' && label !== undefined) ? label : name
        this.errors.push(`O campo <b>${label}</b> ${message}`)
      },
      resetErrors () {
        this.errors = []
      }
    },
    data () {
      return {
        obj: {},
        errors: []
      }
    }
  }
</script>
