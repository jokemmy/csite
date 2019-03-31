
import React, { Fragment } from 'react';


function Scene() {
  return (
    <Fragment>
      <div />
    </Fragment>
  );
}

Scene.getInitialProps = async function( ctx ) {
  const layoutProps = {
    title: '解决方案'
  };
  return { layoutProps };
};

export default Scene;
