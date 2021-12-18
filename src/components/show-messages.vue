<template>
  <div v-if="this.hasItem()" :class="classMessage()" class="main-messages alert border d-flex align-items-center p-4" role="alert">
    <div class="d-flex icon-custom">
      <i :class="icon"></i>
    </div>
    <div class="d-flex text-body ml-4 flex-column">
      <strong class="title-messages" v-if="title">{{ title }}</strong>
      <span class="text-messages" v-for="(message, index) in this.messages" :key="index" v-html="message" />
    </div>
    <button v-if="showClose" type="button" class="close icon-close-custom" data-dismiss="alert" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
</template>
<script>
  export default {
    name: 'ShowMessages',
    props: {
      showClose: {
        type: Boolean,
        default: true
      },
      icon: {
        type: String,
        default: ''
      },
      title: {
        type: String,
        default: ''
      },
      messages: {
        type: Array,
        default: () => []
      },
      classType: {
        type: String,
        default: ''
      }
    },
    methods: {
      hasItem () {
        return this.messages.length > 0
      },
      classMessage () {
        return this.classType ? `alert-${this.classType} border-${this.classType}` : ''
      }
    }
  }
</script>

<style scoped>
  .icon-close-custom {
    position: absolute;
    top: 1rem;
    right: 1rem;
  }
  .icon-custom {
    color: #1d1d1b;
    font-size: 3rem;
  }
  .title-messages {
    color: #424040;
    font-size: 1.4em;
  }
  .text-messages {
    font-size: 1.2em;
  }
</style>
