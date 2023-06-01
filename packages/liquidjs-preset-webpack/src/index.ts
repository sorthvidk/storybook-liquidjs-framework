import type { StorybookConfig } from './types';

export * from './types';

export const webpack: StorybookConfig['webpack'] = (config) => {
  const rules = [
    ...(config.module?.rules || []),
    {
      test: /\.liquid$/i,
      use: [
        'html-loader',
        
      ]
    }
  ];

  config.module = config.module || {};
  config.module.rules = rules;

  return config;
};
