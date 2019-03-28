
import React from 'react';
import Parallax from '@components/Parallax';
import Paper from '@components/Parallax/Paper';
import styles from './parallax.less';


const options = {
  // selector: '.paper',
  // relativeInput: true
  // clipRelativeInput: true,
  // scalarX: 10,
  // scalarY: 10,
  // limitX: 30,
  // limitY: 30
  // frictionX: 0.1,
  // frictionY: 0.1
};

class WallPaper extends React.Component {
  render() {
    return (
      <Parallax className={styles.scene} options={options}>
        <Paper depth={0.2}>
        11111
        </Paper>
        <Paper depth={0.4}>
        22222
        </Paper>
        <Paper depth={0.6}>
        33333
        </Paper>
        <div className={styles.content}>
          <h1>
            智慧服务 . 智慧管理 . 智慧运行
          </h1>
        </div>
      </Parallax>
    );
  }
}


export default WallPaper;
