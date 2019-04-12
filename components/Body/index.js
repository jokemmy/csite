
import styles from './body.less';


function Body({ children }) {
  return (
    <div className="page-body">
      {children}
    </div>
  );
}

Body.styles = styles;

export default Body;
