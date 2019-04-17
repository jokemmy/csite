
import React from 'react';
import classnames from 'classnames';
import TweenOne from 'rc-tween-one';
// import back from '@assets/images/scene/back.svg?sprite';
// import zhinengfenxi from '@assets/images/scene/zhinengfenxi.svg?sprite';
// import wuliankeji from '@assets/images/scene/wuliankeji.svg?sprite';
// import xitongronghe from '@assets/images/scene/xitongronghe.svg?sprite';
// import lianwangzhihui from '@assets/images/scene/lianwangzhihui.svg?sprite';
// import SvgIcon from '@components/SvgIcon';
import styles from './scene1.less';


class SectionBlock extends React.Component {
  render() {
    const { className, onBack, bannerImage, ...props } = this.props;
    return (
      <section {...props} className={classnames( styles.block, className )}>
        <TweenOne
          className={styles.blockBanner}
          animation={{ height: 300, delay: 300, duration: 2000, ease: 'easeOutExpo' }}>
          <div className={styles.blockBannerImage} style={{ backgroundImage: `url(${bannerImage})` }} />
        </TweenOne>
        <div className={styles.blockContent}>
          <div className="page-content">

          </div>
        </div>
      </section>
    );
  }
}

export default SectionBlock;
