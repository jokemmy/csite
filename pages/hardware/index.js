
import React, { Fragment } from 'react';


function Hardware() {
  return (
    <Fragment>
      <div />
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
