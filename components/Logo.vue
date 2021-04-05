<template>
  <section class="logo">
    <img src="~/assets/logo.svg" width="250" height="250">
  </section>
</template>

<style>
.logo {
@apply flex justify-center;
}

.NuxtLogo {
  animation: 1s appear;
  margin: auto;
}

@keyframes appear {
  0% {
    opacity: 0;
  }
}
</style>

