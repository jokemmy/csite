
import React from 'react';
import Carousel from '@components/Carousel';
import styles from './banner.less';


class Banner extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <Carousel className={styles.banner}>
        {children}
      </Carousel>
    );
  }
}

export default Banner;
