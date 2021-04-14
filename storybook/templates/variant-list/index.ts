import { Variant } from '@/typescript/interfaces-storybook';

import { selfClosingTemplate } from '~/storybook'

/** constructedHTMLwithArgs */
/**
 * Contruct list of component variations HTML template string. This is a temporary solution and will be replaces with storybook decorators and docs
 * @function componentVariationsTemplate
 * @param {array} list Title of the main sidebar menu element.
 * @param {string} component A string defining the component to be used in the template.
 */
 export const variantList = (list: Variant, component: string) => {
    let HTMLstring:string = `<div>`;
    Object.keys(list).forEach( (key, item) => {
      HTMLstring += `<div class="mb-4">`;
      HTMLstring += selfClosingTemplate(component, `args.variants['`+key+`']`,  "border" );
      HTMLstring += `<label>`+key+`</label>`;
      HTMLstring += `</div>`;
    });
    HTMLstring += '</div>';
    return HTMLstring
}


