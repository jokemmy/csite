
import classnames from 'classnames';
import { useContext } from 'react';
import scrollTo from '@lib/scrollTo';
import { ThemeContext } from '@components/Themes';
import styles from './anchor.less';


const preventDefault = ( event ) => event.preventDefault();

export function Link({ id, href, title, className, children, ...props }) {
  return (
    <a {...props}
      tabIndex="-1"
      href={href}
      title={title}
      onClick={preventDefault}
      className={classnames( className, styles.link )}
      id={id || href.replace( /^#/, '' )}>
      {children || title}
    </a>
  );
}

function getHeight( raw ) {
  return parseFloat( raw.replace( /[^\d]/g, '' ));
}

function AnchorComp({ anchors }) {

  const { themeVariables } =  useContext( ThemeContext );
  const fromTop = getHeight( themeVariables['@anchor-height']) + getHeight( themeVariables['@header-height']);
  const handleClick = ( text ) => ( e ) => {
    e.preventDefault();
    scrollTo({
      top: fromTop + 24,
      anchor: document.getElementById( text )
    });
  };

  return (
    <div className="page-anchor">
      <div className={styles.anchor}>
        {anchors.map(( text ) => {
          return (
            <a tabIndex="-1"
              key={text}
              title={text}
              href={`#${text}`}
              className={styles.trigger}
              onClick={handleClick( text )}>
              {text}
            </a>
          );
        })}
      </div>
    </div>
  );
}

AnchorComp.defaultProps = {
  anchors: []
};

AnchorComp.Link = Link;
export default AnchorComp;
