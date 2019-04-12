
import React from 'react';
import classnames from 'classnames';
import TweenOne from 'rc-tween-one';
import { set, getClientSize } from 'rc-util/lib/Dom/css';
import { ThemeContext } from '@components/Themes';
import { requestAnimationFrame } from '@lib/requestAnimationFrame';
import banner1 from '@assets/images/scene/banner-1.jpg';
import banner2 from '@assets/images/scene/banner-2.jpg';
import banner3 from '@assets/images/scene/banner-3.jpg';
import banner4 from '@assets/images/scene/banner-4.jpg';
import Scene1 from './scene1';
import Scene2 from './scene2';
import Scene3 from './scene3';
import Scene4 from './scene4';
import styles from './scene.less';


const TweenOneGroup = TweenOne.TweenOneGroup;
const images = [ banner1, banner2, banner3, banner4 ];

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
      selected: {}
    };
    this.pageRef = React.createRef();
    this.pageFontRef = React.createRef();
    this.pageImageRef = React.createRef();
  }

  handleClick = ({ index, title, image }) => ({ currentTarget }) => {
    const { selected } = this.state;
    if ( !selected.animIn && !selected.animating ) {
      this.state.selected = { // eslint-disable-line
        index,
        title,
        image,
        dom: currentTarget,
        animating: true,
        animIn: true
      };
      this.forceUpdate();
    }
  };

  handleImageLoad = () => {
    const { selected } = this.state;
    const position = selected.dom.getBoundingClientRect();
    const imageStyle = this.getImageStyle();
    const fixedStyle = {
      transform: `translateX(${position.left}px) translateY(${position.top}px) translateZ(0)`,
      height: `${position.height}px`,
      width: `${position.width}px`
    };
    const fixedImageStyle = {
      ...imageStyle.style,
      transform: this.getImageTransform( position, imageStyle.size )
    };
    const fixedLastStyle = {
      transition: this.getTransition( true ),
      transform: 'translateX(0) translateY(0) translateZ(0)',
      height: '100vh',
      width: '100vw'
    };
    const fixedImageLastStyle = {
      transition: this.getImageTransition( true ),
      transform: 'translateX(0) translateY(0) translateZ(0) scale(1)'
    };
    this.state.selected = { ...selected, animating: true, animIn: true }; // eslint-disable-line
    set( this.pageRef.current, fixedStyle );
    set( this.pageImageRef.current, fixedImageStyle );
    this.forceUpdate(() => {
      // 火狐延迟一帧
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          set( this.pageRef.current, fixedLastStyle );
          set( this.pageImageRef.current, fixedImageLastStyle );
        });
      });
    });
  };

  handleBack = () => {
    const { selected } = this.state;
    if ( selected.animIn && !selected.animating ) {
      const position = selected.dom.getBoundingClientRect();
      const imageStyle = this.getImageStyle();
      const fixedStyle = {
        transition: this.getTransition( false )
      };
      const fixedImageStyle = {
        transition: this.getImageTransition( false )
      };
      const fixedLastStyle = {
        width: `${position.width}px`,
        height: `${position.height}px`,
        transform: `translateX(${position.left}px) translateY(${position.top}px) translateZ(0)`
      };
      const fixedImageLastStyle = {
        transform: this.getImageTransform( position, imageStyle.size )
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
        this.forceUpdate();
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

  getTransition = ( isIn ) => {
    const { themeVariables, thiemeEasings } = this.context;
    const animSpeed = themeVariables['@anim-speed-3'].replace( 'ms', '' );
    const ease = isIn ? thiemeEasings['@easeOutExpo'] : thiemeEasings['@easeOutQuart'];
    return Object.entries({
      width: { ease, duration: animSpeed },
      height: { ease, duration: animSpeed },
      transform: { ease, duration: animSpeed },
      opacity: { ease: '', duration: animSpeed / 4 }
    }).map(([ property, { ease, duration }]) => {
      return `${property} ${duration}ms ${ease}`;
    }).join( ',' );
  };

  getImageTransition = ( isIn ) => {
    const { themeVariables, thiemeEasings } = this.context;
    const animSpeed = themeVariables['@anim-speed-3'].replace( 'ms', '' );
    return Object.entries({
      transform: {
        ease: isIn ? thiemeEasings['@easeOutQuart'] : thiemeEasings['@easeOutExpo'],
        duration: animSpeed
      }
    }).map(([ property, { ease, duration }]) => {
      return `${property} ${duration}ms ${ease}`;
    }).join( ',' );
  };

  getImageTransform = ( position, imageSize ) => {
    const scale = position.height / imageSize.height;
    const imageWidth = imageSize.width * scale;
    return `translateX(-${( imageWidth - position.width ) / 2}px) translateY(0) translateZ(0) scale(${scale})`;
  };

  getImageStyle = () => {
    const image = this.pageImageRef.current;
    const { width, height } = getClientSize();
    const imageRatio = image.width / image.height;
    const targetSizeRatio = width / height;
    return {
      style: imageRatio > targetSizeRatio ? {
        height: '100vh'
      } : {
        width: '100vw'
      },
      size: {
        width: imageRatio > targetSizeRatio ? imageRatio * height : width,
        height: imageRatio > targetSizeRatio ? height : width / imageRatio
      }
    };
  };

  render() {
    const { index, selected } = this.state;
    return (
      <section className={classnames( 'page-view', styles.view, styles.sceneBanner )}>
        <div className={classnames( styles.solutions, {
          [styles.solutionHover]: !selected.animating
        })}>
          {[ '智慧校园', '智慧园区', '智慧建筑', '智慧能源', '其他场景' ].map(( title, index ) => {
            return (
              <div
                key={title}
                onClick={this.handleClick({ index: index + 1, title, image: images[index] })}
                className={classnames( styles.solutionBlock, styles[`sceneBanner${index + 1}`])}>
                <h2 className={styles.solutionBlockTitle}>{title}</h2>
              </div>
            );
          })}
        </div>
        <div
          ref={this.pageRef}
          onTransitionEnd={this.handleTransitionEnd( selected.animIn )}
          className={classnames( styles.solutionBlockContainer, { 'no-events': selected.animating })}>
          <img
            alt=""
            src={selected.image}
            ref={this.pageImageRef}
            onLoad={this.handleImageLoad}
            className={styles.solutionBlockContainerImage} />
          <h2 ref={this.pageFontRef} className={classnames( styles.solutionBlockTitle, {
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
