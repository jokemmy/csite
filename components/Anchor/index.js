
import { Anchor } from 'antd';
import styles from './anchor.less';
const { Link } = Anchor;


function AnchorComp({ anchors }) {
  return (
    <Anchor affix={false} className={styles.anchor}>
      {anchors.map(( text ) => {
        return <Link key={text} href={`#${text}`} title={text} />;
      })}
    </Anchor>
  );
}

AnchorComp.defaultProps = {
  anchors: []
};

export default AnchorComp;
