
import React from 'react';
import classnames from 'classnames';
import Router, { withRouter } from 'next/router';
import { set, get, getClientSize } from 'rc-util/lib/Dom/css';
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


const images = [ banner1, banner2, banner3, banner4 ];
const scenes = [{
  as: '/scene/1',
  url: '/scene?id=1',
  name: '智慧能源'
}, {
  as: '/scene/2',
  url: '/scene?id=2',
  name: '智慧校园'
}, {
  as: '/scene/3',
  url: '/scene?id=3',
  name: '智慧建筑'
}, {
  as: '/scene/4',
  url: '/scene?id=4',
  name: '智慧园区'
}];

@withRouter
class Scene extends React.Component {

  static contextType = ThemeContext;

  static getInitialProps = async ( ctx_ ) => {
    const layoutProps = {
      header: {
        transparent: true
      },
      footer: false,
      pageProps: {
        scrollClass: {
          '>=0': 'page-header-hold',
          '>=100vh-64': 'page-header-dark banner-menu-fixed'
        }
      },
      title: '解决方案'
    };
    return { layoutProps };
  };

  static getDerivedStateFromProps = ( props, state ) => {
    // 参数 category: >=1&<=6
    const { router } = props;
    const index = ~~router.query.id;
    if ( index > 0 && index <= scenes.length ) {
      if ( state.index === 0 && Object.keys( state.selected ).length ) {
        return null;
      } else if ( state.index === 0 ) {
        return {
          toFront: true,
          selected: {
            index,
            title: scenes[index - 1].name,
            image: images[index - 1],
            className: styles[`sceneBanner${index}`],
            dom: null
          }
        };
      }
      return {
        index,
        selected: {
          index,
          title: scenes[index - 1].name,
          image: images[index - 1],
          className: styles[`sceneBanner${index}`],
          animIn: true,
          animating: false,
          dom: null
        }
      };
    } else if ( state.index !== index && index === 0 ) {
      return !state.toBack ? {
        toBack: true
      } : null;
    } else if ( router.query.category ) {
      Router.replace( '/scene', '/scene', { shallow: true });
    }
    return null;
  };

  constructor( props ) {
    super( props );
    const { router } = this.props;
    const index = ~~router.query.id;
    this.state = {
      toBack: false,
      toFront: false,
      index: index || 0,
      animating: false,
      selected: {}
    };
    this.viewRef = React.createRef();
    this.pageRef = React.createRef();
    this.pageFontRef = React.createRef();
    this.pageImageRef = React.createRef();
    this.sceneRef = React.createRef();
  }

  componentDidUpdate( prevProps_, prevState ) {
    const { toBack, toFront, selected } = this.state;
    if ( !prevState.toBack && toBack ) {
      this.setState({
        toBack: false,
        selected: { ...selected, dom: this.sceneRef.current }
      }, this.handleBack );
    }
    if ( !prevState.toFront && toFront ) {
      this.setState({
        toFront: false,
        selected: { ...selected, dom: this.sceneRef.current }
      });
    }
  }

  handleClick = ({ index, title, image, className }) => ({ currentTarget }) => {
    const { selected } = this.state;
    if ( !selected.animIn && !selected.animating ) {
      this.state.selected = { // eslint-disable-line
        index,
        title,
        image,
        className,
        dom: currentTarget
      };
      this.forceUpdate(() => {
        Router.push( `/scene?id=${index}`, `/scene/${index}`, { shallow: true });
      });
    }
  };

