<template>
  <input type="text" class="form-control" v-model="vModel">
</template>

<script>

  export default {
    name: 'input-text-component',
    props: {
      value: {
        type: String,
        default: ''
      }
    },
    mounted () {
      this.vModel = this.value
    },
    data () {
      return {
        vModel: '55'
      }
    },
    watch: {
      
    }
  }
</script>

<style scoped>

</style>