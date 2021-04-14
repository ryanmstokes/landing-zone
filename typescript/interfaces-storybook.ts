import { Image } from '@/typescript/interfaces';

/**
 * StoryItem Interface
 *
 * @interface StoryItem
 * @member {string} title Title of the Story Item which appears in the sidebar menu
 * @member {string} Component NAme of the component (*Can be a diretory path for grouping)
 */
interface StoryItem {
  title: string;
  component: object;
}

/**
 * Variant Interface
 *
 * @interface Variant
 * @member {string} title Title of the style variant
 */
interface Variant {
  [name: string]: string
}

/**
 * ImageList Interface
 *
 * @interface ImageList
 * @member {string} name Name of the list of images
 */
interface ImageList {
  [name: string]: Image
}

export { StoryItem, Variant, ImageList }
