
import React from 'react';
import Media from 'react-media';
import classnames from 'classnames';
import addEventListener from 'rc-util/lib/Dom/addEventListener';
import Mask from '@components/Mask';
import { ThemeContext, themeVariables } from '@components/Themes';
import { pushLoader, popLoader, withLoaded } from '@lib/loaded';
import './basic.less';
import './fonts.less';



@withLoaded
class Base extends React.Component {

  state = {
    scrolled: false
  };

  componentDidMount() {
    this.handleScroll();
    this.scrollEvent = addEventListener( document, 'scroll', this.handleScroll );
  }

  componentWillUnmount() {
    if ( this.scrollEvent ) {
      this.scrollEvent.remove();
      this.scrollEvent = null;
    }
  }

  handleScroll = () => {
    const { scrolled } = this.state;
    const doc = document.body.scrollTop ? document.body : document.documentElement;
    if ( doc.scrollTop >= 300 && !scrolled ) {
      this.setState({ scrolled: true });
    } else if ( doc.scrollTop < 300 ) {
      this.setState({ scrolled: false });
    }
  };

  render() {
    const { scrolled } = this.state;
    const { children, isMobile, isLoaded, className, ...props } = this.props;
    return (
      <ThemeContext.Provider value={{ themeVariables, isMobile, isLoaded }}>
        <div {...props} className={classnames( 'page-basic', className, {
          'page-scrolled': scrolled
        })}>
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
