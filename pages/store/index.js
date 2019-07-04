
import React from 'react';
// import Link from 'next/link';
import classnames from 'classnames';
import { withRouter } from 'next/router';
import { Anchor, Link } from '@components/Anchor';
import SvgIcon from '@components/SvgIcon';
import scrollTo from '@lib/scrollTo';
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

  state = {
    anchor: null,
    anchors: []
  };

  handleAnchorChange = ( anchor, anchors ) => {
    this.setState({ anchor, anchors });
  };

  scrollToAnchor = ( anchor ) => () => {
    if ( anchor ) {
      scrollTo({ anchor: anchor.anchor.dom });
    }
  };

  render() {

    const { anchor, anchors } = this.state;

    return (
      <>
        <div className={styles.banner}>
          <div className={styles.bannerMenu}>
            {[
              { code: 'Manage', name: '能源管理' },
              { code: 'Recycle', name: '能源回收' },
              { code: 'SaveAndControl', name: '节能控制' },
              { code: 'SafeAndSafety', name: '安全保障' },
              { code: 'OperationManage', name: '运行管理' },
              { code: '6', name: '智慧餐饮' },
              { code: '7', name: '智慧房产' }
            ].map(({ name, code }) => {
              return (
                <a key={code}
                  onClick={this.scrollToAnchor( anchors.find(({ anchor }) => code === anchor.value.code ))}
                  className={classnames( styles.link, {
                  [styles.selected]: anchor && anchor.value.code === code
                })}>
                  {name}
                </a>
              );
            })}
          </div>
        </div>
        <Anchor top={48 + 48} onChange={this.handleAnchorChange} className={styles.appList}>
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
                      <Link component="h1" className={styles.categoryTitle} value={{ code }}>{name}</Link>
                      <p className={styles.categoryDesc}>{desc}</p>
                    </div>
                  </div>
                  <div className={styles.categoryApps}>{appBlocks}</div>
                </div>
              );
            })}
          </div>
        </Anchor>
      </>
    );
  }
}


export default Store;
