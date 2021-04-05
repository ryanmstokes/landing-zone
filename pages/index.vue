<template>
  <div class="container">
    <div class="inner">
      <Logo />
      <h1 class="title">
        Landing Zone
      </h1>
      <p class="subtitle">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          rel="noopener noreferrer"
          class="button--green"
        >
          Contact us
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style>
.container {
@apply flex h-screen animate-fade-in;
}

.inner{
  @apply m-auto;
}

.title {
  @apply text-5xl font-serif block text-center font-thin text-gray-400 leading-5;
}

.subtitle {
  @apply font-light text-2xl text-center text-gray-300 w-1/2;
}

.links {
  @apply text-center;
}
</style>
