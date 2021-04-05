<template>
  <div class="content">
    <div class="inner">
      <Logo class="logo" />
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
.content {
@apply h-screen flex animate-fade-in;
}

.inner{
  @apply m-auto text-center;
}

.logo{
  @apply bg-gray-200 inline-block;
}
.title {
  @apply text-5xl font-sans block text-gray-400 leading-5 mt-10;
}

.subtitle {
  @apply font-light text-2xl mx-auto text-gray-300 w-6/12 mt-8;
}

.links {
  @apply text-center mt-8;
}
</style>
