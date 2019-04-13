
import React from 'react';
import Link from 'next/link';
import classnames from 'classnames';
import SvgIcon from '@components/SvgIcon';
import Parallax from '@components/Parallax';
import Paper from '@components/Parallax/Paper';
import banner from '@assets/images/app/banner-4/banner-4.jpg';
import svg1 from '@assets/images/app/banner-4/svg-1.svg?sprite';
import svg2 from '@assets/images/app/banner-4/svg-2.svg?sprite';
import svg3 from '@assets/images/app/banner-4/svg-3.svg?sprite';
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
              云服务 · 智慧应用
            </h1>
            <p className={styles.topicDesc}>
              围绕核心功能，分类构建功能应用体系，涉及多个业务领域，为用户带来统一高效的管理。
            </p>
            <div className={styles.topicExtend}>
              <div className={styles.topicIcon}>
                <SvgIcon icon={svg1} />
                <div className={styles.topicLabel}>公云服务</div>
              </div>
              <div className={styles.topicIcon}>
                <SvgIcon icon={svg2} />
                <div className={styles.topicLabel}>简单安全</div>
              </div>
              <div className={styles.topicIcon}>
                <SvgIcon icon={svg3} />
                <div className={styles.topicLabel}>统一高效</div>
              </div>
            </div>
            <div className={styles.topicAction}>
              <Link as="/store" href="/store">
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
