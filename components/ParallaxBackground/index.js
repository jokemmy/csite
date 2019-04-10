
import React from 'react';
import uuid from 'uuid/v1';
import classnames from 'classnames';
import { Parallax } from 'rc-scroll-anim';
import styles from './parallaxBackground.less';


class ParallaxBackground extends React.Component {

  componentDidMount() {
    this.uuid = `parallax-anchor-${uuid()}`;
    this.forceUpdate();
  }

  render() {
    const { children, className, animation, image, ...props } = this.props;
    return (
      <div {...props} className={classnames( className, styles.container )}>
        {this.uuid ? (
          <Parallax
            location={this.uuid}
            className={styles.parallax}
            animation={animation || { y: 80 }}
            style={{ backgroundImage: `url(${image})` }} />
        ) : null}
        {children}
        {this.uuid ? (
          <div id={this.uuid} className={styles.anchor} />
        ) : null}
      </div>
    );
  }
}

export default ParallaxBackground;
