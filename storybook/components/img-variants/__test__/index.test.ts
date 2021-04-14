import { imgVariants } from '@/storybook';
import { Sizes } from '~/tailwind/tailwind-map-config';
import { imgOptions } from '@/storybook';

describe('Generating list object of component style variations', () => {
  it('should return an object with different component style variations', () => {
    const imagePath = '/somepath/to/animage.jpg';
    const imgList = imgVariants(Sizes, imgOptions('name', imagePath));
    expect(Object.keys(imgList).length).toBe(5);
  })
})
