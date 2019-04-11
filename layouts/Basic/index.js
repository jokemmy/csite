
import React from 'react';
import omit from 'omit.js';
import Media from 'react-media';
import classnames from 'classnames';
import { getScroll } from 'rc-util/lib/Dom/css';
import addEventListener from 'rc-util/lib/Dom/addEventListener';
import Mask from '@components/Mask';
import { ThemeContext, themeVariables } from '@components/Themes';
import { pushLoader, popLoader, withLoaded } from '@lib/loaded';
import './basic.less';
import './fonts.less';



@withLoaded
class Base extends React.Component {

  static defaultProps = {
    scrollClass: {}
  };

  state = {
    scrollClasses: [],
    scrollCache: []
  };

  componentDidMount() {
    this.scrollEvent = addEventListener( document, 'scroll', this.handleScroll );
    const { scrollTop } = getScroll();
    if ( scrollTop > 0 ) {
      const scroll = document.createEvent( 'Events' );
      scroll.initEvent( 'scroll', true, true );
      window.dispatchEvent( scroll );
    }
  }

  componentWillUnmount() {
    if ( this.scrollEvent ) {
      this.scrollEvent.remove();
      this.scrollEvent = null;
    }
  }

  handleScroll = () => {
    const { scrollCache, scrollClasses } = this.state;
    const { scrollClass } = this.props;
    const doc = document.body.scrollTop ? document.body : document.documentElement;
    Object.keys( scrollClass ).forEach(( key ) => {
      const func = new Function( `return ${doc.scrollTop + key}` );
      if ( func() && !scrollCache.includes( key )) {
        scrollCache.push( key );
        this.setState({ scrollClasses: [ ...scrollClasses, scrollClass[key] ]});
      } else if ( !func() && scrollCache.includes( key )) {
        this.setState({
          scrollCache: scrollCache.filter(( k ) => k !== key ),
          scrollClasses: scrollClasses.filter(( c ) => c !== scrollClass[key])
        });
      }
    });
  };

  render() {
    const { scrollClasses } = this.state;
    const { children, isMobile, isLoaded, className, ...props } = omit( this.props, ['scrollClass']);
    return (
      <ThemeContext.Provider value={{ themeVariables, isMobile, isLoaded }}>
        <div {...props} className={classnames( 'page-basic', className, scrollClasses.join( ' ' ))}>
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
