<template>
  <div class="e-nuxt-container flex flex-col justify-center gap-12">
    <h1 class="title text-3xl font-semibold text-arubaGreen pt-5 flex justify-center">Electron Test App</h1>
    <div class="flex justify-center gap-20">
      <img class="w-56 h-56" src="../assets/images/electron.png" alt="electron icon" />
      <div class="e-nuxt-system-info bg-gray-100 flex flex-col gap-5">
        <Header msg="test" />
        <Counter />
        <!-- 👇 used to tell nuxt where to place the child route -->
        <NuxtPage/>
      </div>
    </div>
    <div class="flex flex-col items-center justify-center">
      <div>
        Also built with:
        <div class="flex justify-center gap-8">
          <img src="../assets/images/nuxt.svg" alt="Nuxt3" title="Nuxt3" class="w-32 h-32">
          <img src="../assets/images/vue.png" alt="Vue" title="Vue" class="w-32 h-32">
          <img src="../assets/images/pinia.svg" alt="Pinia" title="Pinia" class="w-32 h-32">
          <img src="../assets/images/ts.png" alt="Typescript" title="Typescript" class="w-32 h-32">
          <img src="../assets/images/vite.svg" alt="Vite" title="Vite" class="w-32 h-32">
        </div>
      </div>
    </div>
    <div class="e-nuxt-links">
      <div class="e-nuxt-button" @click="openURL('https://github.com/michalzaq12/electron-nuxt')">Github</div>
      <div class="e-nuxt-button" @click="openURL('https://nuxtjs.org/guide')">Nuxt.js</div>
      <div class="e-nuxt-button" @click="openURL('https://electronjs.org/docs')">Electron.js</div>
    </div>
  </div>
</template>

<script setup lang="ts">

function openURL(url: string) {
  window.open(url)
}
</script>

<style>
.e-nuxt-container {
  min-height: calc(100vh - 50px);
  background: linear-gradient(to right, #ece9e6, #ffffff);
  font-family: Helvetica, sans-serif;
}

.e-nuxt-content {
  display: flex;
  justify-content: space-around;
  padding-top: 50px;
  align-items: flex-start;
  flex-wrap: wrap;
}

.e-nuxt-logo {
  width: 400px;
}

.e-nuxt-system-info {
  padding: 20px;
  border-top: 1px solid #397c6d;
  border-bottom: 1px solid #397c6d;
}

.e-nuxt-links {
  padding: 25px 0;
  display: flex;
  justify-content: center;
}

.e-nuxt-button {
  color: #364758;
  padding: 5px 20px;
  border: 1px solid #397c6d;
  margin: 0 20px;
  border-radius: 15px;
  font-size: 1rem;
}

.e-nuxt-button:hover {
  cursor: pointer;
  color: white;
  background-color: #397c6d;
}
</style>
