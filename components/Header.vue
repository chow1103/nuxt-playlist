<template>
  <header class="flex justify-between items-center p-3 md:px-5">
    <NuxtLink to="/">
      <div class="flex gap-2 items-center">
        <svg class="w-12 h-12 sm:w-14 sm:h-14" xmlns="http://www.w3.org/2000/svg" fill="#ff3535" viewBox="0 0 100 100">
          <path
            d="M92.39 42.793c-.722-3.4-3.637-6.4-7.059-7.668-.056-.291-.096-.582-.154-.873-.742-3.5-3.811-6.569-7.36-7.769-1.215-4.257-5.809-7.755-10.346-7.755H18.102c-4.732 0-9.536 3.806-10.494 8.323a75.578 75.578 0 00.003 30.154c.745 3.516 3.75 6.587 7.363 7.781.908 3.163 3.678 5.904 6.908 7.101.056.291.096.583.155.874.955 4.504 5.759 8.31 10.492 8.31h49.369c4.732 0 9.537-3.806 10.494-8.323a75.6 75.6 0 00-.002-30.155zm-77.57-8.527a75.503 75.503 0 00-.534 27.116c-1.863-1.109-3.338-2.899-3.737-4.784a72.578 72.578 0 01-.003-28.938c.67-3.16 4.201-5.932 7.557-5.932h49.369c2.73 0 5.577 1.835 6.903 4.212h-49.06c-4.732 0-9.537 3.807-10.495 8.326zm53.23 26.15l-15.6 8.938c-.618.354-1.222.534-1.793.534-1.476 0-2.43-1.161-2.43-2.957V49.054c0-1.797.954-2.958 2.431-2.958.571 0 1.174.179 1.791.532l15.6 8.938c1.087.623 1.685 1.484 1.685 2.425s-.598 1.802-1.684 2.425zm13.847-25.934H32.528c-4.732 0-9.537 3.806-10.495 8.324a75.483 75.483 0 00-.754 25.666c-1.748-1.104-3.127-2.816-3.519-4.662a72.573 72.573 0 01-.003-28.937c.67-3.16 4.202-5.934 7.558-5.934h49.37c3.224 0 6.602 2.561 7.455 5.554-.08-.001-.161-.011-.243-.011z"
          />
        </svg>
        <div class="font-bold text-lg font-['Poppins'] md:text-xl">Playlist Sorter</div>
      </div>
    </NuxtLink>

    <div class="hidden items-center gap-2 sm:flex">
      <Search :size="30" :stroke-width="3" />
      <Input placeholder="Search" />
    </div>
    <Avatar class="border-1 h-9 w-9 sm:h-10 sm:w-10">
      <AvatarImage src="https://github.com/radix-vue.png" alt="@radix-vue" />
      <AvatarFallback><UserRound /></AvatarFallback>
    </Avatar>
  </header>
</template>

<script setup lang="ts">
  import { Input } from '@/components/ui/input/'
  import { UserRound } from 'lucide-vue-next'
  import { Search } from 'lucide-vue-next'
</script>
