
import classnames from 'classnames';
import React, { Fragment } from 'react';
import { ThemeContext } from '@components/Themes';
import { set, getClientSize } from 'rc-util/lib/Dom/css';
import { requestAnimationFrame } from '@lib/requestAnimationFrame';
import category1 from '@assets/images/hardware/category-1.jpg';
import category2 from '@assets/images/hardware/category-2.jpg';
import category3 from '@assets/images/hardware/category-3.jpg';
import category4 from '@assets/images/hardware/category-4.jpg';
import category5 from '@assets/images/hardware/category-5.jpg';
import category6 from '@assets/images/hardware/category-6.jpg';
import productions from './productions';
import styles from './hardware.less';


const images = [ category1, category2, category3, category4, category5, category6 ];

class Hardware extends React.Component {

  static contextType = ThemeContext;

  static getInitialProps = async function( ctx_ ) {
    const layoutProps = {
      header: {
        transparent: true
      },
      footer: false,
      title: '智能硬件'
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
      this.forceUpdate();
    }
  };

  handleImageLoad = () => {
    const { selected } = this.state;
    const position = selected.dom.getBoundingClientRect();
    const fixedStyle = this.getBlockStyle( position );
    const imageSize = this.getImageSize();
    const fixedImageStyle = {
      ...this.getImageStyle( imageSize, position )
    };
    const fixedLastStyle = {
      transition: this.getTransition( true ),
      transform: 'translateX(0) translateY(0) translateZ(0)',
      height: '100vh',
      width: '100vw'
    };
    const fixedImageLastStyle = {
      transition: this.getImageTransition( true ),
      transform: this.getImageCoverTransform( imageSize, getClientSize())
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
      const imageSize = this.getImageSize();
      const fixedStyle = {
        transition: this.getTransition( false )
      };
      const fixedImageStyle = {
        transition: this.getImageTransition( false )
      };console.log("position:", position)
      const fixedLastStyle = {
        width: `${position.width}px`,
        height: `${position.height}px`,
        transform: `translateX(${position.left}px) translateY(${position.top}px) translateZ(0)`
      };
      const fixedImageLastStyle = {
        transform: this.getImageCoverTransform( imageSize, position )
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

  getImageSize = () => {
    const image = this.pageImageRef.current;
    const { width, height } = getClientSize();
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
    const { selected } = this.state;
    return (
      <Fragment>
        <section className={styles.view}>
          <div className={styles.navigation}>
            <div className={styles.category}>
              {[ '智能网关类', '终端设备类', '接口转换类', '智能网由类', '前置服务类', '集成机柜类' ].map(( title, index ) => {
                return (
                  <div
                    key={title}
                    onClick={this.handleClick({ index: index + 1, title, image: images[index], className: styles[`itemImage${index + 1}`] })}
                    className={classnames( styles.item, styles[`itemImage${index + 1}`])}>
                    <h2 className={styles.categoryTitle}>{title}</h2>
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
          {selected.animIn && !selected.animating ? (
            <div onClick={this.handleBack} className={classnames( styles.containerBanner, selected.className )} />
          ) : null}
          <img
            alt=""
            src={selected.image}
            ref={this.pageImageRef}
            onLoad={this.handleImageLoad}
            style={selected.animIn && !selected.animating ? { display: 'none' } : {}}
            className={styles.containerImage} />
          <h2 ref={this.pageFontRef} className={classnames( styles.categoryTitle, {
            [styles.hidden]: selected.animIn && !selected.animating,
            [styles.transparent]: selected.animIn && selected.animating
          })}>{selected.title}</h2>
        </section>
      </Fragment>
    );
  }
}

/*      <div className={styles.prods}>
        {productions.map(( production, index ) => {
          const isOdd = index % 2 === 1;
          return (
            <section key={index} className={`page-block ${isOdd ? 'odd' : 'even'}`}>
              <div className={classnames( 'page-content', styles.prod )}>
                <div className={styles.prodPic}>
                  <img alt={production.name} src={production.image} />
                </div>
                <div className={styles.prodDesc} dangerouslySetInnerHTML={{ __html: production.html }} />
              </div>
            </section>
          );
        })}
      </div>*/

export default Hardware;
