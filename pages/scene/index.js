
import React from 'react';
import is from 'whatitis';
import classnames from 'classnames';
import TweenOne from 'rc-tween-one';
import { set, get, getClientSize } from 'rc-util/lib/Dom/css';
import { ThemeContext } from '@components/Themes';
import { requestAnimationFrame } from '@lib/requestAnimationFrame';
// import banner1 from '@assets/images/scene/banner-1.jpg';
// import banner2 from '@assets/images/scene/banner-2.jpg';
// import banner3 from '@assets/images/scene/banner-3.jpg';
// import banner4 from '@assets/images/scene/banner-4.jpg';
/*import Banner from '@components/Banner';
import SvgIcon from '@components/SvgIcon';
import banner from '@assets/images/scene/banner.jpg';
import banner1 from '@assets/images/scene/banner-1.jpg';
import banner2 from '@assets/images/scene/banner-2.jpg';
import banner3 from '@assets/images/scene/banner-3.jpg';
import banner4 from '@assets/images/scene/banner-4.jpg';
import back from '@assets/images/scene/back.svg?sprite';
import zhinengfenxi from '@assets/images/scene/zhinengfenxi.svg?sprite';
import wuliankeji from '@assets/images/scene/wuliankeji.svg?sprite';
import xitongronghe from '@assets/images/scene/xitongronghe.svg?sprite';
import lianwangzhihui from '@assets/images/scene/lianwangzhihui.svg?sprite';*/
import Scene1 from './scene1';
import Scene2 from './scene2';
import Scene3 from './scene3';
import Scene4 from './scene4';
import styles from './scene.less';


const TweenOneGroup = TweenOne.TweenOneGroup;

class Scene extends React.Component {

  static contextType = ThemeContext;

  static getInitialProps = async ( ctx_ ) => {
    const layoutProps = {
      header: {
        transparent: true
      },
      footer: false,
      title: '解决方案'
    };
    return { layoutProps };
  };

  constructor( props ) {
    super( props );
    this.state = {
      index: 0,
      animating: false,
      mouseHovered: {},
      selected: {}
    };
    this.pageRef = React.createRef();
    this.pageImageRef = React.createRef();
  }

  handleEnter = ({ index, title, className }) => ({ currentTarget }) => {
    this.state.mouseHovered = { index, title, className, dom: currentTarget }; // eslint-disable-line
  };

  handleClick = ({ currentTarget }) => {
    const { selected } = this.state;
    if ( !selected.animIn && !selected.animating ) {
      const { mouseHovered } = this.state;
      const newPosition = currentTarget.getBoundingClientRect();
      const scale = this.getScale( currentTarget );
      const fixedStyle = {
        transform: `translate3d(${newPosition.left}px, ${newPosition.top}px, 0)`,
        height: `${newPosition.height}px`,
        width: `${newPosition.width}px`
      };
      const fixedImageStyle = {
        transform: `translate3d(-50%, 0, 0) scale3d(${scale}, ${scale}, 1)`,
        left: '50%'
      };
      const fixedLastStyle = {
        transition: this.getTransition(),
        transform: 'translate3d(0, 0, 0)',
        height: '100vh',
        width: '100vw'
      };
      const fixedImageLastStyle = {
        left: 0,
        transition: this.getTransition(),
        transform: 'translate3d(0, 0, 0) scale3d(1, 1, 1)'
      };
      this.state.selected = { ...mouseHovered, animating: true, animIn: true }; // eslint-disable-line
      this.forceUpdate(() => {
        set( this.pageRef.current, fixedStyle );
        set( this.pageImageRef.current, fixedImageStyle );
        requestAnimationFrame(() => {
          set( this.pageRef.current, fixedLastStyle );
          set( this.pageImageRef.current, fixedImageLastStyle );
        });
      });
    }
  };

  handleBack = () => {
    const { selected } = this.state;
    if ( selected.animIn && !selected.animating ) {
      const { dom } = selected;
      const position = dom.getBoundingClientRect();
      const scale = this.getScale( position.height );
      const fixedStyle = {
        transition: this.getTransition()
      };
      const fixedImageStyle = {
        transition: this.getTransition()
      };
      const fixedLastStyle = {
        width: `${position.width}px`,
        height: `${position.height}px`,
        transform: `translate3d(${position.left}px, ${position.top}px, 0)`
      };
      const fixedImageLastStyle = {
        left: '50%',
        transform: `translate3d(-50%, 0, 0) scale3d(${scale}, ${scale}, 1)`
      };
      this.state.selected = { ...selected, animating: true, animIn: false }; // eslint-disable-line
      this.forceUpdate(() => {
        set( this.pageRef.current, fixedStyle );
        set( this.pageImageRef.current, fixedImageStyle );
        requestAnimationFrame(() => {
          set( this.pageRef.current, fixedLastStyle );
          set( this.pageImageRef.current, fixedImageLastStyle );
        });
      });
    }
  };

