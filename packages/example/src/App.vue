<script setup lang="ts">
import { ref } from '@vue/runtime-core';

const someBoolean = ref(false)
const counter = ref(0)

setInterval(() => counter.value++, 1000)
</script>

<template>
  <application-window :title="`This app is running for ${counter} seconds`">
    <box>
      <button @clicked="someBoolean = true">Set as true</button>
      Current state: {{ someBoolean }}
      <button v-if="someBoolean" @clicked="someBoolean = false">Set as false</button>
    </box>
  </application-window>
</template>
