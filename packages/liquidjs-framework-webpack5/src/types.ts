import type {
  StorybookConfig as StorybookConfigBase,
  TypescriptOptions as TypescriptOptionsReact,
} from '@storybook/core-webpack';
import type {
  StorybookConfigWebpack,
  BuilderOptions,
  TypescriptOptions as TypescriptOptionsBuilder,
} from '@storybook/builder-webpack5';

type FrameworkName = '@deptdk/liquidjs-framework-webpack5';
type BuilderName = '@storybook/builder-webpack5';

export type FrameworkOptions = {
  builder?: BuilderOptions;
};

type StorybookConfigFramework = {
  framework:
    | FrameworkName
    | {
        name: FrameworkName;
        options: FrameworkOptions;
      };
  frameworkPath?: string;
  core?: StorybookConfigBase['core'] & {
    builder?:
      | BuilderName
      | {
          name: BuilderName;
          options: BuilderOptions;
        };
  };
  typescript?: Partial<TypescriptOptionsBuilder & TypescriptOptionsReact> &
    StorybookConfigBase['typescript'];
};

/**
 * The interface for Storybook configuration in `main.ts` files.
 */
export type StorybookConfig = Omit<
  StorybookConfigBase,
  keyof StorybookConfigWebpack | keyof StorybookConfigFramework
> &
  StorybookConfigWebpack &
  StorybookConfigFramework;
