<script setup lang="ts">
const model = defineModel()
defineProps<{
  onSubmit: (e: Event) => void
  isLoading: boolean
  errorMessage: string | null
}>()
</script>

<template>
  <section id="form">
    <form @submit.prevent="onSubmit" class="form-container">
      <img
        class="search-icon"
        src="/images/icon-search.svg"
        width="24"
        height="24"
        alt="search icon"
      />
      <label class="sr-only" for="username">Search GitHub username</label>
      <input
        v-model.trim="model"
        class="input"
        type="text"
        id="username"
        placeholder="Search GitHub username..."
        autocomplete="nickname"
      />
      <p v-if="errorMessage" class="text-error">{{ errorMessage }}</p>
      <button :disabled="isLoading" class="btn" value="Search">Search</button>
    </form>
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
    gap: 8px;
  }

  & .search-icon {
    @media (max-width: 40rem) {
      width: 20px;
      height: 20px;
    }
  }

  & .input {
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
      font-size: 0.8125rem;
    }
  }

  & .btn {
    border: none;
    color: var(--clr-pure-white);
    border-radius: 10px;
    padding: 12px 24px;
    background-color: var(--clr-vivid-blue);
    font-weight: bold;
    line-height: 1.65;
    cursor: pointer;
    transition: opacity 0.2s;

    &:hover {
      opacity: 0.9;
    }

    &:active {
      transform: translate(1px, 1px);
    }

    &:disabled {
      cursor: not-allowed;
    }

    @media (max-width: 40rem) {
      font-size: 0.875rem;
      padding: 12px 16px;
    }
  }
}
.input::placeholder {
  color: var(--text-color);
  font-size: 1.125rem;
}

@media (max-width: 40rem) {
  .input::placeholder {
    font-size: 0.8125rem;
  }
}
</style>
