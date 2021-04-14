<p align="center">  
  <img src="./git-images/technology-logos.jpg" />
</p>

# Landing Page template - Yarn, Nuxt, Typescript, Vue3 Composition API, Vuex, Tailwind, Storybook, Jest and Vue Test Utils.
<br/><br/>
<img src="./git-images/yarn-logo.jpg" />

### The Project is built and packaged with Yarn

https://classic.yarnpkg.com/en/docs/

## Yarn Commands

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```
<br/>
<br/>
<img src="./git-images/nuxt-logo.jpg" />

## Nuxt
The Universal SSR application is built with Nuxt 2.15 which has Typescript support built in - https://typescript.nuxtjs.org/guide/introduction).

To configure Nuxt edit the /nuxt.config.js file.

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
<br/><br/><br/>
<img src="./git-images/vue3-logo.jpg" />

## Composition API
Nuxt 2 does not yet have built in support for vue 3 or the composition API, but the application takes advantage of the new features offered by Vue 3, by importing the nuxtjs composition-api package and using a slightly differennt syntax for some declarations.

https://yarnpkg.com/package/@nuxtjs/composition-api
<br/><br/><br/>
<img src="./git-images/typescript-logo.jpg" />

## Typescript
Although Typescript is supported through the nuxt-typescript package some configuration is necessary.

- Adding a vue-shims.d.ts file to the root directory so that the Vue is typed:

```
/** vue-shims.d.ts */
declare module "*.vue" {
  import Vue from 'vue'
  export default Vue
}
```

- Adding a testRegex statement to **package.json** so that Typescript can recognise Jest test files with **.ts** extensions. (***note the "__test__" part**). 

```
"jest": {
    /** ... */
    "testRegex": "(/__test__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$"
}
```

- and add the following types to your ts.config.js.

```
compilerOptions:{
  /** ... */
 "types": [
      "@nuxt/types",
      "@types/node",
      "@types/jest"
    ]
}
```

Common Interfaces and types can be found in the **/typescript/interfaces.ts** file.

When runnign yarn dev or build Typescript will throw errors 

<br/><br/>
<img src="./git-images/storybook-logo.jpg" />

## Storybook JS Styleguide
Storybook Js is a UII component explorer for front end developers. It runs alongside the application, with stories defined for UI components.

https://storybook.js.org/docs/vue/get-started/introduction

and more specifically the project uses nuxt-storybook.

https://storybook.nuxtjs.org/

Run the following command to launch the storybook server and view the applications components design, variations and actions in isolation:

```
yarn nuxt storybook
```

Shared Typescript interfaces for Stroybook can be found in the **/typescript/interfaces-storybook.ts** file.

<br/><br/>
<img src="./git-images/jest-logo.jpg" />

## Testing - Vue test utils and Jest

Tests use the Jest and vue-test-utils frameworks. 

https://github.com/vuejs/vue-jest

https://vue-test-utils.vuejs.org/

Test files are located in the corresponding components directory.

```
yarn test
```
To configure Jest edit the /jest.config.js file.

<br/><br/>
<img src="./git-images/tailwind-logo.jpg" />

## Styling Components

Components in the applicationn are styled using the TailwindCSS, a utility-first CSS framework which uses Utility classes to help you work within the constraints of the configured design system instead of littering your stylesheets with arbitrary values.

For more info check:

https://tailwindcss.com/docs




