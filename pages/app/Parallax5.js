
import React from 'react';
import Link from 'next/link';
import classnames from 'classnames';
import SvgIcon from '@components/SvgIcon';
import Parallax from '@components/Parallax';
import Paper from '@components/Parallax/Paper';
import banner from '@assets/images/app/banner-5/banner-5.jpg';
import svg1 from '@assets/images/app/banner-5/svg-1.svg?sprite';
import svg2 from '@assets/images/app/banner-5/svg-2.svg?sprite';
import svg3 from '@assets/images/app/banner-5/svg-3.svg?sprite';
import styles from './parallax.less';


const options = {
  // selector: '.paper',
  // relativeInput: true
  // clipRelativeInput: true,
  // scalarX: 10,
  // scalarY: 10,
  limitX: 30,
  limitY: 30
  // frictionX: 0.1,
  // frictionY: 0.1
};

class WallPaper extends React.Component {
  render() {
    const { className, ...props } = this.props;
    return (
      <Parallax {...props} className={classnames( styles.scene, className )} options={options}>
        <Paper depth={0.2}>
          <div className={styles.paperBackground} style={{ backgroundImage: `url(${banner})` }} />
        </Paper>
        <div className={styles.leftContent}>
          <div className={classnames( styles.topic, 'AppSiYuan' )}>
            <h1 className={classnames( styles.topicTitle, 'AppSiYuanExtraLight' )}>
              欣动科技 · 智能硬件
            </h1>
            <p className={styles.topicDesc}>
              智能物联网的物理接触点，是用户感知欣动“无形的技术”的重要媒介。
            </p>
            <div className={styles.topicExtend}>
              <div className={styles.topicIcon}>
                <SvgIcon icon={svg1} />
                <div className={styles.topicLabel}>智能网关</div>
              </div>
              <div className={styles.topicIcon}>
                <SvgIcon icon={svg2} />
                <div className={styles.topicLabel}>智能网由</div>
              </div>
              <div className={styles.topicIcon}>
                <SvgIcon icon={svg3} />
                <div className={styles.topicLabel}>前置服务器</div>
              </div>
            </div>
            <div className={styles.topicAction}>
              <Link as="/hardware" href="/hardware">
                <a className={styles.topicButton}>
                  了解更多
                </a>
              </Link>
            </div>
          </div>
        </div>
      </Parallax>
    );
  }
}


export default WallPaper;
