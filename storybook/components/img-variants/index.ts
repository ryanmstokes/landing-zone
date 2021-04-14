import { Image, DefaultImgOptions } from '@/typescript/interfaces';
import { Variant, ImageList } from '@/typescript/interfaces-storybook';

/** imgVariants */
/**
 * Contruct HTML template string and pass $args to variant.
 * @function imgVariants
 * @param {array} list List of style variants.
 * @param {string} defaultImgOptions A string defining the component to used in the template.
 */
export const imgVariants = (list: Variant, defaultImgOptions: DefaultImgOptions): ImageList => {
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
