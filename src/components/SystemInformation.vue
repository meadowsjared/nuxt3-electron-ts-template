<template>
  <div>
    <div class="text-[#364758] text-2xl">Information</div>
    <div class="mt-2">
      <div class="item">
        <div class="name">Pinia:</div>
        <div class="value">
          {{ versions?.pinia ?? 'N/A' }}
        </div>
      </div>
      <div class="item">
        <div class="name">Vue.js:</div>
        <div class="value">
          {{ versions?.vue ?? 'N/A' }}
        </div>
      </div>
      <div class="item">
        <div class="name">Electron:</div>
        <div class="value">
          {{ versions?.electron ?? 'N/A' }}
        </div>
      </div>
      <div class="item">
        <div class="name">Node:</div>
        <div class="value">
          {{ versions?.node ?? 'N/A' }}
        </div>
      </div>
      <div class="item">
        <div class="name">Chrome:</div>
        <div class="value">
          {{ versions?.chrome ?? 'N/A' }}
        </div>
      </div>
      <div class="item">
        <div class="name">Platform:</div>
        <div class="value">
          {{ versions?.platform ?? 'N/A' }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

interface Versions {
  chrome: string;
  electron: string;
  node: string;
  platform: string;
  vue: string;
  pinia: string;
}

// const versions = process?.versions ?? {};
const versions = ref((window as Window & { electron?: { versions: Versions } }).electron?.versions);
</script>

<style scoped>
.item {
  display: flex;
  margin-bottom: 6px;
}
.name {
  color: #6a6a6a;
  margin-right: 6px;
}

.value {
  color: #364758;
  font-weight: bold;
}
</style>
