<template>
  <div class="d-flex height-default background-default">
    <div class="d-flex container flex-column">
      <menu-navegacao />

      <div class="d-flex align-items-center justify-content-center bg-white pt-4 pb-4 rounded-top rounded-bottom">
        <slot name='body' />
      </div>
    </div>
  </div>  
</template>
<script>
  import menuNavegacao from '@/components/menu-navegacao'
  export default {
    name: 'defaultSlot',
    components: {
      menuNavegacao
    }
  }
</script>

<style scoped>
  .height-default {
    height: 100vh;
  }
  .background-default {
    background-color: #dce0e5a8; 
  }
</style>