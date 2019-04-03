
import styles from './advantage.less';


function Point({ x, y, delay }) {
  return (
    <div className={styles.point} style={{ left: x, top: y }}>
      <div className={styles.pointScale} style={{ animationDelay: `${delay}ms` }} />
    </div>
  );
}

function Label({ x, y, text }) {
  return (
    <div className={styles.label} style={{ left: x, top: y }}>
      {text}
    </div>
  );
}

function Advantage( props ) {
  return (
    <div className={styles.advantage}>
      <Point x="10%" y="70%" delay={200} />
      <Point x="30%" y="30%" delay={1200} />
      <Point x="50%" y="80%" delay={3000} />
      <Point x="70%" y="70%" delay={1000} />
      <Point x="90%" y="20%" delay={4000} />
      <div>

      </div>
            <div>
      </div>
            <div>
      </div>
            <div>
      </div>
            <div>
      </div>
    </div>
  );
}

export default Advantage;
