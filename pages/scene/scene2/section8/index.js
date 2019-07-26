
import React from 'react';
import styles from './section.less';


const feature = [{
  name: '省市区级平台',
  desc: '机关事务管理局，机关办公建筑和大于2万m2公共建筑为主，一个区域范围内'
}, {
  name: '智慧校园',
  desc: '学校后勤处、高校、中学，监测点多，管理单元多；宿舍用能管理'
}, {
  name: '智慧医院',
  desc: '国家卫计委，三甲医院；区卫计委，其他医院'
}, {
  name: '商业综合体',
  desc: '建设局、节能办，分项计量为基础要求租户用能管理'
}, {
  name: '智慧园区',
  desc: '生产型制造园区、物流仓储型园区、商办型园区、综合型园区商户用能管理'
}, {
  name: '工业企业',
  desc: '行业协会、管委会，用能大户企业有较多需求用能系统复杂，KPI绩效管理'
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
