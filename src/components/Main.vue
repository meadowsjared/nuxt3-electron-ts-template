<script setup lang="ts">
import InlineSvg from "vue-inline-svg";
import addIcon from '../assets/images/streamlinehq-add-thick-interface-essential-50.svg';
import subtractIcon from '../assets/images/streamlinehq-subtract-thick-interface-essential-50.svg';
import { useCounterStore } from '../store/counter';

const counterStore = useCounterStore();
</script>

<template>
  <div class="flex items-center justify-center gap-2">
    count is: {{ counterStore.count }}
    <button type="button" @click="counterStore.add()" class="bg-arubaGreen rounded px-3 py-1 my-4 text-white active:bg-greenSeduction active:text-neutralLight-400">
      <inline-svg :src="addIcon" class="w-6 h-6" />
    </button>
    <button type="button" @click="counterStore.subtract()" class="bg-arubaGreen rounded px-3 py-1 my-4 text-white active:bg-greenSeduction active:text-neutralLight-400">
      <inline-svg :src="subtractIcon" class="w-6 h-6" />
    </button>
  </div>

  <router-view />
</template>
