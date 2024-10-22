<script setup lang="ts"></script>

<template>
  <p class="not-available">
    <slot>Not Available</slot>
  </p>
</template>

<style scoped>
.not-available {
  opacity: 0.5;
  text-wrap: nowrap;
}
</style>
