import type {
  ArgsStoryFn,
  StoryContext as DefaultStoryContext,
  WebRenderer,
} from '@storybook/types';
import type { SourceType } from '@storybook/docs-tools';

export type { Renderer, RenderContext } from '@storybook/types';

export type StoryFnLiquidjsReturnType = {
  component: string;
  args: any;
};

export interface ShowErrorArgs {
  title: string;
  description: string;
}


export interface Parameters {
  renderer: 'liquidjs';
  docs?: {
    story: { inline: boolean };
    source: {
      type: SourceType.DYNAMIC;
      language: 'liquidjs';
      code: any;
      excludeDecorators: any;
    };
  };
}

export type StoryContext = DefaultStoryContext<LiquidjsRenderer> & {
  parameters: DefaultStoryContext<LiquidjsRenderer>['parameters'] & Parameters;
};

export interface LiquidjsRenderer extends WebRenderer {
  component: string;
  storyResult: StoryFnLiquidjsReturnType;
};

