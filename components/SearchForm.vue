<script setup lang="ts">
import { ref } from 'vue'
import { useAsyncData } from '#app'

const search = ref('')
const error = ref(false)
const errorMessage = ref('')

const handleSubmit = async () => {
  if (search.value.trim() === '') {
    error.value = true
    errorMessage.value = 'Please enter a username'
    return
  }

  const { data, error: fetchError } = await useAsyncData(() =>
    $fetch(`https://api.github.com/users/${search.value}`)
  )

  if (fetchError.value) {
    error.value = true
    errorMessage.value = 'Failed to fetch user data'
    return
  }

  console.log(data.value)
  error.value = false
  errorMessage.value = ''
}
</script>

<template>
  <section id="form">
    <form @submit.prevent="handleSubmit" class="form-container">
      <img
        src="/images/icon-search.svg"
        width="24"
        height="24"
        alt="search icon"
      />
      <label class="sr-only" for="username">Search GitHub username</label>
      <input
        v-model="search"
        class="input"
        type="text"
        id="username"
        placeholder="Search GitHub username..."
      />
      <p v-if="false" class="text-error">No results</p>
      <button class="btn" value="Search">Search</button>
    </form>
    <p class="text-error" v-if="error">{{ errorMessage }}</p>
  </section>
</template>

<style scoped>
.form-container {
  margin-bottom: 24px;
  display: flex;
  align-items: center;
  gap: 24px;
  border-radius: 15px;
  padding: 10px 10px 10px 32px;
  background-color: var(--bg-container);

  @media (max-width: 40rem) {
    margin-bottom: 16px;
    padding: 7px 7px 7px 16px;
  }
}
.input {
  width: 100%;
  padding-block: 10px;
  flex: 1;
  border: none;
  background-color: transparent;
  font-size: 18px;
  caret-color: var(--clr-vivid-blue);
  caret-shape: underscore;

  &:focus {
    outline: none;
  }

  @media (max-width: 40rem) {
    font-size: 1rem;
  }
}

.input::placeholder {
  color: var(--clr-pure-white);
  font-size: 1.125rem;
}

@media (max-width: 40rem) {
  .input::placeholder {
    font-size: 1rem;
  }
}

.btn {
  border: none;
  border-radius: 10px;
  padding: 12px 24px;
  background-color: var(--clr-vivid-blue);
  font-weight: bold;
  line-height: 1.65;
  cursor: pointer;
  transition: opacity 0.2s;
  /* add pressed button ffect */

  &:hover {
    opacity: 0.9;
  }

  &:active {
    transform: translate(1px, 1px);
  }

  @media (max-width: 40rem) {
    font-size: 0.875rem;
    padding: 12px 16px;
  }
}
</style>
