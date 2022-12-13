<template>
  <header class="main-header">
    <nav>
      <div>
        <NuxtLink to="/"> System info </NuxtLink>
      </div>
      <div>
        <NuxtLink to="home"> Home </NuxtLink>
      </div>
      <div>
        <NuxtLink to="about"> About </NuxtLink>
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
