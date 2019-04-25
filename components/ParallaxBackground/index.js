
import React from 'react';
import uuid from 'uuid/v1';
import classnames from 'classnames';
import { Parallax } from 'rc-scroll-anim';
import styles from './parallaxBackground.less';


class ParallaxBackground extends React.Component {

  static defaultProps = {
    range: [ -88, 88 ]
  };

  componentDidMount() {
    this.uid = uuid();
    this.forceUpdate();
  }

  render() {
    const { children, className, range, image, imageClass, style, ...props } = this.props;
    const imageStyle = !imageClass && image ? { backgroundImage: `url(${image})` } : {};
    const distance = ( range[1] - range[0]) / 2;
    return (
      <div
        {...props}
        style={Object.assign({ height: '100vh' }, style || {})}
        className={classnames( className, styles.container )}>
        <Parallax
          animation={{ y: distance }}
          className={styles.parallax}
          style={{ position: 'absolute', top: 0, left: 0, height: '100%', zIndex: -1, marginTop: -distance }}>
          {this.uid ? (
            <Parallax
              style={imageStyle}
              location={this.uid}
              animation={{ y: distance }}
              className={imageClass} />
          ) : null}
        </Parallax>
        {children}
        <div id={this.uid} style={{ position: 'absolute', bottom: 0, left: 0, height: 0 }} />
      </div>
    );
  }
}

export default ParallaxBackground;
