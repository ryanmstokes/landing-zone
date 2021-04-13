/**
 * Default Image options Interface
 *
 * @interface DefaultImgOptions
 * @member {string} title Title of the Image
 * @member {string} Path Src of the Image
 */
interface DefaultImgOptions {
  title: string,
  path: string
}

/**
 * Image Interface
 *
 * @interface Image
 * @member {string} styles CSS class string
 */
interface Image extends DefaultImgOptions {
  styles?: string
}

export { DefaultImgOptions, Image };
