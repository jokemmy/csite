
import Banner from '@components/Banner';
import Beian from '@components/Footer/Beian';
import banner1 from '@assets/images/app/banner-1/banner-1.jpg';
import banner2 from '@assets/images/app/banner-2/banner-2.jpg';
import banner3 from '@assets/images/app/banner-3/banner-3.jpg';
import banner4 from '@assets/images/app/banner-4/banner-4.jpg';
import banner5 from '@assets/images/app/banner-5/banner-5.jpg';
import Parallax1 from './Parallax1';
import Parallax2 from './Parallax2';
import Parallax3 from './Parallax3';
import Parallax4 from './Parallax4';
import Parallax5 from './Parallax5';
import styles from './app.less';


function App() {
  return (
    <>
      <Banner>
        <Parallax1 />
        <Parallax2 />
        <Parallax3 />
        <Parallax4 />
        <Parallax5 />
      </Banner>
      <Beian className={styles.beian} />
    </>
  );
}


App.getInitialProps = async function( ctx_ ) {
  const layoutProps = {
    header: {
      transparent: true
    },
    footer: false,
    title: '江苏欣动信息科技',
    preLoad: [ banner1, banner2, banner3, banner4, banner5 ]
  };
  return { layoutProps };
};

export default App;
