<script setup lang="ts">
// add switch theme logic
const theme = ref('light')
const toggleTheme = () => {
  const html = document.documentElement
  if (html.classList.contains('dark')) {
    html.classList.remove('dark')
    html.classList.add('light')
    theme.value = 'light'
  } else {
    html.classList.remove('light')
    html.classList.add('dark')
    theme.value = 'dark'
  }
}

// check if the user prefers dark mode
const switchState = ref(false)

onMounted(() => {
  const prefersDarkScheme = window.matchMedia(
    '(prefers-color-scheme: dark)'
  ).matches
  switchState.value = prefersDarkScheme
})

watch(switchState, (newState) => {
  if (newState) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
})
</script>

<template>
  <div class="theme-switch">
    <button @click="toggleTheme" class="btn" aria-label="Toggle theme">
      <span>
        {{ theme === 'light' ? 'dark' : 'light' }}
      </span>
      <img
        :src="`/images/icon-${theme === 'light' ? 'moon' : 'sun'}.svg`"
        alt="sun icon"
        width="20"
        height="20"
      />
    </button>
  </div>
</template>

<style scoped>
.theme-switch {
  & .btn {
    display: flex;
    gap: 16px;
    align-items: center;
    border: none;
    background-color: transparent;
    cursor: pointer;
    transition: opacity 0.2s;

    &:hover {
      opacity: 0.8;
    }
  }

  & span {
    text-transform: uppercase;
    font-size: 13px;
    letter-spacing: 2.5px;
    color: var(--text-color);
    font-weight: bold;
  }
}
</style>
