<template>
  <NuxtLayout>
    <template #header>
      <Logo />
      <ThemeSwitch />
    </template>
    <template #main>
      <SearchForm />
      <Results />
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
