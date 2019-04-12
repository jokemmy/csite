
import React from 'react';
import uuid from 'uuid/v1';
import classnames from 'classnames';
import { Parallax } from 'rc-scroll-anim';
import styles from './parallaxBackground.less';


const locationId = `parallax-anchor-1`;

class ParallaxBackground extends React.Component {

  static defaultProps = {
    range: [ -80, 80 ]
  };



  render() {
    const { children, className, range, image, imageClass, ...props } = this.props;
    const imageStyle = !imageClass && image ? { backgroundImage: `url(${image})` } : {};
    const distance = ( range[1] - range[0]) / 2;
    return (
      <div {...props} className={classnames( className, styles.container )}>

          <Parallax
            animation={{ y: distance }}
            className={styles.anchorTop}>
            <Parallax
              location={locationId}
              animation={{ y: distance }}
              className={classnames( styles.parallax, imageClass )}
              style={Object.assign( imageStyle, { marginTop: -distance })} />
          </Parallax>
        {children}
        <div id={locationId} className={styles.anchorBottom} />
      </div>
    );
  }
}

export default ParallaxBackground;
