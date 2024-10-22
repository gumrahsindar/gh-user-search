<script setup lang="ts">
import { type User } from './lib/types'

const searchTerm = ref('')
const error = ref(false)
const isLoading = ref(false)
const errorMessage = ref<string | null>('')
const user = ref<User | null>(null)

// fetch initial data on mount
onMounted(() => {
  searchTerm.value = 'octocat'
  handleSubmit()
})

// fetch user data
const handleSubmit = async () => {
  if (!searchTerm.value) return

  isLoading.value = true
  error.value = false
  errorMessage.value = ''

  try {
    const data = await $fetch<User>(
      `https://api.github.com/users/${searchTerm.value}`
    )
    user.value = data
    searchTerm.value = ''
  } catch (err) {
    error.value = true
    errorMessage.value = 'No results'
    console.error(err)
  } finally {
    isLoading.value = false
  }
}
</script>

<template>
  <NuxtLayout>
    <template #header>
      <Logo />
      <ThemeSwitch />
    </template>
    <template #main>
      <SearchForm
        v-model="searchTerm"
        :onSubmit="handleSubmit"
        :isLoading="isLoading"
        :errorMessage="errorMessage"
      />
      <Results :user :isLoading />
    </template>
  </NuxtLayout>
</template>

<style>
#__nuxt {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 640px) {
    align-items: flex-start;
  }
}
</style>
