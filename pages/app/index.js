
import { Fragment } from 'react';
import Banner from '@components/Banner';
import ParallaxFirst from './ParallaxFirst';
import ParallaxSecond from './ParallaxSecond';


function App() {
  return (
    <Fragment>
      <Banner>
        <ParallaxFirst />
        <ParallaxSecond />
      </Banner>
    </Fragment>
  );
}


App.getInitialProps = async function( ctx ) {
  const layoutProps = {
    tranparent: true,
    footer: false,
    title: '江苏欣动信息科技'
  };
  return { layoutProps };
};

export default App;
