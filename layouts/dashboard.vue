<template>
  <div class="min-h-screen bg-gray-100">
    <DashboardHeader />
    <div class="flex">
      <DashboardSidebar />
      <main class="flex-1 p-8">
        <slot />
      </main>
    </div>
  </div>
</template>