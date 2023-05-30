/* eslint-disable no-param-reassign */
import { global } from '@storybook/global';

import { dedent } from 'ts-dedent';
import { simulatePageLoad, simulateDOMContentLoaded } from '@storybook/preview-api';
import type { RenderContext, ArgsStoryFn } from '@storybook/types';
import type { HtmlRenderer } from './types';

const { Node } = global;

import { Liquid } from 'liquidjs';
const engine = new Liquid();

export const render: ArgsStoryFn<HtmlRenderer> = (args, context) => {
  const { id, component } = context;
  if (!component) {
    throw new Error(
      `Unable to render story ${id} as the component annotation is missing from the default export`
      );
    }
    
    const element = document.createElement(component);
    Object.entries(args).forEach(([key, val]) => {
      // @ts-ignore
      element[key] = val;
    });
    return element;
    
    
  /*
  const { id, component: Component } = context;
  if (typeof Component === 'string') {
    let output = Component;
    Object.keys(args).forEach((key) => {
      output = output.replace(`{{${key}}}`, args[key]);
    });
    return output;
  }
  if (Component instanceof HTMLElement) {
    const output = Component.cloneNode(true) as HTMLElement;
    Object.keys(args).forEach((key) => {
      output.setAttribute(
        key,
        typeof args[key] === 'string' ? args[key] : JSON.stringify(args[key])
      );
    });

    return output;
  }
  if (typeof Component === 'function') {
    return Component(args, context);
  }
  */

  console.warn(dedent`
    Storybook's HTML renderer only supports rendering DOM elements and strings.
    Received: ${Component}
  `);
  throw new Error(`Unable to render story ${id}`);
};

export function renderToCanvas(
  { storyFn, kind, name, showMain, showError, forceRemount }: RenderContext<HtmlRenderer>,
  canvasElement: HtmlRenderer['canvasElement']
) {
  const element = storyFn();

  console.log(canvasElement);
  console.log(element);
  
  
  showMain();
  engine
    .parseAndRender(element.template, element.data)   // will read and render `views/hello.liquid`
    .then((res: string) => {
      console.log(res);
      
      canvasElement.innerHTML = res;
    })
}