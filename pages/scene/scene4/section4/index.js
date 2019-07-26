
import React from 'react';
import classnames from 'classnames';
import ResizeImage from '@components/ResizeImage';
import styles from './section.less';


class Section extends React.Component {
  render() {
    return (
      <ResizeImage className={styles.wrap}>
        <div className={styles.layer}>
          <div className={styles.layerTitle}>
            <div>用户场景</div>
          </div>
          <div className={styles.layerContent}>
            <div className={classnames( styles.layerItem, styles.layerCol5 )}>远程控制</div>
            <div className={classnames( styles.layerItem, styles.layerCol5 )}>消防安全</div>
            <div className={classnames( styles.layerItem, styles.layerCol5 )}>管网检测</div>
            <div className={classnames( styles.layerItem, styles.layerCol5 )}>充值查询</div>
            <div className={classnames( styles.layerItem, styles.layerCol5 )}>...</div>
          </div>
        </div>
        <div className={styles.layer}>
          <div className={styles.layerTitle}>
            <div>应用系统</div>
          </div>
          <div className={classnames( styles.layerContent, styles.flexCol )}>
            <div className={styles.layerBlock}>
              <div className={styles.blockTitle}>标准应用</div>
              <div className={classnames( styles.layerItem, styles.layerCol5 )}>建筑能耗管理</div>
              <div className={classnames( styles.layerItem, styles.layerCol5 )}>部门能耗管理</div>
              <div className={classnames( styles.layerItem, styles.layerCol5 )}>设施能耗管理</div>
              <div className={classnames( styles.layerItem, styles.layerCol5 )}>用能平衡检测</div>
              <div className={classnames( styles.layerItem, styles.layerCol5 )}>能耗数据上报</div>
            </div>
            <div className={styles.layerBlock}>
              <div className={styles.blockTitle}>扩展应用</div>
              <div className={classnames( styles.layerItem, styles.layerCol4 )}>商业用能收费</div>
              <div className={classnames( styles.layerItem, styles.layerCol4 )}>用能账目管理</div>
              <div className={classnames( styles.layerItem, styles.layerCol4 )}>中央空调监控</div>
              <div className={classnames( styles.layerItem, styles.layerCol4 )}>分体空调监控</div>
              <div className={classnames( styles.layerItem, styles.layerCol4 )}>多联机空调监控</div>
              <div className={classnames( styles.layerItem, styles.layerCol4 )}>智能照明监控</div>
              <div className={classnames( styles.layerItem, styles.layerCol4 )}>供暖节能监控</div>
              <div className={classnames( styles.layerItem, styles.layerCol4 )}>...</div>
              {/* <div className={classnames( styles.layerItem, styles.layerCol4 )}>配变电所监控</div>
              <div className={classnames( styles.layerItem, styles.layerCol4 )}>电气火灾监控</div>
              <div className={classnames( styles.layerItem, styles.layerCol4 )}>给水管网监控</div>
              <div className={classnames( styles.layerItem, styles.layerCol4 )}>电梯运行监控</div>
              <div className={classnames( styles.layerItem, styles.layerCol4 )}>消防安全监控</div>
              <div className={classnames( styles.layerItem, styles.layerCol4 )}>智慧互联组网</div>
              <div className={classnames( styles.layerItem, styles.layerCol4 )}>能源智慧管家</div> */}
            </div>
          </div>
        </div>
        <div className={styles.layer}>
          <div className={styles.layerTitle}>
            <div>数据中心</div>
          </div>
          <div className={styles.flexRow}>
            <div className={styles.layerContent} style={{ paddingRight: 0 }}>
              <div className={classnames( styles.layerItem, styles.layerCol4 )}>身份认证</div>
              <div className={classnames( styles.layerItem, styles.layerCol4 )}>财务结算</div>
              <div className={classnames( styles.layerItem, styles.layerCol4 )}>门户集成</div>
              <div className={classnames( styles.layerItem, styles.layerCol4 )}>系统集成</div>
              <div className={classnames( styles.layerItem, styles.layerCol4 )}>组织架构</div>
              <div className={classnames( styles.layerItem, styles.layerCol4 )}>数据挖掘</div>
              <div className={classnames( styles.layerItem, styles.layerCol4 )}>数据对接</div>
              <div className={classnames( styles.layerItem, styles.layerCol4 )}>...</div>
            </div>
            <div className={classnames( styles.layerContent, styles.layerThird )}>
              <div className={styles.blockTitle}>第三方对接</div>
              <div className={classnames( styles.layerItem, styles.layerCol2 )}>分析报表</div>
              <div className={classnames( styles.layerItem, styles.layerCol2 )}>收费结算</div>
              <div className={classnames( styles.layerItem, styles.layerCol2 )}>身份认证</div>
              <div className={classnames( styles.layerItem, styles.layerCol2 )}>...</div>
            </div>
          </div>
        </div>
        <div className={styles.layer}>
          <div className={styles.layerTitle}>
            <div>智能物联</div>
          </div>
          <div className={styles.layerContent}>
            <div className={classnames( styles.layerItem, styles.layerCol5 )}>设备对接</div>
            <div className={classnames( styles.layerItem, styles.layerCol5 )}>数据整理</div>
            <div className={classnames( styles.layerItem, styles.layerCol5 )}>海量存储</div>
            <div className={classnames( styles.layerItem, styles.layerCol5 )}>驱动开发</div>
            <div className={classnames( styles.layerItem, styles.layerCol5 )}>设备监听</div>
          </div>
        </div>
      </ResizeImage>
    );
  }
}

export default Section;
