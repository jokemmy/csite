
import React, { Fragment } from 'react';


function Store() {
  return (
    <Fragment>
      <div />
    </Fragment>
  );
}

Store.getInitialProps = async function( ctx ) {
  const layoutProps = {
    title: '应用商店'
  };
  return { layoutProps };
};

export default Store;
