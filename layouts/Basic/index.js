
import React from 'react';
import Media from 'react-media';
import { pushLoader, popLoader, withLoaded } from '@lib/loaded';
import Mask from '@components/Mask';
import { ThemeContext } from '@components/Themes';
import './basic.less';


@withLoaded
class Base extends React.Component {

  static contextType = ThemeContext;

  // static getDerivedStateFromProps( props ) {
  //   return {

  //   };
  // }

  render() {
    const { children, isMobile, isLoaded } = this.props;
    return (
      <ThemeContext.Provider value={{ isMobile, isLoaded }}>
        {children}
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
