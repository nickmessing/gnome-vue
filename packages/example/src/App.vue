<script lang="ts" setup>
import { ref } from '@gnome-vue/core'

const counter = ref(0)
</script>

<template>
  <gtk-application-window title="My Window" iconName="application-x-executable">
    <gtk-box>
      <gtk-button @clicked="counter++">Increment</gtk-button>
      Counter is: {{ counter }}
    </gtk-box>
  </gtk-application-window>
</template>
