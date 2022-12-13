<template>
  <div class="flex items-center justify-center gap-2">
    count is: {{ counterStore.count }}
    <button type="button" @click="counterStore.add()" class="bg-arubaGreen rounded px-3 py-1 my-4 text-white active:bg-greenSeduction active:text-neutralLight-400">
      <InlineSvg :src="addIcon" class="w-6 h-6" />
    </button>
    <button type="button" @click="counterStore.subtract()" class="bg-arubaGreen rounded px-3 py-1 my-4 text-white active:bg-greenSeduction active:text-neutralLight-400">
      <InlineSvg :src="subtractIcon" class="w-6 h-6" />
    </button>
  </div>
</template>

<script setup lang="ts">
import InlineSvg from "vue-inline-svg";
import { useCounterStore } from '../store/counter';
import addIcon from '../assets/images/streamlinehq-add-thick-interface-essential-50.svg';
import subtractIcon from '../assets/images/streamlinehq-subtract-thick-interface-essential-50.svg';

const counterStore = useCounterStore();
</script>
