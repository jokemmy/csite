
import React from 'react';
import Media from 'react-media';
import Mask from '@components/Mask';
import { ThemeContext, themeVariables } from '@components/Themes';
import { pushLoader, popLoader, withLoaded } from '@lib/loaded';
import './basic.less';
import './fonts.less';



@withLoaded
class Base extends React.Component {
  render() {
    const { children, isMobile, isLoaded, className, ...props } = this.props;
    return (
      <ThemeContext.Provider value={{ themeVariables, isMobile, isLoaded }}>
        <div {...props} className={`page-basic${className ? ` ${className}` : ''}`}>
          {children}
        </div>
        <Mask />
      </ThemeContext.Provider>
    );
  }
}

class Wrapped extends React.Component {

  constructor( props ) {
    super( props );
    pushLoader( 'BasicMediaLoader' );
  }

  render() {
    return (
      <Media query="(max-width: 767px)" defaultMatches={false}>
        {( isMobile ) => {
          popLoader( 'BasicMediaLoader' );
          return <Base {...this.props} isMobile={isMobile} />;
        }}
      </Media>
    );
  }
}

export default Wrapped;
