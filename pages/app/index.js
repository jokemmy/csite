
import Page from '@layouts/Page';
import Banner from '@components/Banner';
import ParallaxFirst from './ParallaxFirst';


function App() {
  return (
    <Page tranparent footer={false}>
      <Banner>
        <ParallaxFirst />
      </Banner>
    </Page>
  );
}

export default App;
