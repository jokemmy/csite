
import moment from 'moment';
import classnames from 'classnames';
import police from '@assets/images/icon-police.png';
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
            <div className="footer-beian">
              <a target="_blank" href="http://www.beian.miit.gov.cn">苏ICP备19019187号-1</a>
              <span style={{ width: 300, display: 'inline-block', paddingLeft: 8 }}>
                <a
                  target="_blank"
                  href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=32021402001107">
                  <img alt="police" src={police} style={{ marginRight: 3 }} />
                  <span style={{ height: 20, lineHeight: '20px' }}>苏公网安备 32021402001107号</span>
                </a>
            </span>
            </div>
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
