
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
    const { className, bannerImage, ...props } = this.props;
    return (
      <div {...props} className={classnames( styles.block, className )}>
        <section className={styles.blockBanner} style={{ backgroundImage: `url(${bannerImage})` }}>
          <TweenOne
            className={styles.blockBannerMask}
            animation={{ opacity: 0.001, type: 'from', duration: 1000, ease: 'easeOutExpo' }} />

        </section>
        <section className={styles.blockContent}>
          <div className="page-content">

          </div>
        </section>
      </div>
    );
  }
}

export default SectionBlock;
