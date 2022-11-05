<template>
  <div>
    <div class="title">Information</div>
    <div class="items">
      <div class="item">
        <div class="name">Pinia:</div>
        <div class="value">
          {{ pinia }}
        </div>
      </div>
      <div class="item">
        <div class="name">Vue.js:</div>
        <div class="value">
          {{ vue }}
        </div>
      </div>
      <div class="item">
        <div class="name">Electron:</div>
        <div class="value">
          {{ electron }}
        </div>
      </div>
      <div class="item">
        <div class="name">Node:</div>
        <div class="value">
          {{ node }}
        </div>
      </div>
      <div class="item">
        <div class="name">Chrome:</div>
        <div class="value">
          {{ chrome }}
        </div>
      </div>
      <div class="item">
        <div class="name">Platform:</div>
        <div class="value">
          {{ platform }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const isApp = window && window.process && (window.process as NodeJS.Process & { type: string })?.type === 'renderer';

// const versions = process?.versions ?? {};
const chrome = isApp ? ref(process.versions.chrome) : ref('N/A');
const electron = isApp ? ref(process.versions.electron) : ref('N/A');
const node = isApp ? ref(process.versions.node) : ref('N/A');
const platform = isApp ? ref(require('os').platform()) : ref('N/A');
const vue = isApp ? ref(require('vue/package.json').version) : ref('N/A');
const pinia = isApp ? ref(require('pinia/package.json').version) : ref('N/A');
</script>

<style scoped>
.title {
  color: #364758;
  font-size: 1.5em;
  letter-spacing: 0.25px;
  margin-top: 10px;
}
.items {
  margin-top: 8px;
}
.item {
  display: flex;
  margin-bottom: 6px;
}
.item .name {
  color: #6a6a6a;
  margin-right: 6px;
}

.item .value {
  color: #364758;
  font-weight: bold;
}
</style>
