<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary shadow-sm">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          Bonsai
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link :class="{ 'nav-link': true, active: $route.name === 'home'}" to="/">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link :class="{ 'nav-link': true, active: $route.name === 'cart'}" to="/cart">Cart</router-link>
            </li>
            <li class="nav-item">
              <router-link :class="{ 'nav-link': true, active: $route.name === 'about'}" to="/about">About</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <router-view/>
</template>

<script>
export default {
    name: 'NavBarComponent',
}
</script>

<style>

</style>