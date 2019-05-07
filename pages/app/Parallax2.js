
import React from 'react';
// import Link from 'next/link';
import classnames from 'classnames';
import SvgIcon from '@components/SvgIcon';
import Parallax from '@components/Parallax';
import Paper from '@components/Parallax/Paper';
import banner from '@assets/images/app/banner-2/banner-2.jpg';
import svg1 from '@assets/images/app/banner-2/svg-1.svg?sprite';
import svg2 from '@assets/images/app/banner-2/svg-2.svg?sprite';
import svg3 from '@assets/images/app/banner-2/svg-3.svg?sprite';
import svg4 from '@assets/images/app/banner-2/svg-4.svg?sprite';
import svg5 from '@assets/images/app/banner-2/svg-5.svg?sprite';
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
    return (
      <Parallax className={styles.scene} options={options}>
        <Paper depth={0.2}>
          <div className={styles.paperBackground} style={{ backgroundImage: `url(${banner})` }} />
        </Paper>
        <div className={styles.leftContent}>
          <div className={classnames( styles.topic, 'AppSiYuan' )}>
            <h1 className={classnames( styles.topicTitle, 'AppSiYuan' )}>
              万物感知 · 万物互联 · 万物智能
            </h1>
            <p className={styles.topicDesc}>
              DD-IoT物联感知平台，部署各类传感网智能硬件产品，及时、准确、快速的监测一切人和物。
            </p>
            <div className={styles.topicExtend}>
              <div className={styles.topicIcon}>
                <SvgIcon icon={svg1} />
                <div className={styles.topicLabel}>高并发</div>
              </div>
              <div className={styles.topicIcon}>
                <SvgIcon icon={svg2} />
                <div className={styles.topicLabel}>海量实时数据存储</div>
              </div>
              <div className={styles.topicIcon}>
                <SvgIcon icon={svg3} />
                <div className={styles.topicLabel}>数据滤波</div>
              </div>
              <div className={styles.topicIcon}>
                <SvgIcon icon={svg4} />
                <div className={styles.topicLabel}>可定制化驱动模型</div>
              </div>
              <div className={styles.topicIcon}>
                <SvgIcon icon={svg5} />
                <div className={styles.topicLabel}>可编程系列通讯网关</div>
              </div>
            </div>
{/*            <div className={styles.topicAction}>
              <Link as="/scene" href="/scene">
                <a className={styles.topicButton}>
                  了解更多
                </a>
              </Link>
            </div>*/}
          </div>
        </div>
      </Parallax>
    );
  }
}


export default WallPaper;