  // 有这个函数会有多次触发,即每个属性触发一次,每个子元素也会触发
  handleTransitionEnd = ( animIn ) => ( e ) => {
    const { selected } = this.state;
    const isTransform = e.nativeEvent.propertyName === 'transform';
    const isOpacity = e.nativeEvent.propertyName === 'opacity';
    if ( e.target === e.currentTarget ) {
      e.preventDefault();
      e.stopPropagation();
    }
    if ( isOpacity && e.target === e.currentTarget ) {
      this.state.selected = {}; // eslint-disable-line
      requestAnimationFrame(() => {
        this.pageRef.current.removeAttribute( 'style' );
        this.pageImageRef.current.removeAttribute( 'style' );
      });
    } else if ( selected.animating && e.target === e.currentTarget ) {
      if ( isTransform ) {
        if ( animIn ) {
          this.state.selected = { ...selected, animating: false }; // eslint-disable-line
          this.setState({
            index: selected.index
          }, () => {
            requestAnimationFrame(() => {
              this.pageRef.current.setAttribute( 'style', 'height:100vh;width:100vw;' );
            });
          });
        } else {
          this.setState({
            index: 0
          }, () => {
            requestAnimationFrame(() => {
              set( this.pageRef.current, { opacity: 0.001 });
            });
          });
        }
      }
    }
  };

  getTransition = () => {
    const { themeVariables } = this.context;
    const animSpeed = themeVariables['@anim-speed-3'].replace( 'ms', '' );
    return Object.entries({
      left: { ease: 'ease', duration: animSpeed },
      width: { ease: 'ease', duration: animSpeed },
      height: { ease: 'ease', duration: animSpeed },
      transform: { ease: 'ease', duration: animSpeed },
      opacity: { ease: 'ease', duration: animSpeed / 4 }
    }).map(([ property, { ease, duration }]) => {
      return `${property} ${duration}ms ${ease}`;
    }).join( ',' );
  };

  getScale = ( target ) => {
    const clientSize = getClientSize();
    const height = is.Number( target ) ? target : target.getBoundingClientRect().height;
    return height / clientSize.height;
  };

  render() {
    const { index, selected } = this.state;
    return (
      <section className={classnames( 'page-view', styles.view, styles.sceneBanner )}>
        <div className={styles.solutions}>
          {[ '智慧校园', '智慧园区', '智慧建筑', '智慧能源', '其他场景' ].map(( title, index ) => {
            return (
              <div
                key={title}
                onClick={this.handleClick}
                onMouseEnter={this.handleEnter({ index: index + 1, title, className: styles[`sceneBanner${index + 1}`] })}
                className={classnames( styles.solutionBlock, styles[`sceneBanner${index + 1}`])}>
                <h2 className={styles.solutionBlockTitle}>{title}</h2>
              </div>
            );
          })}
        </div>
        <div
          ref={this.pageRef}
          className={styles.solutionBlockContainer}
          onTransitionEnd={this.handleTransitionEnd( selected.animIn )}>
          <div ref={this.pageImageRef} className={classnames( styles.solutionBlockContainerImage, selected.className )} />
          <h2 className={classnames( styles.solutionBlockTitle, {
            [styles.hidden]: selected.animIn && !selected.animating,
            [styles.transparent]: selected.animIn && selected.animating
          })}>{selected.title}</h2>
          <TweenOneGroup
            component=""
            appear={false}
            enter={{ opacity: 0, type: 'from', duration: 400, ease: 'easeInCubic' }}
            leave={{ opacity: 0, duration: 300, ease: 'easeOutQuint' }}>
            {!selected.animating && selected.animIn ? index === 1 ? (
              <Scene1 key="1" onBack={this.handleBack} />
            ) : index === 2 ? (
              <Scene2 key="2" onBack={this.handleBack} />
            ) : index === 3 ? (
              <Scene3 key="3" onBack={this.handleBack} />
            ) : (
              <Scene4 key="4" onBack={this.handleBack} />
            ) : null}
          </TweenOneGroup>
        </div>
      </section>
    );
  }
}


export default Scene;
