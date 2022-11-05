<script setup lang="ts">
import { ref } from 'vue';
import { storeToRefs } from 'pinia';
import { useCounterStore } from '../store/counter';

const { count } = storeToRefs(useCounterStore());
</script>

<template>
  <button type="button" @click="count++" class="bg-lunarRock rounded px-3 my-4">count is: {{ count }}</button>
  <router-view />
</template>
