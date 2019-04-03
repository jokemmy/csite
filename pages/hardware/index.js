
import classnames from 'classnames';
import React, { Fragment } from 'react';
import styles from './hardware.less';


function Hardware() {
  return (
    <Fragment>
      <section className="page-banner page-section">

      </section>
    </Fragment>
  );
}

Hardware.getInitialProps = async function( ctx ) {
  const layoutProps = {
    title: '智能硬件'
  };
  return { layoutProps };
};

export default Hardware;
