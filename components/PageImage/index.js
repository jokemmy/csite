
import React from 'react';
import classnames from 'classnames';
import { Parallax } from 'rc-scroll-anim';
import styles from './pageImage.less';


function PageImage({ image, children, className }) {
  return (
    <div className={classnames( styles.pageImage, className )} style={{ backgroundImage: `url(${image})` }}>
      {children}
    </div>
  );
}

export default PageImage;
