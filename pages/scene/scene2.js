
import classnames from 'classnames';
import back from '@assets/images/scene/back.svg?sprite';
import zhinengfenxi from '@assets/images/scene/zhinengfenxi.svg?sprite';
import SvgIcon from '@components/SvgIcon';
import styles from './scene.less';


function SectionBlock({ className, onBack, ...props }) {
  return (
    <section {...props} className={classnames( styles.block, className )}>
      <div className={styles.blockContent}>
        <div className="page-content">
          <div className={styles.sceneTitle}>
            <h2>智慧校园</h2>
            <div className={styles.iconBack}  onClick={onBack}>
              <SvgIcon icon={back} />返回
            </div>
          </div>
          <div className={styles.sceneContent}>
            <h3>奥义</h3>
            <p>
              智慧校园，绿色发展。
            </p>
            <h3>解决方案</h3>
            <p>
              将校园的通行、监控、电梯、能源等设备数据打通，通过DD-IoT物联感知平台自动化调度协作，保障校园安全、提升教学资源利用率、高校管理校园资产。
            </p>
            <h3>功效</h3>
            <div className={styles.sceneIcon}>
              <SvgIcon className={styles.sceneSvg} icon={zhinengfenxi} />
              <div className={styles.sceneName}>
                契合国家节约型校园验收标准
              </div>
            </div>
            <div className={styles.sceneIcon}>
              <SvgIcon className={styles.sceneSvg} icon={zhinengfenxi} />
              <div className={styles.sceneName}>
                提升物业信息自动化管理水平
              </div>
            </div>
            <div className={styles.sceneIcon}>
              <SvgIcon className={styles.sceneSvg} icon={zhinengfenxi} />
              <div className={styles.sceneName}>
                契合国家节约型校园验收标准
              </div>
            </div>
            <div className={styles.sceneIcon}>
              <SvgIcon className={styles.sceneSvg} icon={zhinengfenxi} />
              <div className={styles.sceneName}>
                涵盖接地气的系统节能改造方案
              </div>
            </div>
            <div className={styles.sceneIcon}>
              <SvgIcon className={styles.sceneSvg} icon={zhinengfenxi} />
              <div className={styles.sceneName}>
                让节能互动深入教学，成为习惯
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionBlock;
