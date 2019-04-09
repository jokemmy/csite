
import classnames from 'classnames';
import back from '@assets/images/scene/back.svg?sprite';
import zhinengfenxi from '@assets/images/scene/zhinengfenxi.svg?sprite';
import wuliankeji from '@assets/images/scene/wuliankeji.svg?sprite';
import xitongronghe from '@assets/images/scene/xitongronghe.svg?sprite';
import lianwangzhihui from '@assets/images/scene/lianwangzhihui.svg?sprite';
import SvgIcon from '@components/SvgIcon';
import styles from './scene.less';


function SectionBlock({ className, onBack, ...props }) {
  return (
    <section {...props} className={classnames( styles.block, className )}>
      <div className={styles.blockContent}>
        <div className="page-content">
          <div className={styles.sceneTitle}>
            <h2>智慧园区</h2>
            <div className={styles.iconBack}  onClick={onBack}>
              <SvgIcon icon={back} />返回
            </div>
          </div>
          <div className={styles.sceneContent}>
            <h3>奥义</h3>
            <p>
              构建智慧园区管理新体系，形成智慧园区服务新生态。只有打破各个独立的信息孤岛，
              建设统一的园区管理平台，实现设备、人员、数据的协调管理，才能提供满足客户需求的智慧园区解决方案。
            </p>
            <h3>解决方案</h3>
            <p>
              基于能源管理，以技术创新为驱动，致力于成为智慧园区管理的基础平台和决策中心。
              通过将设备、数据、应用和人员连接起来，结合海量数据分析智能决策和自动响应，
              携手生态合作伙伴，推动智慧园区建设进程。
            </p>
            <h3>
              功效
            </h3>
            <div className={styles.sceneIcon}>
              <SvgIcon className={styles.sceneSvg} icon={xitongronghe} />
              <div className={styles.sceneName}>
                系统融合，实现统一调度
              </div>
            </div>
            <div className={styles.sceneIcon}>
              <SvgIcon className={styles.sceneSvg} icon={wuliankeji} />
              <div className={styles.sceneName}>
                物联科技，提升园区安全
              </div>
            </div>
            <div className={styles.sceneIcon}>
              <SvgIcon className={styles.sceneSvg} icon={lianwangzhihui} />
              <div className={styles.sceneName}>
                联网指挥，快速协作响应
              </div>
            </div>
            <div className={styles.sceneIcon}>
              <SvgIcon className={styles.sceneSvg} icon={zhinengfenxi} />
              <div className={styles.sceneName}>
                智能分析，整体节能增效
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionBlock;
