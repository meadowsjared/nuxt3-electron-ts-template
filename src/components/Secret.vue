<template>
  <div>
    <h1>This is secret info {{ props.q }}</h1>
    <city-row v-for="city in cities" :key="city.id" :city="city" />
    <button @click="addCity('stuff')">add stuff</button>
  </div>
</template>

<script setup lang="ts">
import { onValue, set } from 'firebase/database';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { City } from '../domain/City';
import { auth, citiesRef } from '../plugins/firebase';

const props = defineProps<{
  q?: string;
}>();

const router = useRouter();

const cities = ref([] as City[]);

if (auth.currentUser === null) {
  router.push({ path: '/login', query: { q: 'test' } });
} else {
  onValue(citiesRef, snapshot => {
    const data = snapshot.val() as City[];
    cities.value = data.filter(value => value !== undefined);
    console.log('cities.value', cities.value);
  });

  console.log('Secret page loaded', props.q);
}

function addCity(cityName: string) {
  set(citiesRef, [...cities.value, cityName])
    .then(() => {
      // Data saved successfully!
      console.log('Data saved successfully!');
    })
    .catch(error => {
      // The write failed...
      console.warn('error', error);
    });
}
</script>
