
import React from 'react';
import classnames from 'classnames';
import { Parallax } from 'rc-scroll-anim';
import styles from './pageImage.less';


function PageImage({ image, children, className }) {
  return (
    <div
      style={{ backgroundImage: `url(${image})` }}
      className={classnames( styles.pageImage, className )} >
      {children}
    </div>
  );
}

export default PageImage;
