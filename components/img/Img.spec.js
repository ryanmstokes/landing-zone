import { mount } from '@vue/test-utils'
import Img from '~/components/img/Img.vue'

/** Img Component Tests */
/**
 * Loads an image and checks that it exists in the DOM
 * @test Check the image component mounted and prop are equal.
 */
describe('Default Image component', () => {

  /** Check the image component mounted */
  /**
   * Loads an image and checks that it exists in the DOM
   * @param {string} title Title of the image.
   * @param {number} path Path to the image.
   * @param {number} styles CSS class list.
   */
  test('Does the component successfully load an image?', () => {

    let wrapper = mount(Img, {
      propsData: {
        title: "Logo",
        path: "~/assets/logo.svg",
        styles: "w-1/2 w-auto bg-gray-200"
      }
    })

    /** Check the component mounted */
    expect(wrapper.vm).toBeTruthy();

    /** Check props match */
    expect(wrapper.props().title).toBe('Logo');
    expect(wrapper.props().path).toBe('~/assets/logo.svg');
    expect(wrapper.props().styles).toBe('w-1/2 w-auto bg-gray-200');
    /** Check an image has been loaded */
    const img = wrapper.find('img');
    expect(img.exists()).toBe(true);
  });
})
