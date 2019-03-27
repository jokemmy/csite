
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

  state = {
    isLoaded: false
  };

  componentDidMount() {
    this.props.whileLoaded(() => {
      this.setState({
        isLoaded: true
      });
    });
  }

  render() {
    const { children, isMobile } = this.props;
    const { isLoaded } = this.state;
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
