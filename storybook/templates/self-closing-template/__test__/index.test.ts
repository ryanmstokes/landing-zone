import { selfClosingTemplate } from '@/storybook';

describe('Storybook template generation', () => {
    it('should return a HTML template string', () => {
      const item = selfClosingTemplate('Awesome Image', 'args.variant.sm', 'border');
      /** It's type should be equal to a string */
      expect(typeof item).toBe('string');
    })
})
