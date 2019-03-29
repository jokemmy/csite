
import React from 'react';
import classnames from 'classnames';
import Parallax from '@components/Parallax';
import Paper from '@components/Parallax/Paper';
import imagePcb from '@assets/images/pcb.jpg';
import imageTunnel from '@assets/images/tunnel.png';
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
          <div className={styles.paperBackground} style={{ backgroundImage: `url(${imageTunnel})` }} />
        </Paper>
        <Paper depth={0.4}>
        22222
        </Paper>
        <Paper depth={0.6}>
        33333
        </Paper>
        <div className={styles.content}>
          <div className={styles.toptic}>
            <h1 className={classnames( styles.topticTitle, 'AppSiYuanExtraLight' )}>
              智慧服务 · 智慧管理 · 智慧运行
            </h1>
            <p className={classnames( styles.topticDesc, 'AppSiYuan' )}>
              依托物联网技术和信息化手段，高度契合能源管理业务需求，打造全新的智慧能源运管体系，为客户提供全方位、一体化的整合式服务。
            </p>
          </div>
        </div>
      </Parallax>
    );
  }
}


export default WallPaper;
