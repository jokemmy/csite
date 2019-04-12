
import React from 'react';
import lessToJS from 'less-vars-to-js';
import rawLessVariables from '!!raw-loader!@assets/custom.less';
import rawLessEasings from '!!raw-loader!@assets/easings/index.less';


export const themeVariables = lessToJS(
  rawLessVariables,
  { resolveVariables: true }
);

export const thiemeEasings = lessToJS(
  rawLessEasings,
  { resolveVariables: true }
);

export const themes = {
  light: {
    foreground: '#000000',
    background: '#eeeeee'
  },
  dark: {
    foreground: '#ffffff',
    background: '#222222'
  }
};

export const ThemeContext = React.createContext({
  themes,
  themeVariables,
  thiemeEasings,
  isLoaded: false,
  isMobile: false
});
