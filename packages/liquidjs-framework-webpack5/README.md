# Storybook for LiquidJS

---

Storybook for LiquidJS is a UI development environment for your LiquidJS Components.
With it, you can visualize different states of your Components and develop them interactively.

![Storybook Screenshot](https://raw.githubusercontent.com/storybookjs/brand/37c5e9bde5c56b69a8c4312de7d60fb3a9d7de9d/icon/icon-storybook-default.svg)

Storybook runs outside of your app.
So you can develop UI components in isolation without worrying about app specific dependencies and requirements.

## Getting Started


```sh
cd my-app
npx storybook@latest init --type html
```

Remove HTML framework/renderer and install LiquidJS framework/renderer:

```sh
npm remove @storybook/html @storybook/html-webpack5
npm install @deptdk/liquidjs-framework-webpack5 --save-dev
```

…or if you wanna use Vite
```sh
npm remove @storybook/html @storybook/html-webpack5
npm install @deptdk/liquidjs-framework-vite --save-dev
```

Replace `.storybook/main.js` with the below, setting up the correct paths as necessary.

```javascript
module.exports = {
  // ...
  stories: ['RELATIVE_PATH_TO_STORIES'],
  framework: '@deptdk/liquidjs-framework-webpack5', // or '@deptdk/liquidjs-framework-vite'
};
```

Replace `.storybook/preview.js` with:

```javascript
export const parameters = { 
  liquidjs: {
    //These options are passed to LiquidJS
  },
};
```
Read more about LiquidJS options in the [LiquidJS Docs](https://liquidjs.com/tutorials/options.html)

---

Storybook also comes with a lot of [addons](https://storybook.js.org/addons) and a great API to customize as you wish.
You can also build a [static version](https://storybook.js.org/docs/html/sharing/publish-storybook) of your Storybook and deploy it anywhere you want.
