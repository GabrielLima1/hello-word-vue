<template>
  <div class="d-flex align-items-center justify-content-between mb-3 bg-dark rounded-top rounded-bottom p-2">
    <div class="d-flex">
      <router-link tag="a" class="nav-link text-white" :to="{ name: 'home.index' }" exact>
        <span>Home</span>
      </router-link>

      <router-link tag="a" class="nav-link text-white" :to="{ name: 'home.index' }" exact>
        <span>Home</span>
      </router-link>
    </div>

    <div class="d-flex">
      <router-link tag="a" class="nav-link text-white" :to="{ name: 'auth.login' }" exact>
        <span>Fazer Login</span>
      </router-link>
    </div>
  </div>
</template>