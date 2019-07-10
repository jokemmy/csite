
import React from 'react';
import styles from './section.less';


const feature = [{
  name: '全能源数据采集',
  desc: '通过对电、水、天然气、蒸汽、冷、热等多种能源量，以及温度、压力、振动、粉尘等非能源量进行全方位采集监测，为用户提供7X24在线的能源数据。'
}, {
  name: '智能展示',
  desc: '多种能源数据的展示方式，如基于BIM技术的可视化监控，为运维人员提供最直观、快捷、准确而高效的展示。通过GIS地图可视化形式将能源数据及与之相关的分析数据展示出来，实现远程视图监控。'
}, {
  name: '数据告警',
  desc: '对能源设施、重点用能设备进行集中监视，对能源介质出现的异常情况报警并提示，让管理人员和现场运行人员能够及时、有针对性地解决问题，保证企业的安全生产。'
}, {
  name: '智能报表',
  desc: '生成对各种能源、监测点等能源用量相关的统计报表，可根据用户自身需求定制符合用户能源消耗特点或使用习惯的能耗报表。'
}, {
  name: 'PDCA管理',
  desc: '根据历史数据，建立下一个周期的用能计划和用能目标（能源性能评估），实时监测能耗数据与用能计划和用能目标进行比较，并计算节能量或用能超标量，实现及时告警，持续改进能源绩效。'
}, {
  name: '用能行为分析',
  desc: '系统结合能源数据和设备状态,从企业用电负荷率、设备利用率分析、变压器负载率、线损率、电能质量等多个角度，实现对能源监管平台专业的分析与诊断,帮助管理者判断用能单位的生产用能行为是否合理。'
}];

class Section extends React.Component {
  render() {
    return (
      <div className={styles.wrap}>
        {feature.map(({ name, desc }) => {
          return (
            <div key={name} className={styles.item}>
              <div className={styles.name}>{name}</div>
              <div className={styles.desc}>{desc}</div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Section;
