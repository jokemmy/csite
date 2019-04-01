
import classnames from 'classnames';
import React, { Fragment } from 'react';
import { Link } from '@components/Anchor';
import PageImage from '@components/PageImage';
import image from '@assets/images/about-image.jpg';
import styles from './about.less';


function About() {
  return (
    <Fragment>
      <PageImage
        image={image}
        className={styles.aboutPageImage} />
      <div className="page-content">
        <section className="page-section">
          <h2 className="page-title">
            我们是做什么的<Link href="#我们是做什么的">#</Link>
          </h2>
          <p>
            江苏欣动信息科技有限公司是国内专注物联网技术和智慧解决方案开发、实施及运营的高新科技企业。欣动科技坚信利用物联网技术改变物业管理等传统行业，致力于为客户提供智慧能源解决方案。
          </p>
          <p>
            我们依托江南大学强大的技术、人才、设备资源，为高等院校、政府机关、企事业单位、大型公共建筑等领域提供能源监管平台（EMMS）的设计设计与开发服务、现场实施服务及管理咨询服务。公司同时拥有经验丰富的项目实施运营团队和咨询服务专家团队，在国内高校及商业行业应用处于市场领先地位。
          </p>
        </section>
        <section className="page-section">
          <h2 className="page-title">
            我们有什么成就<Link href="#我们有什么成就">#</Link>
          </h2>
          <h3>应用支撑平台、数据中心平台、物联感知平台</h3>
          <p>
            以欣动科技自主研发的DD-IoT平台为核心，采用应用支撑平台、数据中心平台、物联感知平台构建起三级平台，利用人工智能+物联网+大数据+云计算技术，采用前端硬件设备+后端大数据平台模式，将人与基础设施、服务管理建立紧密联系，打通各级、各行业智慧应用平台，形成系统化的解决方案。
          </p>
          <h3>核心能力与优势</h3>
          <ul>
            <li>更安全：确保能源使用安全</li>
            <li>更可靠：提供高稳定性的产品和解决方案</li>
            <li>更高效：提供简洁方便的解决方案，帮助客户实现最佳的能效管理和过程效率</li>
            <li>更互联互通：融合信息技术和运营技术，帮助客户实现更好的的商业结果</li>
            <li>更可持续：以能源为切入，实现资源的可持续。</li>
          </ul>
        </section>
      </div>
    </Fragment>
  );
}

About.getInitialProps = async function( ctx ) {
  const layoutProps = {
    title: '欣动价值',
    anchors: [ '我们是做什么的', '我们有什么成就' ]
  };
  return { layoutProps };
};

export default About;
