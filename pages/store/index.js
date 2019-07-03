
import React from 'react';
import Link from 'next/link';
import classnames from 'classnames';
import { withRouter } from 'next/router';
import SvgIcon from '@components/SvgIcon';
import appData from './apps';
import styles from './store.less';


@withRouter
class Store extends React.Component {

  static getInitialProps = async function( ctx_ ) {
    const layoutProps = {
      pageProps: {
        scrollClass: {
          '>=0': 'page-header-hold',
          '>=(300 - 64)': 'page-header-dark banner-menu-fixed'
        }
      },
      header: {
        transparent: true
      },
      title: '应用商店'
    };
    return { layoutProps };
  };

  render() {
    return (
      <>
        <div className={styles.banner}>
          <div className={styles.bannerMenu}>
            {[{ name: '智慧能源' }, { name: '智慧餐饮' }, { name: '智慧房产' }].map(({ name }, index ) => {
              return (
                <div key={name} className={classnames( styles.link, { [styles.selected]: !index })}>
                  {name}
                </div>
              );
            })}
          </div>
        </div>
        <div className={styles.appList}>
          <div className="page-content">
            {appData.apps.map(({ code, name, desc, color, apps }) => {
              const appBlocks = apps.map(({ name, icon, description }) => {
                return (
                  <div key={name} className={styles.app}>
                    <div className={styles.icon} style={{ backgroundColor: color }}>
                      <SvgIcon icon={icon} />
                    </div>
                    <div className={styles.content}>
                      <h2 className={styles.name}>{name}</h2>
                      <p className={styles.description}>
                        {description}
                      </p>
                    </div>
                  </div>
                );
              });
              return (
                <div key={code} className={styles.category}>
                  <div className={styles.categoryHead}>
                    <div className={styles.categoryContent}>
                      <h1 className={styles.categoryTitle}>{name}</h1>
                      <p className={styles.categoryDesc}>{desc}</p>
                    </div>
                  </div>
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
