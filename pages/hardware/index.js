
import classnames from 'classnames';
import React, { Fragment } from 'react';
import banner from '@assets/images/hardware-banner.jpg';
import productions from './productions';
import styles from './hardware.less';

function Hardware() {
  return (
    <Fragment>
      <section className="page-top-banner">
        <div className="page-banner-images" style={{ backgroundImage: `url(${banner})` }} />
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
