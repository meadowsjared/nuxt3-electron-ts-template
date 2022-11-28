<script setup lang="ts">
import { ref } from 'vue';
import { storeToRefs } from 'pinia';
import { useCityStore } from '../store/city';

const { count } = storeToRefs(useCityStore());
</script>

<template>
  <button type="button" @click="count++" class="bg-lunarRock rounded px-3 my-4">count is: {{ count }}</button>
  <router-view />
</template>
