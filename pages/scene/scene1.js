
import React from 'react';
import classnames from 'classnames';
import TweenOne from 'rc-tween-one';
import SvgIcon from '@components/SvgIcon';
import { setTheme } from '@components/Themes';
import quote from '@assets/images/scene/quote.svg?sprite';
import banner from '@assets/images/scene/banner.jpg';
import styles from './scene1.less';


class SectionBlock extends React.Component {

  componentDidMount() {
    setTheme({ footer: true });
  }

  componentWillUnmount() {
    setTheme({ footer: false });
  }

  render() {
    const { className, bannerImage, ...props } = this.props;
    return (
      <div {...props} className={classnames( styles.block, className )}>
        <section className={styles.blockBanner} style={{ backgroundImage: `url(${bannerImage})` }}>
          <TweenOne
            className={styles.blockBannerMask}
            animation={{ opacity: 0.001, type: 'from', duration: 1000, ease: 'easeOutExpo' }} />
          <div className={classnames( 'page-content', styles.blockBannerContent )}>
            <h1 className="SceneZcoolGaoDuanHei">
              <i>智慧能源</i>
              <span className="SceneZcoolXiaoWeiTi">解决方案</span>
            </h1>
          </div>
        </section>
        <section className={styles.blockContent}>
          <div className="page-content">
            <blockquote className={styles.dictum}>
              <span className={styles.dictumText}>
                <SvgIcon className={styles.dictumQuote} icon={quote} />
                数据计算
                <span className={classnames( 'SceneSiYuan', styles.dictumPoint )}>严谨</span>
                ，使用方便
                <span className={classnames( 'SceneSiYuan', styles.dictumPoint )}>简单</span>
                ，是我们产品的设计宗旨
              </span>
            </blockquote>
            <p className="page-poem">
              江苏欣动信息科技<br />为不同的客户提供定制化的解决方案<br />
              包括该解决方案针对客户的成本和效果顾虑<br />提供不同的实施方案。
            </p>
            <p className="page-poem">
              我们通过<br />对园区、高等院校、商业建筑、政府机关、大型公共建筑等设施<br />
              用户的用能习惯和用能情况进行分析<br />提供全面的能源管理<br />实现能源利用最优
            </p>
          </div>
        </section>
        <section className={classnames( styles.blockContent, styles.halfCircle )}>
          <div className="page-content">
            <h2 style={{ textAlign: 'center' }}>方案价值</h2>
            <div className={styles.worth}>
              <div className={styles.cardQueue}>
                <li><span>1</span>为能源计量提供数据基础</li>
                <li><span>2</span>为节能减排提供管控平台</li>
                <li><span>3</span>为节能控制提供有效手段</li>
                <li><span>4</span>为用能决策提供科学依据</li>
                <li><span>5</span>为科学管理提供技术支撑</li>
                <li><span>6</span>为统计分析提供科学方法</li>
              </div>
              <img alt="" src={banner} width="50%" />
            </div>
          </div>
        </section>
        <section className={styles.blockContent}>
          <div className="page-content">
            <h2 style={{ textAlign: 'center' }}>能源管理从1.0时代迈入2.0时代</h2>
            <div className={styles.walkForward}>
              <img alt="" src={banner} height="100%" />
            </div>
          </div>
        </section>
        <section className={styles.blockContent}>
          <div className="page-content">
            <h2 style={{ textAlign: 'center' }}>平台架构</h2>
            <div className={styles.platform}>
              <img alt="" src={banner} height="100%" />
            </div>
          </div>
        </section>
        <section className={styles.blockContent}>
          <div className="page-content">
            <h2 style={{ textAlign: 'center' }}>技术架构</h2>
            <div className={styles.platform}>
              <img alt="" src={banner} height="100%" />
            </div>
          </div>
        </section>
        <section className={styles.blockContent}>
          <div className="page-content">
            <h2 style={{ textAlign: 'center' }}>技术特点</h2>
            <div className={styles.characteristic}>
              
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default SectionBlock;
