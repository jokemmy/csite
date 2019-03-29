
import React from 'react';
import classnames from 'classnames';
import Parallax from '@components/Parallax';
import Paper from '@components/Parallax/Paper';
import imagePcb from '@assets/images/pcb.jpg';
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
        <Paper depth={0.05}>
          <div className={styles.paperBackground} style={{ backgroundImage: `url(${imagePcb})` }} />
        </Paper>
        <div className={styles.content}>
          <div className={styles.toptic}>
            <h1 className={classnames( styles.topticTitle, 'AppSiYuanExtraLight' )}>
              综合能源服务一体化解决方案
            </h1>
            <p className={classnames( styles.topticDesc, 'AppSiYuan' )}>
              综合能源服务管理平台&智慧能源规划咨询服务。
            </p>
          </div>
        </div>
      </Parallax>
    );
  }
}


export default WallPaper;
