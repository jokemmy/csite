
import classnames from 'classnames';
import React, { Fragment } from 'react';
import banner from '@assets/images/hardware-banner.jpg';
import productions from './productions';
import styles from './hardware.less';

function Hardware() {
  return (
    <Fragment>
      <section className="page-view" style={{ height: 300 }}>
        <div className="page-view-bg" style={{ backgroundImage: `url(${banner})` }} />
        <div className={styles.listContent}>
          <h1>智能硬件<span>Smart Hardware</span></h1>
        </div>
      </section>
      <div className={styles.prods}>
        {productions.map(( production, index ) => {
          const isOdd = index % 2 === 1;
          return (
            <section key={index} className={`page-block ${isOdd ? 'odd' : 'even'}`}>
              <div className={classnames( 'page-content', styles.prod )}>
                <div className={styles.prodPic}>
                  <img alt={production.name} src={production.image} />
                </div>
                <div className={styles.prodDesc} dangerouslySetInnerHTML={{ __html: production.html }} />
              </div>
            </section>
          );
        })}
      </div>
    </Fragment>
  );
}

Hardware.getInitialProps = async function( ctx ) {
  const layoutProps = {
    transparent: true,
    title: '智能硬件'
  };
  return { layoutProps };
};

export default Hardware;
