<script setup lang="ts">
import { useCounterStore } from '../store/counter';

const counterStore = useCounterStore();
</script>

<template>
  <button type="button" @click="counterStore.add()" class="bg-lunarRock rounded px-3 my-4">count is: {{ counterStore.count }}</button>
  <router-view />
</template>
