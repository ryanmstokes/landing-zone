import { mount } from '@vue/test-utils'
import lzImg from '@/components/lz-img/lz-img.vue'
import { Image } from  '@/typescript/interfaces';

/** Img Component Tests */
/**
 * Loads an image and checks that it exists in the DOM
 * @test Check the image component mounted and prop are equal.
 */
describe('lz-img component', () => {

  /** Check the image component mounted */
  /**
   * Loads an image and checks that it exists in the DOM
   * @param {string} title Title of the image.
   * @param {number} path Path to the image.
   * @param {number} styles CSS class list.
   */
  test('Does the component successfully load an image?', () => {

    const props = (title: string, path: string, styles: string): Image  => {
      return {
        title: title,
        path: path,
        styles: styles
      }
    };

    let wrapper = mount(lzImg, {
      propsData: props("Logo", "~/assets/logo.svg", "w-1/2 w-auto bg-gray-200")
    })

    /** Check the component mounted */
    expect(wrapper.vm).toBeTruthy();

    /** Check props match */
    expect(wrapper.props().title).toBe('Logo');
    expect(wrapper.props().path).toBe('~/assets/logo.svg');
    expect(wrapper.props().styles).toBe('w-1/2 w-auto bg-gray-200');

    /** Check an image exists in the DOM */
    const img = wrapper.find('img');
    expect(img.exists()).toBe(true);
  });
})
