
import classnames from 'classnames';
// import back from '@assets/images/scene/back.svg?sprite';
// import zhinengfenxi from '@assets/images/scene/zhinengfenxi.svg?sprite';
// import SvgIcon from '@components/SvgIcon';
import styles from './scene3.less';


function SectionBlock({ className, onBack, ...props }) {
  return (
    <section {...props} className={classnames( styles.block, className )}>
      <div className={styles.blockContent}>
        <div className="page-content">

        </div>
      </div>
    </section>
  );
}

export default SectionBlock;
