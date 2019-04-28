
import React from 'react';
import marked from 'marked';
import Head from 'next/head';
import Link from 'next/link';
import classnames from 'classnames';
import { withRouter } from 'next/router';
import NotFound from '@components/NotFound';
import apps from './apps';
import styles from './goods.less';


@withRouter
class Goods extends React.Component {

  static getInitialProps = async function( ctx ) {
    const code = ctx.query.code;
    const goods = apps.find(( goods ) => code === goods.code );
    const layoutProps = {
      title: '应用商店',
      pageProps: {
        scrollClass: {
          '>=48': 'page-store-side-fixed'
        }
      }
    };
    return { layoutProps, goods };
  };

  render() {
    const { goods } = this.props;
    return goods ? (
      <>
        <Head>
          <title>{goods.name}</title>
        </Head>
        <div className={classnames( 'page-content', styles.appPage )}>
          <div className={styles.appMarkdown} dangerouslySetInnerHTML={{ __html: marked( goods.content ) }} />
          <div className={styles.appSide}>
            <div className={styles.appRelations}>
              <div className={styles.appRelationsHeader}>相关应用</div>
              <ul className={styles.appRelationsContent}>
                {goods.relations.map(({ name, href, as }) => {
                  return (
                    <li key={name}>
                      <Link href={href} as={as}>
                        <a>{name}</a>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </>
    ) : <NotFound />;
  }
}


export default Goods;
