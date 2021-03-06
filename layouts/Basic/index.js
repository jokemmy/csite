
import React from 'react';
import omit from 'omit.js';
import Media from 'react-media';
import classnames from 'classnames';
import { getClientSize } from 'rc-util/lib/Dom/css';
import addEventListener from 'rc-util/lib/Dom/addEventListener';
import Mask from '@components/Mask';
import { requestAnimationFrame } from '@lib/requestAnimationFrame';
import { ThemeContext, themeVariables, themeEasings } from '@components/Themes';
import { pushLoader, popLoader, withLoaded } from '@lib/loaded';
import ImagePreLoad from '@lib/ImagePreLoad.worker';
import * as images from '@assets/preImages';
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
    requestAnimationFrame(() => {
      const scroll = document.createEvent( 'Events' );
      scroll.initEvent( 'scroll', true, true );
      window.dispatchEvent( scroll );
      this.handleScroll();
      this.handleWorker( this.props.preLoad );
    });
  }

  componentWillUnmount() {
    if ( this.scrollEvent ) {
      this.scrollEvent.remove();
      this.scrollEvent = null;
    }
  }

  handleWorker = ( currentImages = []) => {
    const worker = new ImagePreLoad();console.log(":", currentImages.concat(
      Object.values( images ).filter(( url ) => {
        return !currentImages.includes( url );
      })).map(( url ) => {
        return location.origin + url;
      }))
    worker.postMessage( currentImages.concat(
      Object.values( images ).filter(( url ) => {
        return !currentImages.includes( url );
      })).map(( url ) => {
        return location.origin + url;
      })
    );
  };

  handleScroll = () => {
    const { scrollCache, scrollClasses } = this.state;
    const { scrollClass } = this.props;
    const doc = document.body.scrollTop ? document.body : document.documentElement;
    const { cache, classes } = this.checkScroll();
    this.setState({
      scrollCache: scrollCache.join() === cache.join() ? scrollCache : cache,
      scrollClasses: scrollClasses.join() === classes.join() ? scrollClasses : classes
    }, () => {
      Object.keys( scrollClass ).forEach(( key ) => {
        const func = new Function( `return ${doc.scrollTop + this.toRealPixel( key )}` );
        if ( func() && !scrollCache.includes( key )) {
          scrollCache.push( key );
          this.setState(( state ) => {
            return { scrollClasses: [ ...state.scrollClasses, scrollClass[key] ]};
          });
        } else if ( !func() && scrollCache.includes( key )) {
          this.setState({
            scrollCache: scrollCache.filter(( k ) => k !== key ),
            scrollClasses: scrollClasses.filter(( c ) => c !== scrollClass[key])
          });
        }
      });
    });
  };

  checkScroll = () => {
    const { scrollClass } = this.props;
    const { scrollCache } = this.state;
    return Object.keys( scrollClass ).reduce(( state, key ) => {
      if ( scrollCache.includes( key )) {
        state.cache.push( key );
        state.classes.push( scrollClass[key]);
      }
      return state;
    }, {
      cache: [],
      classes: []
    });
  };

  toRealPixel = ( key ) => {
    const vh = /(\d+)vh/.exec( key );
    const { height } = getClientSize();
    if ( vh ) {
      return key.replace( /(\d+)vh/, `${Math.round( height * ~~vh[1] / 100 )}` );
    }
    return key;
  };

  render() {
    const { scrollClasses } = this.state;
    const { children, isMobile, isLoaded, themeConfig, className, env, ...props } = omit( this.props, [ 'scrollClass', 'preLoad' ]);

    return (
      <ThemeContext.Provider value={{ env, themeConfig, themeVariables, themeEasings, isMobile, isLoaded }}>
        <div {...props} className={classnames( 'page-basic', scrollClasses.join( ' ' ), className )}>
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
