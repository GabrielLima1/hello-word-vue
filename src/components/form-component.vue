<template>
  <div class="d-flex flex-column">
    <show-messages title="Verifique os seguintes Erros!" icon="icon-close" :showClose="false" classType="danger" :messages="errors" />

    <form @submit.prevent="submit">
      <span class="d-flex justify-content-center">
        <h3> {{ title }} </h3>
      </span>
      <template v-for="(field, index) in fields" :key="index">
        <div class="d-flex align-items-center">
          <label class="w-40 text-nowrap" v-if="field.label">{{ field.label }}</label>
          <input-text class="mb-2" @input="setValue($event, field)" :placeholder="field.placeholder" />
        </div>
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
          this.resetErrors()
          this.fields.map((field) => {
            if (field.validations.includes('required')) {
              this.isBlank(field)
            }
          })

          return this.errors.size === 0
        }
      },
      isBlank (field) {
        let value = this.obj[field.name]

        if (value === undefined || value.trim() === '') {
          this.setError(field, 'é obrigatório')
        }
      },
      setError (field, message) {
        let label = this.getLabel(field)
        this.errors.add(`O campo <b>${label}</b> ${message}`)
      },
      getLabel (field) {
        let { label, name } = field
        return label !== undefined ? label : name
      },
      resetErrors () {
        this.errors.clear()
      }
    },
    data () {
      return {
        obj: {},
        errors: new Set()
      }
    }
  }
</script>
<style scoped>
  .w-40 {
    width: 40% !important;
  }
</style>