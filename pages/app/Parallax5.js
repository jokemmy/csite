
import React from 'react';
import classnames from 'classnames';
import Parallax from '@components/Parallax';
import Paper from '@components/Parallax/Paper';
import banner from '@assets/images/banner/banner-5.jpg';
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
        <div className={styles.content}>
          <div className={styles.toptic}>
            <h1 className={classnames( styles.topticTitle, 'AppSiYuanExtraLight' )}>
              数据云托管
            </h1>
            <p className={classnames( styles.topticDesc, 'AppSiYuan' )}>
              公云服务、简单安全、统一高效
            </p>
          </div>
        </div>
      </Parallax>
    );
  }
}


export default WallPaper;
