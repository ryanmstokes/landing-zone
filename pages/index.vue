<template>
  <main class="content">
    <div class="inner">
      <section class="logo flex">
        <lz-img v-bind="logo" />
      </section>
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
import {
  defineComponent,
  wrapProperty,
  computed,
  ComputedRef,
} from "@nuxtjs/composition-api";

/** Import shared Typescript interfaces */
import { Image } from "@/typescript/interfaces";

/** Import Sizes from Tailwind map configuration defaults */
import { Sizes } from "~/tailwind/tailwind-map-config";

/** Create reference to typed vuex accessor */
const useAccessor = wrapProperty("$accessor", false);
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
    /** typedStore = typed-vuex store  */
    const typedStore = useAccessor();

    let logoPath = computed((): string => typedStore.logo);

    const logo: Image = {
      title: "Logo",
      path: require("~/assets/" + logoPath.value),
      styles: Sizes.xs + " w-auto bg-gray-200",
    };

    return { logo };
  },
});
</script>

<style src="./style.css"></style>

