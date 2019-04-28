
import Banner from '@components/Banner';
import Parallax1 from './Parallax1';
import Parallax2 from './Parallax2';
import Parallax3 from './Parallax3';
import Parallax4 from './Parallax4';
import Parallax5 from './Parallax5';
// import styles from './app.less';


function App() {
  return (
    <Banner>
      <Parallax1 />
      <Parallax2 />
      <Parallax3 />
      <Parallax4 />
      <Parallax5 />
    </Banner>
  );
}


App.getInitialProps = async function( ctx_ ) {
  const layoutProps = {
    header: {
      transparent: true
    },
    footer: false,
    title: '江苏欣动信息科技'
  };
  return { layoutProps };
};

export default App;
