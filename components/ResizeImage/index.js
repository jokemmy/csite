
import React from 'react';
import is from 'whatitis';
import omit from 'omit.js';
import pick from 'object.pick';
import { set, get } from 'rc-util/lib/Dom/css';
import addEventListener from 'rc-util/lib/Dom/addEventListener';
import { ThemeContext } from '@components/Themes';
import { requestAnimationFrame } from '@lib/requestAnimationFrame';
import styles from './resizeImage.less';


class ResizeImage extends React.Component {

  static contextType = ThemeContext;

  static getDerivedStateFromProps( props, state ) {
    if ( props.width && !state.width ) {
      return { width: props.width };
    }
    return null;
  }

  constructor( props ) {
    super( props );
    this.wrapRef = React.createRef();
    this.containerRef = React.createRef();
    this.state = {
      width: null,
      height: null
    };
  }

  componentDidMount() {
    const { width } = this.state;
    const { onInit } = this.props;
    const { themeVariables } = this.context;
    // eslint-disable-next-line
    this.state.width = width === null ? +themeVariables['@page-width'].replace( /px$/, '' ) - 24 * 2 : width;
    this.resizeHandler = addEventListener( window, 'resize', this.handleResize );
    this.handleResize();
    if ( is.Function( onInit )) {
      onInit( this.handleResize );
    }
  }

  componentWillUnmount() {
    if ( this.resizeHandler ) {
      this.resizeHandler.remove();
      this.resizeHandler = null;
    }
  }

  handleResize = () => {
    requestAnimationFrame(() => {
      if ( this.wrapRef.current ) {
        const { width } = this.state;
        const wrap = this.wrapRef.current;
        const container = this.containerRef.current;
        const currentWidth = get( wrap, 'width' );
        const targetHeight = get( container, 'height' );
        const scale = currentWidth / width;
        set( container, 'transform', `scale(${scale})` );
        set( wrap, 'height', targetHeight * scale );
      }
    });
  };

  render() {

    const { width, height } = this.state;
    const { themeVariables } = this.context;
    const { children, ...props } = this.props;

    // width 一定要设置默认
    let style = {
      // 最大宽度减 pandding
      width: width === null ? +themeVariables['@page-width'].replace( /px$/, '' ) - 24 * 2 : width,
      height
    };
    style = pick( style, Object.keys( style ).filter( key => style[key]));

    return (
      <div {...omit( props, ['onInit'])} ref={this.wrapRef}>
        <div style={style} className={styles.container} ref={this.containerRef}>
          {children}
        </div>
      </div>
    );
  }
}

export default ResizeImage;
