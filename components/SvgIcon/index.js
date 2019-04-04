
import classnames from 'classnames';
import styles from './svgIcon.less';


export default function Icon({ icon, className, ...props }) {
  return (
    <svg aria-hidden="true" {...props} className={classnames( styles.svgIcon, className )} >
      <use xlinkHref={`#${icon.id}`} />
    </svg>
  );
}
