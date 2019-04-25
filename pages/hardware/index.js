
import classnames from 'classnames';
import React, { Fragment } from 'react';
import SvgIcon from '@components/SvgIcon';
import Router, { withRouter } from 'next/router';
import { ThemeContext } from '@components/Themes';
import { set, getClientSize } from 'rc-util/lib/Dom/css';
import { requestAnimationFrame } from '@lib/requestAnimationFrame';
import category1 from '@assets/images/hardware/category-1.jpg';
import category2 from '@assets/images/hardware/category-2.jpg';
import category3 from '@assets/images/hardware/category-3.jpg';
import category4 from '@assets/images/hardware/category-4.jpg';
import category5 from '@assets/images/hardware/category-5.jpg';
import category6 from '@assets/images/hardware/category-6.jpg';
import categorySvg1 from '@assets/images/hardware/category-icon-1.svg?sprite';
import categorySvg2 from '@assets/images/hardware/category-icon-2.svg?sprite';
import categorySvg3 from '@assets/images/hardware/category-icon-3.svg?sprite';
import categorySvg4 from '@assets/images/hardware/category-icon-4.svg?sprite';
import categorySvg5 from '@assets/images/hardware/category-icon-5.svg?sprite';
import categorySvg6 from '@assets/images/hardware/category-icon-6.svg?sprite';
import { categorys } from './productions';
import Category from './category';
import styles from './hardware.less';


const images = [ category1, category2, category3, category4, category5, category6 ];
const icons = [ categorySvg1, categorySvg2, categorySvg3, categorySvg4, categorySvg5, categorySvg6 ];

@withRouter
class Hardware extends React.Component {

  static contextType = ThemeContext;

  static getInitialProps = async function( ctx_ ) {
    const darkTop = `>=${300 - 64}`;
    const layoutProps = {
      pageProps: {
        scrollClass: {
          '>=0': 'page-header-hold',
          [darkTop]: 'page-header-dark banner-menu-fixed'
        }
      },
      header: {
        transparent: true
      },
      footer: false,
      title: '智能硬件'
    };
    return { layoutProps };
  };

