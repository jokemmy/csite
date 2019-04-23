
import React from 'react';
import styles from './notFound.less';


class NotFound extends React.Component {
  render() {
    return (
      <div className={styles.notFound}>
        <div className={styles.text404}>404</div>
        <div className={styles.description}>没有找到任何内容</div>
      </div>
    );
  }
}

export default NotFound;
