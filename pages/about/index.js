
import classnames from 'classnames';
import React, { Fragment } from 'react';
import ParallaxBackground from '@components/ParallaxBackground';
// import banner1 from '@assets/images/about/banner-1.jpg';
// import banner2 from '@assets/images/about/banner-2.jpg';
import Advantage from './advantage';
import Topology from './topology';
import styles from './about.less';


class About extends React.Component {

  static getInitialProps = async function( ctx_ ) {
    const layoutProps = {
      title: '欣动价值',
      // anchor: {
      //   anchors: [ '我们做的是什么', '核心能力与优势' ]
      // },
      header: {
        transparent: true
        // mode: 'light'
      },
      footer: {
        transparent: true,
        overlay: true,
        mode: 'light'
      },
      pageProps: {
        // scrollClass: {
        //   '>=300': 'page-scrolled'
        // }
      }
    };
    return { layoutProps };
  };

  render() {
    return (
      <Fragment>
        <ParallaxBackground
          imageClass={styles.aboutBanner1}
          className={styles.aboutBlock}>
          <div className={styles.aboutBlockLight}>
            <div className="page-content page-section">
              <h2 className={styles.aboutBlockTitle}>
                我们做的是什么
              </h2>
              <p>
                江苏欣动信息科技有限公司是国内专注物联网技术和智慧解决方案开发、实施及运营的高新科技企业。
                欣动科技坚信利用物联网技术改变物业管理等传统行业，致力于为客户提供智慧能源解决方案。
              </p>
              <p>
                我们依托江南大学强大的技术、人才、设备资源，为高等院校、政府机关、企事业单位、
                大型公共建筑等领域提供能源监管平台（EMMS）的设计设计与开发服务、现场实施服务及管理咨询服务。
                公司同时拥有经验丰富的项目实施运营团队和咨询服务专家团队，在国内高校及商业行业应用处于市场领先地位。
              </p>
            </div>
          </div>
        </ParallaxBackground>
        <section className={classnames( 'page-section', styles.aboutBlockSection )}>
          <div className="page-content">
            <h2 className={styles.aboutBlockTitle} style={{ textAlign: 'right' }}>
              核心能力与优势
            </h2>
            <h3>应用支撑平台、数据中心平台、物联感知平台</h3>
            <p>
              以欣动科技自主研发的DD-IoT平台为核心，采用应用支撑平台、数据中心平台、
              物联感知平台构建起三级平台，利用人工智能+物联网+大数据+云计算技术，
              采用前端硬件设备+后端大数据平台模式，将人与基础设施、服务管理建立紧密联系，
              打通各级、各行业智慧应用平台，形成系统化的解决方案。
            </p>
            <Topology />
          </div>
        </section>
        <ParallaxBackground
          imageClass={styles.aboutBanner2}
          className={styles.aboutBlock}>
          <div className={styles.dark}>
            <div className="page-content">
              <Advantage />
            </div>
          </div>
        </ParallaxBackground>
      </Fragment>
    );
  }
}


export default About;
