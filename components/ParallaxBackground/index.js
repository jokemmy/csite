
import React from 'react';
import uuid from 'uuid/v1';
import classnames from 'classnames';
import { Parallax } from 'rc-scroll-anim';
import styles from './parallaxBackground.less';


class ParallaxBackground extends React.Component {

  static defaultProps = {
    range: [ -80, 80 ]
  };

  componentDidMount() {
    this.uuid = `parallax-anchor-${uuid()}`;
    this.forceUpdate();
  }

  render() {
    const { children, className, range, image, imageClass, ...props } = this.props;
    const imageStyle = !imageClass && image ? { backgroundImage: `url(${image})` } : {};
    const distance = ( range[1] - range[0]) / 2;
    return (
      <div {...props} className={classnames( className, styles.container )}>
        {this.uuid ? (
          <Parallax
            location={this.uuid}
            animation={{ y: distance }}
            className={styles.anchorTop}>
            <Parallax
              animation={{ y: distance }}
              className={classnames( styles.parallax, imageClass )}
              style={Object.assign( imageStyle, { marginTop: -distance })} />
          </Parallax>
        ) : null}
        {children}
        {this.uuid ? (
          <div id={this.uuid} className={styles.anchorBottom} />
        ) : null}
      </div>
    );
  }
}

export default ParallaxBackground;
