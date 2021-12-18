<template>
  <div class="d-flex align-items-center justify-content-between bg-dark rounded-top rounded-bottom p-2">
    <router-link tag="a" class="nav-link text-white" :to="{ name: 'home.index' }" exact>
      <span>Home</span>
    </router-link>

    <router-link tag="a" class="nav-link text-white" :to="{ name: 'auth.signin' }" exact>
      <span>Fazer Login</span>
    </router-link>
  </div>
</template>