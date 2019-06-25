
import classnames from 'classnames';
import { useContext } from 'react';
import { ThemeContext } from '@components/Themes';
import police from '@assets/images/icon-police.png';

function Beian({ className, ...props }) {
  const { env } =  useContext( ThemeContext );
  return env.pc ? (
    <div {...props} className={classnames( 'footer-beian', className )}>
      <a target="_blank" href="http://www.beian.miit.gov.cn">苏ICP备19019187号-1</a>
      <span style={{ width: 300, display: 'inline-block', paddingLeft: 8 }}>
        <a
          target="_blank"
          href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=32021402001107">
          <img alt="police" src={police} style={{ marginRight: 3, width: 12, verticalAlign: 'text-bottom' }} />
          <span style={{ height: 20, lineHeight: '20px' }}>苏公网安备 32021402001107号</span>
        </a>
      </span>
    </div>
  ) : null;
}

export default Beian;
