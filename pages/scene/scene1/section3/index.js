
import React from 'react';
import styles from './section.less';


const adv = [{
  key: '1',
  title: '为能源计量提供数据基础',
  content: ''
}, {
  key: '2',
  title: '为节能减排提供管控平台',
  content: ''
}, {
  key: '3',
  title: '为节能控制提供有效手段',
  content: ''
}, {
  key: '4',
  title: '为用能决策提供科学依据',
  content: ''
}, {
  key: '5',
  title: '为科学管理提供技术支撑',
  content: ''
}, {
  key: '6',
  title: '为统计分析提供科学方法',
  content: ''
}];

class Section extends React.Component {
  render() {
    return (
      <div className={styles.wrap}>
        {adv.map(({ key, title, content }) => {
          return (
            <div key={key}>
              <div className={styles.blockTitle}>
                {title}
              </div>
              <div className={styles.blockContent}>{content}</div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Section;