  static getDerivedStateFromProps = ( props, state ) => {
    // 参数 category: >=1&<=6
    const { router } = props;
    const index = ~~router.query.category;
    if ( index > 0 && index <= categorys.length ) {
      if ( state.index === 0 && Object.keys( state.selected ).length ) {
        return null;
      } else if ( state.index === 0 ) {
        return {
          toFront: true,
          selected: {
            index,
            title: categorys[index - 1].name,
            image: images[index - 1],
            className: styles[`itemImage${index}`],
            dom: null
          }
        };
      }
      return {
        index,
        selected: {
          index,
          title: categorys[index - 1].name,
          image: images[index - 1],
          className: styles[`itemImage${index}`],
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
      Router.replace( '/hardware', '/hardware', { shallow: true });
    }
    return null;
  };

  constructor( props ) {
    super( props );
    const { router } = this.props;
    const index = ~~router.query.category;
    this.state = {
      toBack: false,
      toFront: false,
      index: index || 0,
      animating: false,
      selected: {}
    };
    this.pageRef = React.createRef();
    this.pageFontRef = React.createRef();
    this.categoryRef = React.createRef();
    this.pageImageRef = React.createRef();
    this.pageFakeContantRef = React.createRef();
  }

  componentDidUpdate( prevProps_, prevState ) {
    const { toBack, toFront, selected } = this.state;
    if ( !prevState.toBack && toBack ) {
      this.setState({
        toBack: false,
        selected: { ...selected, dom: this.categoryRef.current }
      }, this.handleBack );
    }
    if ( !prevState.toFront && toFront ) {
      this.setState({
        toFront: false,
        selected: { ...selected, dom: this.categoryRef.current }
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
        Router.push( `/hardware?category=${index}`, `/hardware/${index}`, { shallow: true });
      });
    }
  };

  handleImageLoad = () => {
    const { selected } = this.state;
    const position = selected.dom.getBoundingClientRect();
    const fixedStyle = this.getBlockStyle( position );
    const imageSize = this.getImageSize();
    const clientSize = getClientSize();
    const fixedImageStyle = {
      opacity: 0,
      visibility: 'visible',
      ...this.getImageStyle( imageSize, position )
    };
    const fixedFakeContantStyle = {
      // opacity: 0,
      transform: 'translateY(100vh)'
    };
    const fixedFakeContantLastStyle = {
      // opacity: 1,
      transform: 'translateY(350px)'
    };
    const fixedLastStyle = {
      transition: this.getTransition( true ),
      transform: 'translateX(0) translateY(0) translateZ(0)',
      height: '100vh',
      width: '100vw'
    };
    const fixedImageLastStyle = {
      opacity: 1,
      visibility: 'visible',
      transition: this.getImageTransition( true ),
      transform: this.getImageCoverTransform( imageSize, { width: clientSize.width, height: 350 })
    };
    this.state.selected = { ...selected, animating: true, animIn: true }; // eslint-disable-line
    this.forceUpdate(() => {
      set( this.pageRef.current, fixedStyle );
      set( this.pageImageRef.current, fixedImageStyle );
      set( this.pageFakeContantRef.current, fixedFakeContantStyle );
      // 火狐延迟一帧
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          set( this.pageRef.current, fixedLastStyle );
          set( this.pageImageRef.current, fixedImageLastStyle );
          set( this.pageFakeContantRef.current, fixedFakeContantLastStyle );
        });
      });
    });
  };

  handleBack = () => {
    const { selected } = this.state;
    if ( selected.animIn && !selected.animating ) {
      const position = selected.dom.getBoundingClientRect();
      const bannerPosition = Category.getBannerPosition();
      const imageSize = this.getImageSize();
      const imageCoverSize = this.getImageSize( bannerPosition );
      const imageStyle = this.getImageStyle( imageSize, bannerPosition );
      const fixedStyle = {
        width: `${imageCoverSize.width}px`,
        height: `${imageCoverSize.height}px`,
        transform: `translateX(${( bannerPosition.width - imageCoverSize.width ) / 2}px) translateY(${( bannerPosition.height - imageCoverSize.height ) / 2}px) translateZ(0)`
      };
      const fixedImageStyle = {
        opacity: 1,
        visibility: 'visible',
        ...imageStyle
      };
      const fixedFakeContantStyle = {
        opacity: 0.999,
        transform: 'translateY(350px)'
      };
      const fixedFakeContantLastStyle = {
        opacity: 0.001,
        transform: 'translateY(100vh)'
      };
      const fixedLastStyle = {
        transition: this.getTransition( false ),
        width: `${position.width}px`,
        height: `${position.height}px`,
        transform: `translateX(${position.left}px) translateY(${position.top}px) translateZ(0)`
      };
      const fixedImageLastStyle = {
        opacity: 0,
        visibility: 'visible',
        transition: this.getImageTransition( false ),
        transform: this.getImageCoverTransform( imageSize, position )
      };
      this.state.selected = { ...selected, animating: true, animIn: false }; // eslint-disable-line
      this.forceUpdate(() => {
        set( this.pageRef.current, fixedStyle );
        set( this.pageImageRef.current, fixedImageStyle );
        set( this.pageFakeContantRef.current, fixedFakeContantStyle );
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            set( this.pageRef.current, fixedLastStyle );
            set( this.pageImageRef.current, fixedImageLastStyle );
            set( this.pageFakeContantRef.current, fixedFakeContantLastStyle );
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
        this.pageFakeContantRef.current.removeAttribute( 'style' );
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
    const { themeVariables, thiemeEasings } = this.context;
    const animSpeed = themeVariables['@anim-speed-3'].replace( 'ms', '' );
    const ease = isIn ? thiemeEasings['@easeOutExpo'] : thiemeEasings['@easeOutCirc'];
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
      opacity: { ease: '', duration: animSpeed },
      transform: {
        ease: isIn ? thiemeEasings['@easeOutCirc'] : thiemeEasings['@easeOutExpo'],
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
      <Fragment>
        <section className={styles.view}>
          <div className={styles.navigation}>
            <div className={classnames( styles.category, {
              [styles.hover]: !selected.animating && !selected.animIn,
              [styles.unVisibility]: selected.animIn && !selected.animating,
              'no-events': selected.animating || selected.animIn
            })}>
              {categorys.map(({ name }, index ) => {
                return (
                  <div
                    key={name}
                    ref={index + 1 === selected.index ? this.categoryRef : null}
                    onClick={this.handleClick({
                      title: name,
                      index: index + 1,
                      image: images[index],
                      className: styles[`itemImage${index + 1}`]
                    })}
                    className={classnames( styles.item, styles[`itemImage${index + 1}`], {
                      // [styles.unVisibility]: selected.animIn
                      //   ? selected.index === index + 1 && ( selected.animating || selected.animIn )
                      //   : selected.index === index + 1 && this.state.index !== 0
                    })}>
                    <h2 className={styles.categoryTitle}>{name}</h2>
                    <SvgIcon className={styles.categoryIcon} icon={icons[index]} />
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        <section
          ref={this.pageRef}
          className={styles.container}
          onTransitionEnd={this.handleTransitionEnd( selected.animIn )}>
          <img
            alt=""
            src={selected.image}
            ref={this.pageImageRef}
            onLoad={!selected.animIn ? this.handleImageLoad :null}
            style={selected.animIn && !selected.animating ? { display: 'none' } : {}}
            className={styles.containerImage} />
          <h2 ref={this.pageFontRef} className={classnames( styles.categoryTitle, {
            [styles.hidden]: selected.animIn && !selected.animating,
            [styles.transparent]: selected.animIn && selected.animating
          })}>{selected.title}</h2>
        </section>
        <div
          ref={this.pageFakeContantRef}
          className={styles.fakeContant}
          style={!selected.animating ? { display: 'none' } : {}} />
        {selected.animIn && index !== 0 ? (
          <Category
            index={index}
            category={categorys[index - 1]}
            bannerImage={selected.image} />
        ) : null}
      </Fragment>
    );
  }
}

export default Hardware;
