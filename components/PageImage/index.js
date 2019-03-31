
import React from 'react';
import classnames from 'classnames';
import styles from './pageImage.less';


function PageImage({ image, text, className }) {
  return (
    <div className={classnames( styles.pageImage, className )} style={{ backgroundImage: `url(${image})` }}>
      <h1 className={styles.title}>{text}</h1>
    </div>
  );
}

export default PageImage;
