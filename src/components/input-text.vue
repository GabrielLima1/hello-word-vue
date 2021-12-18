<template>
  <input type="text" class="form-control" @input="handleInput">
</template>

<script>

  export default {
    name: 'input-text-component',
    props: ['label', 'value'],
    data () {
      return {
        content: this.value
      }
    },
    methods: {
      handleInput () {
        this.$emit('input', this.content)
      }
    }
  }
</script>

<style scoped>

</style>