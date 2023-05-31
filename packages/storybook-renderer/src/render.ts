/* eslint-disable no-param-reassign */
import { global } from '@storybook/global';

import { dedent } from 'ts-dedent';
import { simulatePageLoad, simulateDOMContentLoaded } from '@storybook/preview-api';
import type { RenderContext, ArgsStoryFn } from '@storybook/types';
import type { HtmlRenderer } from './types';

const { Node } = global;

import { Liquid } from 'liquidjs';
import { template } from '@babel/core';
let engine : null | Liquid = null;

export const render: ArgsStoryFn<HtmlRenderer> = (args, context) => {  
  const { id, component } = context;
  
  if (!component) {
    throw new Error( `Unable to render story ${id} as the component annotation is missing from the default export` );
  }
    
  return {
    component,
    args
  }
};

export function renderToCanvas(
  { storyContext, storyFn, kind, name, showMain, showError, forceRemount }: RenderContext<HtmlRenderer>,
  canvasElement: HtmlRenderer['canvasElement']
) {
  const element = storyFn();
  
  console.log('context:');
  console.log(storyContext);
  console.log('story:');
  console.log(element);

  const template = element.component || storyContext.component
  const args = {...element.args, ...storyContext.args};
  const { parameters } = storyContext;
  
  console.log('parameters');
  
  console.log(parameters);
  
  
  if (!engine) engine = new Liquid();
  
  showMain();
  engine
    .parseAndRender(template, args)   // will read and render `views/hello.liquid`
    .then((res: string) => {   
      canvasElement.innerHTML = res;
    })
}