<template>
  <defaultSlot>

    <template v-slot:body>
      <h1>Bem Vindo</h1>
    </template>

  </defaultSlot>
</template>
<script>
  import defaultSlot from '@/components/slots/default'
  export default {
    components: {
      defaultSlot
    }
  }
</script>