
import React from 'react';
import classnames from 'classnames';
import TweenOne from 'rc-tween-one';
import styles from './scene1.less';


class SectionBlock extends React.Component {
  render() {
    const { className, bannerImage, ...props } = this.props;
    return (
      <div {...props} className={classnames( styles.block, className )}>
        <section className={styles.blockBanner} style={{ backgroundImage: `url(${bannerImage})` }}>
          <TweenOne
            className={styles.blockBannerMask}
            animation={{ opacity: 0.001, type: 'from', duration: 1000, ease: 'easeOutExpo' }} />
          <div className={classnames( 'page-content', styles.blockBannerContent )}>
            <h1><i>智慧能源</i><span>解决方案</span></h1>
          </div>
        </section>
        <section className={styles.blockContent}>
          <div className="page-content">
            <h2 className={styles.creed}>当问题出现时，<br />需要用最适合方法去解决</h2>
            <p>
              通过对园区、高等院校、商业建筑、政府机关、大型公共建筑等用户的设施、
              用能习惯和用能情况进行分析，提供全面的能源管理，实现能源利用最优。
            </p>
            <p>
              欣动科技为不同的客户提供定制化的解决方案，包括该解决方案针对客户的成本和效果顾虑，提供不同的实施方案。
            </p>
            <h2 className={styles.creed}>解决方案的价值所在</h2>
            为能源计量提供数据基础
            为节能减排提供管控平台
            为节能控制提供有效手段
            为用能决策提供科学依据
            为科学管理提供技术支撑
            为统计分析提供科学方法
          </div>
        </section>
      </div>
    );
  }
}

export default SectionBlock;
