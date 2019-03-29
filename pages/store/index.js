
import React, { Fragment } from 'react';


function Store() {
  return (
    <Fragment>
      <div />
    </Fragment>
  );
}

Store.getInitialProps = async function( ctx ) {
  const layoutProps = {};
  return { layoutProps };
};

export default Store;
