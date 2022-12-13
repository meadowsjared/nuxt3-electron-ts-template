<template>
  <div>
    <div class="text-flintPurple text-2xl">Information</div>
    <div class="mt-2">
      <div class="flex mb-2">
        <div class="text-neutralDark-400 mr-2">Pinia:</div>
        <div class="font-bold text-neutralDark-500">
          {{ versions?.pinia ?? 'N/A' }}
        </div>
      </div>
      <div class="flex mb-2">
        <div class="text-neutralDark-400 mr-2">Vue.js:</div>
        <div class="font-bold text-neutralDark-500">
          {{ versions?.vue ?? 'N/A' }}
        </div>
      </div>
      <div class="flex mb-2">
        <div class="text-neutralDark-400 mr-2">Electron:</div>
        <div class="font-bold text-neutralDark-500">
          {{ versions?.electron ?? 'N/A' }}
        </div>
      </div>
      <div class="flex mb-2">
        <div class="text-neutralDark-400 mr-2">Node:</div>
        <div class="font-bold text-neutralDark-500">
          {{ versions?.node ?? 'N/A' }}
        </div>
      </div>
      <div class="flex mb-2">
        <div class="text-neutralDark-400 mr-2">Chrome:</div>
        <div class="font-bold text-neutralDark-500">
          {{ versions?.chrome ?? 'N/A' }}
        </div>
      </div>
      <div class="flex mb-2">
        <div class="text-neutralDark-400 mr-2">Platform:</div>
        <div class="font-bold text-neutralDark-500">
          {{ versions?.platform ?? 'N/A' }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';

interface Versions {
  chrome: string;
  electron: string;
  node: string;
  platform: string;
  vue: string;
  pinia: string;
}

const versions = ref<Versions | undefined>(undefined);

onMounted(() => {
  versions.value = (window as { electron?: { versions: Versions } }).electron?.versions;
})

</script>
