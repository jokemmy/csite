
import moment from 'moment';
import classnames from 'classnames';
import Beian from './Beian';
import styles from './footer.less';


function Footer({ transparent, overlay, mode }) {
  return (
    <footer className={classnames( 'page-footer', {
      [styles.transparent]: transparent,
      [styles.overlay]: overlay,
      [styles.light]: mode === 'light',
      [styles.dark]: mode === 'dark'
    })}>
      <div className="footer-content page-content">
        <section className="footer-navigation">
        </section>
        <section className="footer-share">
        </section>
        <section className="footer-legal">
          <div className="footer-legal-copyright">
            Copyright © {moment().year()} 江苏欣动信息科技有限公司
            <Beian />
          </div>
          <div className="footer-legal-links">
            <a href="#">隐私政策</a>
            <a href="#">COOKIE政策</a>
            <a href="#">条款条约</a>
          </div>
        </section>
      </div>
    </footer>
  );
}

export default Footer;
