
import React, { Fragment } from 'react';
import SvgIcon from '@components/SvgIcon';
import banner from '@assets/images/scene-banner.png?webp';
import zhinengfenxi from '@assets/images/solutions/zhinengfenxi.svg?sprite';
import wuliankeji from '@assets/images/solutions/wuliankeji.svg?sprite';
import xitongronghe from '@assets/images/solutions/xitongronghe.svg?sprite';
import lianwangzhihui from '@assets/images/solutions/lianwangzhihui.svg?sprite';
import yuanqu from '@assets/images/solutions/yuanqu.jpg';
import xiaoyuan from '@assets/images/solutions/xiaoyuan.jpg';
import jianzhu from '@assets/images/solutions/jianzhu.jpg';
import styles from './scene.less';




function Scene() {
  return (
    <Fragment>
      <section className="page-top-banner">
        <div className="page-banner-images" style={{ backgroundImage: `url(${banner})` }} />
      </section>
      <section className="page-block" style={{ backgroundColor: '#f4f4f4', padding: '1px 0' }}>
        <div className="page-content">
          <h1 className={styles.pageTitle}>解决方案</h1>
          <div className={styles.sceneBlock}>
            <div className={styles.sceneTitle} style={{ backgroundImage: `url(${yuanqu})` }}>
              <h2>智<br />慧<br />园<br />区</h2>
            </div>
            <div className={styles.sceneContent}>
              <h3>奥义</h3>
              <p>
                构建智慧园区管理新体系，形成智慧园区服务新生态。只有打破各个独立的信息孤岛，建设统一的园区管理平台，实现设备、人员、数据的协调管理，才能提供满足客户需求的智慧园区解决方案。
              </p>
              <h3>解决方案</h3>
              <p>
                基于能源管理，以技术创新为驱动，致力于成为智慧园区管理的基础平台和决策中心。通过将设备、数据、应用和人员连接起来，结合海量数据分析智能决策和自动响应，携手生态合作伙伴，推动智慧园区建设进程。
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
          <div className={styles.sceneBlock}>
            <div className={styles.sceneTitle} style={{ backgroundImage: `url(${xiaoyuan})` }}>
              <h2>智<br />慧<br />校<br />园</h2>
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
          <div className={styles.sceneBlock}>
            <div className={styles.sceneTitle} style={{ backgroundImage: `url(${jianzhu})` }}>
              <h2>智<br />慧<br />建<br />筑</h2>
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
    </Fragment>
  );
}

Scene.getInitialProps = async function( ctx ) {
  const layoutProps = {
    // transparent: true,
    title: '解决方案'
  };
  return { layoutProps };
};

export default Scene;
