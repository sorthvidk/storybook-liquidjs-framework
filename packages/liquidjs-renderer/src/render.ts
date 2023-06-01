/* eslint-disable no-param-reassign */

import { dedent } from 'ts-dedent';
import type { RenderContext, ArgsStoryFn } from '@storybook/types';
import type { LiquidjsRenderer } from './types';
import { Liquid } from 'liquidjs';
import { RenderOptions } from 'liquidjs/dist/src/liquid-options';

let engine : null | Liquid = null;

export const render: ArgsStoryFn<LiquidjsRenderer> = (args, context) => {  
  const { id, component } = context;
  
  if (!component) {
    throw new Error( `Unable to render story ${id} as the component annotation is missing from the default export` );
  }
    
  return { component, args }
};

export function renderToCanvas(
  { storyContext, storyFn, kind, name, showMain, showError, forceRemount }: RenderContext<LiquidjsRenderer>,
  canvasElement: LiquidjsRenderer['canvasElement']
) {
  const element = storyFn();
  showMain();

  /*
  console.log('context:');
  console.log(storyContext);
  console.log('story:');
  console.log(element);
  */

  const template = element.component || storyContext.component
  const args:RenderOptions = {...element.args, ...storyContext.args};
  const { parameters } = storyContext;
  
  /*
  console.log('parameters');
  console.log(parameters);
  */

  
  if (typeof element === 'object' && template) {
    if (!engine) engine = new Liquid(parameters.liquidjs || {});
    
    engine
      .parseAndRender(template, args)
      .then((res: string) => {   
        canvasElement.innerHTML = res;
      })
  } else {
    showError({
      title: `Expecting an StoryFnLiquidjsReturnType from the story: "${name}" of "${kind}".`,
      description: dedent`
        Did you forget to return the correct object from the story?
      `,
    });
  }
  
}