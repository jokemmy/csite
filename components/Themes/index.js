
import fs from 'flystore';
import React from 'react';
import pick from 'object.pick';
import lessToJS from 'less-vars-to-js';
import rawLessVariables from '!!raw-loader!@assets/custom.less';
import rawLessEasings from '!!raw-loader!@assets/easings/index.less';


export const themeVariables = lessToJS(
  rawLessVariables,
  { resolveVariables: true }
);

export const themeEasings = lessToJS(
  rawLessEasings,
  { resolveVariables: true }
);

export const defaultThemeConfig = {
  footer: true,
  header: true
};

const storeTheme = fs( '@theme-config' );
storeTheme.set( 'config', { ...defaultThemeConfig });
storeTheme.set( 'change', {});

export const setTheme = ( config ) => {
  const themeConfig = storeTheme.get( 'change' );
  storeTheme.dispense( 'change', Object.assign({}, themeConfig, config ));
};

export function withTheme( Comp ) {

  return class WithTheme extends React.Component {

    static getDerivedStateFromProps = ( props ) => {
      const newConfig = Object.assign({}, defaultThemeConfig, pick( props, Object.keys( defaultThemeConfig )));
      const changeConfig = storeTheme.get( 'change' );
      return {
        themeConfig: Object.assign( newConfig, changeConfig )
      };
    };

    state = {
      themeConfig: storeTheme.get( 'config' )
    };

    componentDidMount() {
      const changeConfig = storeTheme.get( 'change' );
      if ( changeConfig ) {
        this.setState({
          themeConfig: Object.assign( storeTheme.get( 'config' ), changeConfig )
        });
      }
      this.configHandle = storeTheme.watch( 'change', ( themeConfig ) => {
        this.setState({
          themeConfig: Object.assign( storeTheme.get( 'config' ), themeConfig )
        });
      });
    }

    componentWillUnmount() {
      if ( this.configHandle ) {
        this.configHandle.clear();
        this.configHandle = null;
      }
    }

    render() {
      return <Comp {...this.props} themeConfig={this.state.themeConfig} />;
    }
  };
}

export const ThemeContext = React.createContext({
  themeConfig: { ...defaultThemeConfig },
  themeEasings,
  themeVariables,
  isLoaded: false,
  isMobile: false
});
