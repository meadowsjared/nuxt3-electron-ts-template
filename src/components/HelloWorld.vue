<script setup lang="ts">
import { ref } from 'vue';
import { storeToRefs } from 'pinia';
import { useCounterStore } from '../store/counter';
defineProps<{ msg: string }>();

const { count } = storeToRefs(useCounterStore());
</script>

<template>
  <h1>{{ msg }}</h1>

  <p>
    Recommended IDE setup:
    <a href="https://code.visualstudio.com/" target="_blank">VS Code</a>
    +
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
  </p>

  <p>See <code class="py-0.5 px-1 text-[#304455] bg-gray-100 rounded">README.md</code> for more information.</p>

  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank"> Vite Docs </a>
    |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Docs</a>
  </p>

  <button type="button" @click="count++" class="bg-lunarRock rounded px-3">count is: {{ count }}</button>
  <p>
    Edit
    <code class="py-0.5 px-1 text-[#304455] bg-gray-100 rounded">components/HelloWorld.vue</code> to test hot module
    replacement.
  </p>
  <p class="m-5 p-5">
    <!-- use the router-link component for navigation. -->
    <!-- specify the link by passing the `to` prop. -->
    <!-- `<router-link>` will render an `<a>` tag with the correct `href` attribute -->
    <router-link to="/home" class="routerlink my-0 mx-2">Go to Home</router-link>
    <router-link to="/about" class="routerlink my-0 mx-2">Go to About</router-link>
  </p>
  <!-- route outlet -->
  <!-- component matched by the route will render here -->
  <router-view />
</template>
