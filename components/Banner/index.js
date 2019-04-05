
import React from 'react';
import classnames from 'classnames';
import Carousel from '@components/Carousel';
import styles from './banner.less';


class Banner extends React.Component {
  render() {
    const { children, className, ...props } = this.props;
    return (
      <Carousel {...props} className={classnames( styles.banner, className )}>
        {children}
      </Carousel>
    );
  }
}

export default Banner;
