
import { Fragment } from 'react';
import Banner from '@components/Banner';
import ParallaxFirst from './ParallaxFirst';


function App() {
  return (
    <Fragment>
      <Banner>
        <ParallaxFirst />
      </Banner>
    </Fragment>
  );
}


App.getInitialProps = async function( ctx ) {
  const layoutProps = {
    tranparent: true,
    footer: false
  };
  return { layoutProps };
};

export default App;
