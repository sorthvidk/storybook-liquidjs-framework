module.exports = {
  stories: [
    '../components/**/*.stories.@(ts|tsx|js|jsx|mdx)',
    '../pages/**/*.stories.@(ts|tsx|js|jsx|mdx)'
  ],
  staticDirs: ['../components', '../layouts'],
  logLevel: 'debug',
  addons: [
    '@storybook/addon-actions',
    '@storybook/addon-backgrounds',
    '@storybook/addon-controls',
    '@storybook/addon-viewport',
    '@storybook/addon-links',
    '@storybook/addon-highlight',
  ],
  core: {
    disableTelemetry: true,
  },
  features: {
    
  },
  framework: '@deptdk/liquidjs-framework-webpack5',
};