  handleImageLoad = () => {
    const { selected } = this.state;
    const position = selected.dom.getBoundingClientRect();
    const fixedStyle = this.getBlockStyle( position );
    const viewSize = {
      width: get( this.viewRef.current, 'width' ),
      height: get( this.viewRef.current, 'height' )
    };
    const imageSize = this.getImageSize( viewSize );
    const fixedImageStyle = {
      ...this.getImageStyle( imageSize, position, 0.75 )
    };
    const fixedLastStyle = {
      transition: this.getTransition( true ),
      transform: 'translateX(0) translateY(0) translateZ(0)',
      height: '100vh',
      width: '100vw'
    };
    const fixedImageLastStyle = {
      transition: this.getImageTransition( true ),
      transform: this.getImageCoverTransform( imageSize, viewSize )
    };
    this.state.selected = { ...selected, animating: true, animIn: true }; // eslint-disable-line
    this.forceUpdate(() => {
      set( this.pageRef.current, fixedStyle );
      set( this.pageImageRef.current, fixedImageStyle );
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
      const viewSize = {
        width: get( this.viewRef.current, 'width' ),
        height: get( this.viewRef.current, 'height' )
      };
      const imageSize = this.getImageSize( viewSize );
      const fixedStyle = {
        width: '100vw',
        height: '100vh',
        transform: `translateX(0) translateY(0) translateZ(0)`
      };
      const fixedImageStyle = {
        ...this.getImageStyle( imageSize, viewSize )
      };
      const fixedLastStyle = {
        width: `${position.width}px`,
        height: `${position.height}px`,
        transition: this.getTransition( false ),
        transform: `translateX(${position.left}px) translateY(${position.top}px) translateZ(0)`
      };
      const fixedImageLastStyle = {
        transition: this.getImageTransition( false ),
        transform: this.getImageCoverTransform( imageSize, position, 0.75 )
      };
      this.state.selected = { ...selected, animating: true, animIn: false }; // eslint-disable-line
      this.forceUpdate(() => {
        set( this.pageRef.current, fixedStyle );
        set( this.pageImageRef.current, fixedImageStyle );
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            set( this.pageRef.current, fixedLastStyle );
            set( this.pageImageRef.current, fixedImageLastStyle );
          });
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
            index: 0,
            toBack: false
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
    const { themeVariables, themeEasings } = this.context;
    const animSpeed = themeVariables['@anim-speed-2'].replace( 'ms', '' );
    const ease = isIn ? themeEasings['@easeOutExpo'] : themeEasings['@easeOutCirc'];
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
    const { themeVariables, themeEasings } = this.context;
    const animSpeed = isIn
      ? +themeVariables['@anim-speed-3'].replace( 'ms', '' ) + 32
      : themeVariables['@anim-speed-3'].replace( 'ms', '' );;
    return Object.entries({
      transform: {
        ease: isIn ? themeEasings['@easeOutCirc'] : themeEasings['@easeOutExpo'],
        duration: animSpeed
      }
    }).map(([ property, { ease, duration }]) => {
      return `${property} ${duration}ms ${ease}`;
    }).join( ',' );
  };

  getBlockStyle = ( position ) => {
    return {
      width: `${position.width}px`,
      height: `${position.height}px`,
      transform: `translateX(${position.left}px) translateY(${position.top}px) translateZ(0)`
    };
  };

  getImageSize = ( cover ) => {
    const image = this.pageImageRef.current;
    const { width, height } = cover || getClientSize();
    const imageRatio = image.width / image.height;
    const targetRatio = width / height;
    return {
      width: imageRatio > targetRatio ? imageRatio * height : width,
      height: imageRatio > targetRatio ? height : width / imageRatio
    };
  };

  getImageStyle = ( coverSize, target, percent ) => {
    return {
      ...coverSize,
      transform: this.getImageCoverTransform( coverSize, target, percent )
    };
  };

  getImageCoverTransform = ( image, target, percent = 0.5 ) => {
    const imageRatio = image.width / image.height;
    const targetRatio = target.width / target.height;
    if ( imageRatio > targetRatio ) {
      const scale = target.height / image.height;
      const imageWidth = image.width * scale;
      const w = ( imageWidth - target.width ) * -percent;
      return `translateX(${w}px) translateY(0) translateZ(0) scale(${Math.ceil( scale * 1000 ) / 1000})`;
    }
    const scale = target.width / image.width;
    const imageHeight = image.height * scale;
    const h = ( imageHeight - target.height ) * -percent;
    return `translateX(0) translateY(${h}px) translateZ(0) scale(${Math.ceil( scale * 1000 ) / 1000})`;
  };

  render() {
    const { index, selected } = this.state;
    return (
      <>
        <section ref={this.viewRef} className={classnames( styles.view, styles.sceneBanner )}>
          <div className={classnames( styles.solutions, {
            [styles.solutionHover]: !selected.animating && !selected.animIn,
            [styles.unVisibility]: selected.animIn && !selected.animating,
            'no-events': selected.animating || selected.animIn
          })}>
            {scenes.map(({ name }, index ) => {
              return (
                <div
                  key={name}
                  ref={index + 1 === selected.index ? this.sceneRef : null}
                  onClick={this.handleClick({
                    title: name,
                    index: index + 1,
                    image: images[index],
                    className: styles[`sceneBanner${index + 1}`]
                  })}
                  className={classnames( styles.solutionBlock, styles[`sceneBanner${index + 1}`], {
                    [styles.unVisibility]: selected.animIn
                      ? selected.index === index + 1 && ( selected.animating || selected.animIn )
                      : selected.index === index + 1 && this.state.index !== 0
                  })}>
                  <h2 className={styles.solutionBlockTitle}>{name}</h2>
                </div>
              );
            })}
          </div>
        </section>
        <div
          ref={this.pageRef}
          onTransitionEnd={this.handleTransitionEnd( selected.animIn )}
          className={classnames( styles.solutionBlockContainer, { 'no-events': selected.animating })}>
          <img
            alt=""
            src={selected.image}
            ref={this.pageImageRef}
            onLoad={!selected.animIn ? this.handleImageLoad :null}
            style={selected.animIn && !selected.animating ? { display: 'none' } : {}}
            className={styles.solutionBlockContainerImage} />
          <h2 ref={this.pageFontRef} className={classnames( styles.solutionBlockTitle, {
            [styles.hidden]: selected.animIn && !selected.animating,
            [styles.transparent]: selected.animIn && selected.animating
          })}>{selected.title}</h2>
        </div>
        {!selected.animating && selected.animIn ? index === 1 ? (
          <Scene1 key="1" router={this.props.router} bannerImage={selected.image} />
        ) : index === 2 ? (
          <Scene2 key="2" router={this.props.router} bannerImage={selected.image} />
        ) : index === 3 ? (
          <Scene3 key="3" router={this.props.router} bannerImage={selected.image} />
        ) : (
          <Scene4 key="4" router={this.props.router} bannerImage={selected.image} />
        ) : null}
      </>
    );
  }
}


export default Scene;
