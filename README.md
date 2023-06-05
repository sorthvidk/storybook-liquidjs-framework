# Storybook for PixiJS

---

Storybook for LiquidJS is a UI development environment for your LiquidJS Components.
With it, you can visualize different states of your Components and develop them interactively.

![Storybook Screenshot](https://github.com/storybookjs/storybook/blob/main/media/storybook-intro.gif)

Storybook runs outside of your app.
So you can develop UI components in isolation without worrying about app specific dependencies and requirements.

## Getting Started

We don't currently have a init script for PixiJS storybook. Currently the easiest way is
to initialize with the html framework and manually edit the configuration:

```sh
cd my-app
npx storybook@"~7.0.0-beta" init -t html
```

Remove HTML framework/renderer and install LiquidJS framework/renderer:

```sh
npm remove @storybook/html @storybook/html-webpack5 --save-dev
npm install @deptdk/liquidjs-renderer @pixi/liquidjs-framework-webpack5 --save-dev
```

Replace `.storybook/main.js` with the below, setting up the correct paths as necessary.

```javascript
module.exports = {
  // ...
  stories: ['RELATIVE_PATH_TO_STORIES'],
  framework: '@deptdk/liquidjs-framework-webpack5',
};
```

Replace `.storybook/preview.js` with:

```javascript
export const parameters = { 
  layout: 'fullscreen', 
  liquidjs: {
    // These options are passed to LiquidJS     
  },
};
```

---

Storybook also comes with a lot of [addons](https://storybook.js.org/addons) and a great API to customize as you wish.
You can also build a [static version](https://storybook.js.org/docs/html/sharing/publish-storybook) of your Storybook and deploy it anywhere you want.
