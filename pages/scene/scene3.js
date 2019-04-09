
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
            <h2>智慧建筑</h2>
            <div className={styles.iconBack}  onClick={onBack}>
              <SvgIcon icon={back} />返回
            </div>
          </div>
          <div className={styles.sceneContent}>
            <h3>奥义</h3>
            <p>
              打造充分利用物联网释放价值的智能楼宇。
            </p>
            <h3>解决方案</h3>
            <p>
              利用物联网技术在建筑终端加装智能硬件，并联各个子系统，实时采集把控建筑信息，提升楼宇自动化水平，节约人力与能源，实现建筑智慧运营。为建筑全生命周期、全方位的信息和大数据汇总、展示、分析和应用提供平台。
            </p>
            <h3>
              功效
            </h3>
            <div className={styles.sceneIcon}>
              <SvgIcon className={styles.sceneSvg} icon={zhinengfenxi} />
              <div className={styles.sceneName}>
                一站式数据集成
              </div>
            </div>
            <div className={styles.sceneIcon}>
              <SvgIcon className={styles.sceneSvg} icon={zhinengfenxi} />
              <div className={styles.sceneName}>
                分布式云端架构
              </div>
            </div>
            <div className={styles.sceneIcon}>
              <SvgIcon className={styles.sceneSvg} icon={zhinengfenxi} />
              <div className={styles.sceneName}>
                实时监控与反向控制
              </div>
            </div>
            <div className={styles.sceneIcon}>
              <SvgIcon className={styles.sceneSvg} icon={zhinengfenxi} />
              <div className={styles.sceneName}>
                专业建筑大数据分析
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionBlock;
