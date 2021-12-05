export const parameters = {
  showPanel: false,
  isFullscreen: true,
  previewTabs: {
    canvas: { hidden: true },
  },
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
