<template>
  <div>
    <h1>This is secret info</h1>
    <city-row v-for="(city, index) in cityStore.cities" :key="city.id" :city="city" :index="index" />
    <button @click="addCity('stuff')">add stuff</button>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import { auth } from '../plugins/firebase';
import { useCityStore } from '../store/city';

const router = useRouter();
const cityStore = useCityStore();

if (auth.currentUser === null) {
  router.push({ path: '/login', query: { q: 'test' } });
} else {
  cityStore.loadCities();
  console.log('Secret page loaded');
}

function addCity(cityName: string) {
  cityStore.addCity(cityName);
}
</script>
