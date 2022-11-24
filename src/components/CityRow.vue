<template>
  <div class="flex justify-center gap-4">
    <div>{{ city.id }}</div>
    <input v-model="city.name" />
  </div>
</template>

<script setup lang="ts">
import { City } from '../domain/City';

defineProps<{
  city: City;
}>();
</script>
