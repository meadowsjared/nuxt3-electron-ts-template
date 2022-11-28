<template>
  <div class="flex justify-center gap-4">
    <div>{{ index }}</div>
    <input v-model="city.name" @update:model-value="updatedCity" />
    <button @click="cityStore.deleteCity(props.city)" title="delete city">❌</button>
  </div>
</template>

<script setup lang="ts">
import { City } from '../domain/City';
import { useCityStore } from '../store/city';

const props = defineProps<{
  city: City;
  index: number;
}>();

const cityStore = useCityStore();

function updatedCity(newCityName: string) {
  const newCity: City = {
    ...props.city,
    name: newCityName,
  };

  cityStore.saveCity(newCity);
}
</script>
