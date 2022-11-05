<template>
  <header class="main-header">
    <nav>
      <div>
        <router-link to="system" exact> System info </router-link>
      </div>
      <div>
        <router-link to="home" exact> Home </router-link>
      </div>
      <div>
        <router-link to="about" exact> About </router-link>
      </div>
      <div>
        <router-link to="login" exact> Login </router-link>
      </div>
      <div>
        <router-link to="secret" exact> Secret </router-link>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts"></script>

<style scoped>
.main-header {
  height: 50px;
  display: flex;
  background-color: #364758;
}

nav {
  width: 100%;
  display: flex;
  justify-content: center;
}

nav div {
  height: 100%;
  margin: 0 20px;
  display: flex;
  align-items: center;
}

a {
  font-family: Helvetica, sans-serif;
  color: white;
  font-size: 1rem;
  font-weight: 100;
  text-decoration: underline;
  text-transform: uppercase;
}

a:hover {
  opacity: 0.9;
}
</style>
