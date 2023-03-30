<template>
  <TimePicker
    :startOptions="startOptions"
    :endOptions="startOptions"
  ></TimePicker>
</template>

<script setup lang="ts">
import TimePicker from "../../components/TimePicker/index.vue";
const startOptions = {
  size: "large",
};
</script>

<style></style>
