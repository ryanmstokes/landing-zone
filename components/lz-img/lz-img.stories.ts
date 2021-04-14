/** Import the Nuxt Image component  */
import lzImg from '~/components/lz-img/lz-img.vue';

/** Import shared Typeface interfaces */
import { Image } from '@/typescript/interfaces';

/** Import Storybook resources */
import { Story } from '@storybook/vue';
import { storyItem, imgOptions, imgVariants, variantList } from '@/storybook/';

/** Import tailwind map config for defaults (e.g. image sizes) */
import { Sizes } from '~/tailwind/tailwind-map-config';

/** Construct the sidebar Menu Item */
const StoryMenuItem = storyItem('Components/Image', lzImg);

/** Export the sidebar Menu Item */
export default StoryMenuItem;

/** Story Template Constructor */
/**
 * Template setup function
 * @function Template
 * @param {string} components Define the component that shold be passed to the template.
 * @param {function} setup Return the args to make them availabletothe component.
 * @param {string} template Compiled HTML template string
 */
const Template: Story<Image> = (args: Image) => ({
  components: { lzImg },
  setup() {
    return { args };
  },
  template: variantList(Sizes, 'lz-img'),
});

/** Require the Placeholder Image to be used in the image component **/
const imagePath = require('~/assets/logo.svg') as string;

/** Construct the Args to associate to the component */
const variants = (imagePath: string): object => {
 return  {
  variants: imgVariants(Sizes, imgOptions('name', imagePath))
 }
}

/** Underscore syntax will show title with space **/
export const Size:Story<Image> = Template.bind({});

/** Associate the $args to the template instance */
Size.args = variants(imagePath);
