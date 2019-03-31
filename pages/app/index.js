
import Banner from '@components/Banner';
import ParallaxFirst from './ParallaxFirst';
import ParallaxSecond from './ParallaxSecond';


function App() {
  return (
    <Banner>
      <ParallaxFirst />
      <ParallaxSecond />
    </Banner>
  );
}


App.getInitialProps = async function( ctx ) {
  const layoutProps = {
    transparent: true,
    footer: false,
    title: '江苏欣动信息科技'
  };
  return { layoutProps };
};

export default App;
