<script lang="ts" setup>
import { Gtk } from '@gnome-vue/core'
import { ref } from '@vue/runtime-core'

const someBoolean = ref(false)
const counter = ref(0)
const button = ref<Gtk.Button | null>(null)

setInterval(() => {
  counter.value++
}, 1000)
</script>

<template>
  <adw-window :title="`This app is running for ${counter} seconds`">
    <box>
      <gtk-button
        ref="button"
        :cursor="someBoolean ? 'crosshair' : 'grab'"
        :class="{ 'true-button': someBoolean }"
        @clicked="someBoolean = true"
      >
        Set as true
      </gtk-button>
      Current state: {{ someBoolean }}
      <gtk-button :visible="someBoolean" class="false-button" @clicked="someBoolean = false">Set as false</gtk-button>
    </box>
  </adw-window>
</template>

<style scoped>
.true-button {
  color: blue;
}

.false-button {
  color: red;
}
</style>
