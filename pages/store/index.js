
import React from 'react';
import Link from 'next/link';
// import classnames from 'classnames';
import { withRouter } from 'next/router';
import SvgIcon from '@components/SvgIcon';
import appData from './apps';
import styles from './store.less';


@withRouter
class Store extends React.Component {

  static getInitialProps = async function( ctx_ ) {
    const layoutProps = {
      title: '应用商店'
    };
    return { layoutProps };
  };

  render() {
    return (
      <>
        <div className={styles.banner} />
        <div className={styles.appList}>
          <div className="page-content">
            {appData.apps.map(({ code, name, apps }) => {
              const appBlocks = apps.map(({ name, icon, description, href, as }) => {
                return (
                  <Link key={name} href={href || ''} as={as}>
                    <div className={styles.app}>
                      <div className={styles.icon}>
                        <SvgIcon icon={icon} />
                      </div>
                      <div className={styles.content}>
                        <h2 className={styles.name}>{name}</h2>
                        <p className={styles.description}>
                          {( description || '' ).length > 30 ? `${( description || '' ).slice( 0, 30 )}...` : ( description || '' )}
                        </p>
                      </div>
                    </div>
                  </Link>
                );
              });
              return (
                <div key={code} className={styles.category}>
                  <div className={styles.categoryTitle}>{name}</div>
                  <div className={styles.categoryApps}>{appBlocks}</div>
                </div>
              );
            })}
          </div>
        </div>
      </>
    );
  }
}


export default Store;
