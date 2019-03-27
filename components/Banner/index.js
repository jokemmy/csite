
import React from 'react';
import styles from './banner.less';


class Banner extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <div className={styles.banner}>
        {children}
      </div>
    );
  }
}

export default Banner;
