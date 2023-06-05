import type { PresetProperty } from '@storybook/types';
import type { StorybookConfig } from './types';
import { Plugin as VitePlugin } from 'vite';

export const core: PresetProperty<'core', StorybookConfig> = {
  builder: '@storybook/builder-vite',
  renderer: '@deptdk/liquidjs-renderer',
};

function vitePluginTemplate(): VitePlugin {
  return {
    // plugin name
    name: 'vite-plugin-liquidjs',
    enforce: 'pre',
    
    async transform(code, id, options) {
      if (/^.*\.liquid$/g.test(id)) {
        code = `export default \`${code.toString()}\``
        return { code }
      }
    }
  }
}


export const viteFinal: StorybookConfig['viteFinal'] = async (config, { presets }) => {
  const { plugins = [] } = config;
  plugins.push(vitePluginTemplate());
  
  return {
    ...config,
    plugins,
  };
};