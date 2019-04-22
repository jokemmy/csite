
import classnames from 'classnames';
import React, { Fragment } from 'react';
import SvgIcon from '@components/SvgIcon';
import systems from './systems';
import styles from './store.less';


class Store extends React.Component {

  static getInitialProps = async function( ctx_ ) {
    const layoutProps = {
      title: '应用商店'
    };
    return { layoutProps };
  };

  render() {
    return (
      <Fragment>
        <div className={styles.banner}>
        </div>
        <div className={classnames( 'page-content', styles.appList )}>
          {systems.map(({ name, icon, description }) => {
            return (
              <div key={name} className={styles.app}>
                <div className={styles.icon}>
                  <SvgIcon icon={icon} />
                </div>
                <div className={styles.content}>
                  <h2 className={styles.name}>{name}</h2>
                  <p className={styles.description}>{description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </Fragment>
    );
  }
}


export default Store;
