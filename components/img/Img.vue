<template>
  <img :src="path" :class="styles" :title="title" />
</template>

<script lang="ts">
/** Import utilities from Vue3 Composition API */
import { defineComponent, PropType } from "@vue/composition-api";

/** Img Compnonent Definition */
/**
 * Setup the component
 * @function Img
 * @param {string} name Name of the component.
 * @param {object} props Props that are passedto the component.
 * @param {function} setup Setup data and methods and return to component.
 */
export default defineComponent({
  name: "Img",
  props: {
    path: String as PropType<String>,
    styles: String as PropType<String>,
    title: String as PropType<String>,
  },
  setup(props, context) {
    /** ... */
  },
});
</script>

