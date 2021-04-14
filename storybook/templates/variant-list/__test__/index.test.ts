import { variantList } from '@/storybook';
import { Sizes } from '~/tailwind/tailwind-map-config';

describe('component style variation factory', () => {
  it('should return an object with different component style variations', () => {
  const variants = variantList(Sizes, 'lz-img');
  expect(typeof variants).toBe('string');
  })
})
