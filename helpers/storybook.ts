/** Import shared Typescript interfaces */
import { Image, DefaultImgOptions } from '@/typescript/interfaces';

/** Import shared Storybook Typescript interfaces */
import { StoryItem, Variant, ImageList } from '@/typescript/interfaces-storybook';

/** storyItem */
/**
 * Template setup function
 * @function storyItem
 * @param {string} title Title of the main sidebar menu element.
 * @param {string} Img The path to the image reseource.
 */
const storyItem = (title: string, Img: object): StoryItem => {
  return {
    title: title,
    component: Img
  }
};

/** constructedHTMLwithArgs */
/**
 * Contruct HTML template string and pass args vasriant.
 * @function constructedHTMLwithArgs
 * @param {array} list Title of the main sidebar menu element.
 * @param {string} component A string defining the component to used in the template.
 */
const constructedHTMLwithArgs = (list: Variant, component: string) => {
    let HTMLstring:string = `<div>`;
    Object.keys(list).forEach( (key, item) => {
      HTMLstring += `<div class="mb-4">`;
      HTMLstring += `<`+component+` v-bind="args.variants['`+key+`']" class="border"/>`;
      HTMLstring += `<label>`+key+`</label>`;
      HTMLstring += `</div>`;
    });
    HTMLstring += '</div>';
    return HTMLstring
}

/** constructedStoryBookVariants */
/**
 * Contruct HTML template string and pass $args to variant.
 * @function constructedStoryBookVariants
 * @param {array} list List of style variants.
 * @param {string} defaultImgOptions A string defining the component to used in the template.
 */
const constructedStoryBookVariants = (list: Variant, defaultImgOptions: DefaultImgOptions) => {
  let variants: ImageList = {};
  Object.keys(list).forEach((item) => {
    const ImageObject: Image = {
      ...defaultImgOptions,
      styles: list[item]
    }
    variants[item] = ImageObject;
  });
  return variants
}

/** constructedImgOptions */
/**
 * Construct the default Image options to be used in story.
 * @function constructedStoryBookVariants
 * @param {array} list List of style variants.
 * @param {string} defaultImgOptions A string defining the component to used in the template.
 */
const constructedImgOptions = (title: string, path: string ):DefaultImgOptions  => {
  return {
    title: title,
    path: path,
  }
}

export { storyItem, constructedHTMLwithArgs, constructedStoryBookVariants , constructedImgOptions};

