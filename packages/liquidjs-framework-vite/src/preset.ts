import type { PresetProperty } from '@storybook/types';
import type { StorybookConfig } from './types';
import { mergeConfig, type PluginOption } from 'vite';
import { Liquid } from 'liquidjs';
// import liquid from '@vituum/vite-plugin-liquid'
import { IndexHtmlTransformContext, Plugin as VitePlugin, normalizePath } from 'vite';

export const core: PresetProperty<'core', StorybookConfig> = {
  builder: '@storybook/builder-vite',
  renderer: '@deptdk/liquidjs-renderer',
};

function vitePluginTemplate(): VitePlugin {
  const fileRegex = /\.(liquid)$/

  return {
    // plugin name
    name: 'vite-plugin-liquidjs',
    enforce: 'pre',
    
    async transform(code, id) {
      console.log(code);
      
      if (fileRegex.test(id)) {
        // const template = compile(html, compileOptions);
        const engine = new Liquid({});
    
        const result = await engine.parseAndRender(code, {})
        return result
      }
    }, 
  }
}


export const viteFinal: StorybookConfig['viteFinal'] = async (config, { presets }) => {
  
  const { plugins = [] } = config;
  plugins.push(vitePluginTemplate())
  return {
    ...config,
    plugins,
  };
};