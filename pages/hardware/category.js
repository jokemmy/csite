
import React from 'react';
import classnames from 'classnames';
// import TweenOne from 'rc-tween-one';
import { set, getClientSize } from 'rc-util/lib/Dom/css';
import { ThemeContext } from '@components/Themes';
import { requestAnimationFrame } from '@lib/requestAnimationFrame';
import productions from './productions';
import Production from './production';
import styles from './category.less';


class SectionBlock extends React.Component {

  static contextType = ThemeContext;

  constructor( props ) {
    super( props );
    this.state = {
      animating: false,
      animOver: false
    };
    this.bannerRef = React.createRef();
    this.contentRef = React.createRef();
  }

  componentDidMount() {
    this.animationStart();
  }

  handleTransitionEnd = ({ target, currentTarget }) => {
    if ( target === currentTarget ) {
      this.state.animating = false; // eslint-disable-line
      this.state.animOver = true; // eslint-disable-line
      this.forceUpdate();
    }
  };

  animationStart = () => {
    const clientSize = getClientSize();
    const { transition, ...imageSize } = this.getImageStyle();
    this.state.animating = true; // eslint-disable-line
    set( this.bannerRef.current, {
      ...imageSize,
      transform: this.getImageCoverTransform( imageSize, clientSize )
    });
    this.forceUpdate(() => {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          set( this.bannerRef.current, {
            transition,
            transform: this.getImageCoverTransform( imageSize, { width: getClientSize().width, height: 300 })
          });
          set( this.contentRef.current, {
            transform: 'translateY(300px)'
          });
        });
      });
    });
  };

  getImageStyle = () => {
    const { themeVariables, thiemeEasings } = this.context;
    const image = this.bannerRef.current;
    const { width, height } = getClientSize();
    const imageRatio = image.width / image.height;
    const targetRatio = width / height;
    return {
      width: imageRatio > targetRatio ? imageRatio * height : width,
      height: imageRatio > targetRatio ? height : width / imageRatio,
      transition: `transform ${themeVariables['@anim-speed-3']} ${thiemeEasings['@easeOutCubic']}`
    };
  };

  getImageCoverTransform = ( image, target, percent = 0.5 ) => {
    const imageRatio = image.width / image.height;
    const targetRatio = target.width / target.height;
    if ( imageRatio > targetRatio ) {
      const scale = target.height / image.height;
      const imageWidth = image.width * scale;
      const w = ( imageWidth - target.width ) * -percent;
      return `translateX(${w}px) translateY(0) translateZ(0) scale(${scale})`;
    }
    const scale = target.width / image.width;
    const imageHeight = image.height * scale;
    const h = ( imageHeight - target.height ) * -percent;
    return `translateX(0) translateY(${h}px) translateZ(0) scale(${scale})`;
  };

  render() {
    const { animating, animOver } = this.state;
    const { className, onBack, index, bannerImage, ...props } = this.props;
    return (
      <section {...props} className={classnames( styles.block, className, {
        [styles.blockOh]: !animOver
      })}>
        {animOver ? (
          <div className={styles.blockBanner} style={{ backgroundImage: `url(${bannerImage})` }}>

          </div>
        ) : null}
        <img
          alt=""
          src={bannerImage}
          ref={this.bannerRef}
          className={styles.blockBannerImage}
          onTransitionEnd={this.handleTransitionEnd}
          style={!animating && animOver ? { display: 'none' } : {}} />
        <div
          ref={this.contentRef}
          className={styles.blockContent}>
          {animOver ? (
            <Production productions={productions[index]} />
          ) : null}
        </div>
      </section>
    );
  }
}

export default SectionBlock;
