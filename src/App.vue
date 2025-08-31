<template>
  <RouterView /> <!-- Ponemos RouterView para asegurar que veamos todos los componentes -->
  <VueQueryDevtools />
</template>

<script lang="ts" setup>
import { VueQueryDevtools } from '@tanstack/vue-query-devtools'
</script>
