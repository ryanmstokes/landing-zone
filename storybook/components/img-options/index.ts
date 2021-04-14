import { DefaultImgOptions } from '@/typescript/interfaces';

/** imgOptions */
/**
 * Construct the default Image options to be used in story.
 * @function imgOptions
 * @param {array} title title of the image.
 * @param {string} path path to the image resource.
 * @returns {object} Image options
 */

 export const imgOptions = (title: string, path: string ):DefaultImgOptions  => {
  return {
    title: title,
    path: path,
  }
}
