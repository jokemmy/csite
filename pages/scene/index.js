
import React from 'react';
import classnames from 'classnames';
import TweenOne from 'rc-tween-one';
import { set } from 'rc-util/lib/Dom/css';
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
  }

  handleEnter = ({ index, title, className }) => ({ currentTarget }) => {
    this.state.mouseHovered = { index, title, className, dom: currentTarget }; // eslint-disable-line
  };

  handleClick = ({ currentTarget }) => {
    const { selected } = this.state;
    if ( !selected.animIn && !selected.animating ) {
      const { mouseHovered } = this.state;
      const newPosition = currentTarget.getBoundingClientRect();
      const fixedStyle = {
        width: `${newPosition.width}px`,
        height: `${newPosition.height}px`,
        transform: `translateX(${newPosition.left}px) translateY(${newPosition.top}px)`
      };
      const fixedLastStyle = {
        transition: this.getTransition(),
        transform: 'translateX(0) translateY(0)',
        height: '100vh',
        width: '100vw'
      };
      this.state.selected = { ...mouseHovered, animating: true, animIn: true }; // eslint-disable-line
      this.forceUpdate(() => {
        set( this.pageRef.current, fixedStyle );
        requestAnimationFrame(() => {
          set( this.pageRef.current, fixedLastStyle );
        });
      });
    }
  };

  handleBack = () => {
    const { selected } = this.state;
    if ( selected.animIn && !selected.animating ) {
      const { dom } = selected;
      const position = dom.getBoundingClientRect();
      const fixedStyle = {
        transition: this.getTransition()
      };
      const fixedLastStyle = {
        width: `${position.width}px`,
        height: `${position.height}px`,
        transform: `translateX(${position.left}px) translateY(${position.top}px)`
      };
      this.state.selected = { ...selected, animating: true, animIn: false }; // eslint-disable-line
      this.forceUpdate(() => {
        set( this.pageRef.current, fixedStyle );
        requestAnimationFrame(() => {
          set( this.pageRef.current, fixedLastStyle );
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
    if ( !selected.animating && isOpacity && e.target === e.currentTarget ) {
      this.state.selected = {}; // eslint-disable-line
      requestAnimationFrame(() => {
        this.pageRef.current.removeAttribute( 'style' );
      });
    } else if ( selected.animating && e.target === e.currentTarget ) {
      if ( isTransform ) {
        this.state.selected = { ...selected, animating: false }; // eslint-disable-line
        if ( animIn ) {
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
      width: { ease: 'ease', duration: animSpeed },
      height: { ease: 'ease', duration: animSpeed },
      opacity: { ease: 'ease', duration: animSpeed / 2 },
      transform: { ease: 'ease', duration: animSpeed },
      'background-position': { ease: 'ease', duration: animSpeed }
    }).map(([ property, { ease, duration }]) => {
      return `${property} ${duration}ms ${ease}`;
    }).join( ',' );
  };

  render() {

    const { index, selected } = this.state;

    return (
      <section className={classnames( 'page-view', styles.view, styles.sceneBanner )}>
        <div className={styles.solutions}>
          <h1>解决方案<span>Best Solutions</span></h1>
          <div className={styles.solutionsContent}>
            {[ '智慧全区', '智慧校园', '智慧建筑', '其他场景' ].map(( title, index ) => {
              return (
                <div
                  key={title}
                  onMouseEnter={this.handleEnter({ index: index + 1, title, className: styles[`sceneBanner${index + 1}`] })}
                  className={classnames( styles.solutionBlock, styles[`sceneBanner${index + 1}`])}
                  onClick={this.handleClick}>
                  <h2 className={styles.solutionBlockTitle}>{title}</h2>
                </div>
              );
            })}
          </div>
        </div>
        <div
          ref={this.pageRef}
          onTransitionEnd={this.handleTransitionEnd( selected.animIn )}
          className={classnames( styles.solutionBlockContainer, selected.className )}>
          <h2 className={classnames( styles.solutionBlockTitle, {
            [styles.hidden]: selected.animIn && !selected.animating,
            [styles.transparent]: selected.animIn && selected.animating
          })}>{selected.title}</h2>
          <TweenOneGroup
            component=""
            appear={false}
            enter={{ opacity: 0, type: 'from', duration: 300, ease: 'easeOutQuart' }}
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
