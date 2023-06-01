/* eslint-disable prefer-destructuring */
import type { Addon_ClientStoryApi, Addon_Loadable } from '@storybook/types';
import { start } from '@storybook/preview-api';
import type { LiquidjsRenderer } from './types';
import { renderToCanvas, render } from './render';

const RENDERER = 'LIQUIDJS';

interface ClientApi extends Addon_ClientStoryApi<LiquidjsRenderer['storyResult']> {
  configure(loader: Addon_Loadable, module: NodeModule): void;
  forceReRender(): void;
  raw: () => any; // todo add type
}

const api = start<LiquidjsRenderer>(renderToCanvas, { render });

export const storiesOf: ClientApi['storiesOf'] = (kind, m) => {
  return (api.clientApi.storiesOf(kind, m) as ReturnType<ClientApi['storiesOf']>).addParameters({
    renderer: RENDERER,
  });
};

export const configure: ClientApi['configure'] = (...args) => api.configure(RENDERER, ...args);
export const forceReRender: ClientApi['forceReRender'] = api.forceReRender;
export const raw: ClientApi['raw'] = api.clientApi.raw;