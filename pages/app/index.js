
import { Fragment } from 'react';
import Banner from '@components/Banner';
import Parallax1 from './Parallax1';
import Parallax2 from './Parallax2';
import Parallax3 from './Parallax3';
import Parallax4 from './Parallax4';
import Parallax5 from './Parallax5';
// import styles from './app.less';


function App() {
  return (
    <Fragment>
      <Banner>
        <Parallax1 />
        <Parallax2 />
        <Parallax3 />
        <Parallax4 />
        <Parallax5 />
      </Banner>
    </Fragment>
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
