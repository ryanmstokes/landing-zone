declare module "*.vue" {
  import { defineComponent } from "@nuxtjs/composition-api";
  const component: ReturnType<typeof defineComponent>;
  export default component;
}
