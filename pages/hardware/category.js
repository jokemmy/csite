
import React from 'react';
import classnames from 'classnames';
// import { set, getClientSize } from 'rc-util/lib/Dom/css';
import { ThemeContext, setTheme } from '@components/Themes';
// import { requestAnimationFrame } from '@lib/requestAnimationFrame';
import { productions } from './productions';
import Production from './production';
import styles from './category.less';


const Banner = Production.Banner;

class SectionBlock extends React.Component {

  static contextType = ThemeContext;

  constructor( props ) {
    super( props );
    // this.state = {
    //   animating: false,
    //   animOver: false
    // };
    // this.bannerRef = React.createRef();
    // this.contentRef = React.createRef();
    this.fakeBannerRef = React.createRef();
  }

  componentDidMount() {
    setTheme({ footer: true }, this.props.router.route );
    SectionBlock.getBannerPosition = () => {
      return this.fakeBannerRef.current.getBoundingClientRect();
    };
    // this.animationStart();
  }

  componentWillUnmount() {
    setTheme({ footer: false }, this.props.router.route );
  }

  // handleTransitionEnd = ({ target, currentTarget }) => {
  //   if ( target === currentTarget ) {
  //     this.state.animating = false; // eslint-disable-line
  //     this.state.animOver = true; // eslint-disable-line
  //     this.forceUpdate(() => {
  //       const dom = this.fakeBannerRef.current;
  //       SectionBlock.getBannerPosition = () => {
  //         return dom.getBoundingClientRect();
  //       };
  //     });
  //   }
  // };

  // animationStart = () => {
  //   const clientSize = getClientSize();
  //   const { transition, ...imageSize } = this.getImageStyle();
  //   this.state.animating = true; // eslint-disable-line
  //   set( this.bannerRef.current, {
  //     ...imageSize,
  //     transform: this.getImageCoverTransform( imageSize,  { width: clientSize.width, height: 350 })
  //   });
  //   this.forceUpdate(() => {
  //     set( this.contentRef.current, {
  //       transform: 'translateY(350px)'
  //     });
  //     requestAnimationFrame(() => {
  //       requestAnimationFrame(() => {
  //         const position = { width: getClientSize().width, height: 350 };
  //         if ( this.bannerRef.current ) {
  //           set( this.bannerRef.current, {
  //             transition,
  //             transform: this.getImageCoverTransform( imageSize, position )
  //           });
  //         }
  //       });
  //     });
  //   });
  // };

  // getImageStyle = () => {
  //   const { themeVariables, themeEasings } = this.context;
  //   const image = this.bannerRef.current;
  //   const { width, height } = getClientSize();
  //   const imageRatio = image.width / image.height;
  //   const targetRatio = width / height;
  //   return {
  //     width: imageRatio > targetRatio ? imageRatio * height : width,
  //     height: imageRatio > targetRatio ? height : width / imageRatio,
  //     transition: `transform ${themeVariables['@anim-speed-2']} ${themeEasings['@easeOutQuad']}`
  //   };
  // };

  // getImageCoverTransform = ( image, target, percent = 0.5 ) => {
  //   const imageRatio = image.width / image.height;
  //   const targetRatio = target.width / target.height;
  //   if ( imageRatio > targetRatio ) {
  //     const scale = target.height / image.height;
  //     const imageWidth = image.width * scale;
  //     const w = ( imageWidth - target.width ) * -percent;
  //     return `translateX(${w}px) translateY(0) translateZ(0) scale(${scale})`;
  //   }
  //   const scale = target.width / image.width;
  //   const imageHeight = image.height * scale;
  //   const h = ( imageHeight - target.height ) * -percent;
  //   return `translateX(0) translateY(${h}px) translateZ(0) scale(${scale})`;
  // };

  render() {
    // const { animating, animOver } = this.state;
    const { className, index, bannerImage, category, ...props } = this.props;
    return (
      <section {...props} className={classnames( styles.block, className, {
        // [styles.blockAnimating]: !animOver,
        // [styles.blockOh]: !animOver
      })}>
        <div ref={this.fakeBannerRef} className={styles.blockBanner} style={{ backgroundImage: `url(${bannerImage})` }}>
          <Banner category={category} />
        </div>
{/*        <img
          alt=""
          src={bannerImage}
          ref={this.bannerRef}
          className={styles.blockBannerImage}
          onTransitionEnd={this.handleTransitionEnd}
          style={!animating && animOver ? { display: 'none' } : {}} />*/}
        <div
          ref={this.contentRef}
          className={styles.blockContent}>
          <Production productions={productions[index - 1]} />
        </div>
      </section>
    );
  }
}

export default SectionBlock;
