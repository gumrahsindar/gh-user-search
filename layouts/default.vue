<script setup lang="ts"></script>

<template>
  <div class="layout">
    <header class="header">
      <slot name="header" />
    </header>
    <main>
      <slot name="main" />
    </main>
  </div>
</template>

<style scoped>
.layout {
  --max-width: 730px;
  --container-padding: 1.5rem;

  width: min(var(--max-width), 100% - var(--container-padding) * 2);
  margin-inline: auto;

  @media (max-width: 40rem) {
    padding-block: 32px 80px;
  }
}
.header {
  margin-bottom: 36px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
