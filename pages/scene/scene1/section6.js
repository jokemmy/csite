
import React from 'react';
import SvgIcon from '@components/SvgIcon';
import icon from '@assets/images/scene/scene1/quote.svg';
import styles from './section6.less';


const features = [{
  key: '1',
  icon: icon,
  name: '万物互联',
  desc: '接入各种设备、各种类型的数据，以集群方式提供服务，与负载均衡相结合直接部署在 Web 服务前端；服务能力支持动态扩容, 可根据业务实际情况动态调整集群数量，实现海量数据接入。'
}, {
  key: '2',
  icon: icon,
  name: '动态建模',
  desc: '根据用户的需要，方便快捷地建立数据模型，同时支持行业标准模型的导入，如BIM/GIS等，为各种数据应用提供基础。'
}, {
  key: '3',
  icon: icon,
  name: '人工智能',
  desc: '在动态建模的基础，平台内嵌了多种人工智能算法，如智能控制、智能预测、行为分析等，让数据产生价值。'
}, {
  key: '4',
  icon: icon,
  name: '平台安全',
  desc: '从信息传输安全、登录安全、权限管理、日志审计、硬件防控等多个角度进行安全防护；同时平台覆盖各类 Web 攻击类型，实现全维度 HTTP/HTTPS 安全防范；通过云端大数据监测和学习引擎，实时同步防护规则，降低误报和漏报率。'
}];

class Section extends React.Component {

  render() {
    return (
      <div className={styles.wrap}>
        {features.map(({ key, icon, name, desc }) => {
          return (
            <div key={key} className={styles.item}>
              <div className={styles.container}>
                <div className={styles.icon}>
                  <SvgIcon icon={icon} />
                </div>
                <div className={styles.name}>{name}</div>
              </div>
              <div className={styles.desc}>{desc}</div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Section;
