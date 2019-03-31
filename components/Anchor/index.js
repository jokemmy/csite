
import styles from './anchor.less';


function AnchorComp({ anchors }) {
  return (
    <div className={styles.anchor}>
      {anchors.map(( text ) => {
        return (
          <a key={text} href={`#${text}`} title={text} className={styles.link}>
            {text}
          </a>
        );
      })}
    </div>
  );
}

AnchorComp.defaultProps = {
  anchors: []
};

export default AnchorComp;
