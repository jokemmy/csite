
import React from 'react';
import classnames from 'classnames';
import ParallaxBackground from '@components/ParallaxBackground';
import SvgIcon from '@components/SvgIcon';
import Typed from '@components/Typed';
import { ThemeContext } from '@components/Themes';
import core1 from '@assets/images/about/core-1.svg?sprite';
import core2 from '@assets/images/about/core-2.svg?sprite';
import core3 from '@assets/images/about/core-3.svg?sprite';
import platform1 from '@assets/images/about/platform-1.svg?sprite';
import platform2 from '@assets/images/about/platform-2.svg?sprite';
import platform3 from '@assets/images/about/platform-3.svg?sprite';
// import Topology from './topology';
import styles from './about.less';


class About extends React.Component {

  static contextType = ThemeContext;

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
        scrollClass: {
          '>=0': 'page-header-hold',
          '>=600': 'page-header-light page-header-logo-color'
        }
      }
    };
    return { layoutProps };
  };

  render() {

    const { themeVariables } = this.context;

    return (
      <>
        <div className={classnames( styles.aboutBlock, styles.aboutBanner )}>
          <ParallaxBackground className={styles.aboutBlockImage} imageClass={styles.aboutBanner1} />
          <div className={styles.aboutBannerContent}>
            <Typed className={styles.aboutBannerTitle} strings={[
              '我们是“智慧能源的践行者”',
              '数据计算严谨，\n使用方便简单，\n是我们产品的设计宗旨',
              '我们是一家良心企业'
            ]} />
          </div>
        </div>
        <section className={styles.aboutBlock}>
          <div className="page-content">
            <h2 className={styles.aboutBlockTitle}>
              我们做什么
            </h2>
            <p>
              江苏欣动信息科技有限公司是国内领先的智慧能源集成服务提供商，
              专注于物联网技术和智慧解决方案开发、实施及运营，致力于为客户提供智慧能源解决方案。
            </p>
            <p>
              欣动科技为高等院校、政府机关、企事业单位、大型公共建筑等领域提供能源监管平台（EMMS）的设计与开发服务、
              现场实施服务及管理咨询服务。公司同时拥有经验丰富的项目实施运营团队和咨询服务专家团队，
              在国内高校及商业行业应用处于市场领先地位。
            </p>
          </div>
        </section>
        <section className={classnames( styles.aboutBlock, styles.aboutBannerBlock )}>
          <ParallaxBackground className={styles.aboutBlockImage} imageClass={styles.aboutBanner3} />
          <div className="page-content">
            <h2 className={styles.aboutBlockTitle}>
              三大支撑平台
            </h2>
            <p>
              以欣动科技自主研发的DD-IoT平台为核心，采用应用支撑平台、数据中心平台、物联感知平台构建起三级平台，
              利用人工智能+物联网+大数据+云计算技术，采用前端硬件设备+后端大数据平台模式，将人与基础设施、
              服务管理建立紧密联系，打通各级、各行业智慧应用平台，形成系统化的解决方案。
            </p>
            <div className={styles.aboutBlockPlatform3} style={{ color: '#fff' }}>
              <div>
                <div className={styles.icon}><SvgIcon icon={platform1} /></div>
                <div>现场系统集成</div>
              </div>
              <div>
                <div className={styles.icon}><SvgIcon icon={platform2} /></div>
                <div>实时数据托管</div>
              </div>
              <div>
                <div className={styles.icon}><SvgIcon icon={platform3} /></div>
                <div>远程绿色运营</div>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.aboutBlock} style={{ backgroundColor: themeVariables['@gray-3'] }}>
          <div className="page-content">
            <h2 className={styles.aboutBlockTitle}>
              核心业务
            </h2>
            <p>
              专业的系统集成服务团队，可为客户提供全方位、全过程、一体化的能源管理系统解决方案。
              为客户提供专业的技术支持和系统托管，确保系统正常运行，为节能诊断、节能审计提供优质的数据基础。
              以数据为载体，以针对设备系统的诊断、调试、改造、优化和针对管理者的汇报、培训、管理支持为主要手段，
              帮助客户解决能耗及品质的相关问题，同时建立长效的预防机制，实现长期绿色运营。
            </p>
            <div className={styles.aboutBlockCore3}>
              <div>
                <div className={styles.icon}><SvgIcon icon={core1} /></div>
                <div>现场系统集成</div>
              </div>
              <div>
                <div className={styles.icon}><SvgIcon icon={core2} /></div>
                <div>实时数据托管</div>
              </div>
              <div>
                <div className={styles.icon}><SvgIcon icon={core3} /></div>
                <div>远程绿色运营</div>
              </div>
            </div>
          </div>
        </section>
        <section className={classnames( styles.aboutBlock, styles.aboutBannerBlock )}>
          <ParallaxBackground className={styles.aboutBlockImage} imageClass={styles.aboutBanner2} />
          <div className="page-content">
            <h2 className={styles.aboutBlockTitle}>
              核心能力与优势
            </h2>
            <p>
              确保能源使用安全；提供高稳定性的产品和解决方案；提供简洁方便的解决方案，帮助客户实现最佳的能效管理和过程效率；融合信息技术和运营技术，帮助客户实现更好的的商业结果；以能源为切入，实现资源的可持续；
            </p>
            <ul className={styles.aboutBlockAdvantage}>
              <li>
                <div className={styles.ad1} />
                <div>更安全</div>
              </li>
              <li>
                <div className={styles.ad2} />
                <div>更可靠</div>
              </li>
              <li>
                <div className={styles.ad3} />
                <div>更高效</div>
              </li>
              <li>
                <div className={styles.ad4} />
                <div>更互联</div>
              </li>
              <li>
                <div className={styles.ad5} />
                <div>更持续</div>
              </li>
            </ul>
          </div>
        </section>
      </>
    );
  }
}


export default About;
