
import React from 'react';
import styles from './section.less';


const tableData = [{
  key: '1',
  col1: '驱动力',
  col2: '外部驱动力（政策和措施）',
  col3: '内部驱动力（机制和标准）'
}, {
  key: '2',
  col1: '目标',
  col2: '节能降耗',
  col3: '整体提高建筑和设施设备的能效、运行效率和使用寿命'
}, {
  key: '3',
  col1: '工作重点',
  col2: '能耗检测、水电管理',
  col3: '运行管理'
}, {
  key: '4',
  col1: '管理对象',
  col2: '各类能耗计量器具',
  col3: '各类基础设施和用能设备'
}, {
  key: '5',
  col1: '参与者',
  col2: '能源管理部门孤军奋战',
  col3: '能源管理部门和物业、安防、基建房产等工作相融合，转型升级，跨界发展'
}];

class Section extends React.Component {
  render() {
    return (
      <table className={styles.table}>
        <thead>
          <tr className={styles.tableHead}>
            <th></th>
            <th>能源管理 1.0</th>
            <th>智慧能源 2.0</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map(( data ) => {
            return (
              <tr key={data.key}>
                <td className={styles.col1}>
                  <span className={styles.chspan}>{data.col1}</span>
                </td>
                <td className={styles.col2}>{data.col2}</td>
                <td className={styles.col3}>{data.col3}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}

export default Section;
