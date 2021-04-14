import { imgOptions } from '@/storybook';

describe('location', () => {
  it('should return an object that defines an lz-img', () => {
    const img = imgOptions('Awesome Image', '/somepath/to/somewhere.jpg');
    expect(img).toEqual(expect.objectContaining({
      title: expect.any(String),
      path: expect.any(String)
    }));
  })
})
