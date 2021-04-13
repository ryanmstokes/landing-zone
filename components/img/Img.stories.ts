/** Import the Nuxt Image component  */
import Img from './Img.vue';

/** Import shared Typeface interfaces */
import { Image } from '@/typescript/interfaces';

/** Import Storybook resources */
import { Story } from '@storybook/vue';
import { storyItem, constructedHTMLwithArgs, constructedStoryBookVariants, constructedImgOptions } from '@/helpers/storybook';

/** Import tailwind map config for defaults (e.g. image sizes) */
import { Sizes } from '~/tailwind/tailwind-map-config';

/** Construct the sidebar Menu Item */
const StoryMenuItem = storyItem('Components/Image', Img);

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
  components: { Img },
  setup() {
    return { args };
  },
  template: constructedHTMLwithArgs(Sizes, 'Img') as string,
});

/** Require the Placeholder Image to be used in the image component **/
const imagePath = require('~/assets/logo.svg') as string;

/** Construct the Args to associate to the component */
const variants = (imagePath: string): object => {
 return  {
  variants: constructedStoryBookVariants(Sizes, constructedImgOptions('name', imagePath))
 }
}

/** Underscore syntax will show title with space **/
export const Size:Story<Image> = Template.bind({});

/** Associate the $args to the template instance */
Size.args = variants(imagePath);
