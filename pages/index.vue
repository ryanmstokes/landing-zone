<template>
  <main class="content">
    <div class="inner">
      <section class="logo flex"><Img v-bind="image" /></section>
      <h1 class="title">Landing Zone</h1>
      <p class="subtitle">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
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
  </main>
</template>

<script lang="ts">
/** Import utilities from Vue3 Composition API */
import { defineComponent } from "@vue/composition-api";

/** Import shared Typescript interfaces */
import { Image } from "@/typescript/interfaces";

/** Import Sizes from Tailwind map configuration defaults */
import { Sizes } from "~/tailwind/tailwind-map-config";

/** Import the Logo Image */
const logoImagePath = require("~/assets/logo.svg") as string;

/** Index */
/**
 * Setup the Index page of the application
 * @function Index
 * @param {string} name Name of the component.
 * @param {function} setup Setup data and methods and return to component.
 */
export default defineComponent({
  name: "Index",
  setup() {
    const image: Image = {
      title: "Logo",
      path: logoImagePath,
      styles: Sizes.xs + " w-auto bg-gray-200",
    };
    return { image };
  },
});
</script>

<style src="./style.css"></style>

