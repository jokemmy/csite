
import React from 'react';
import classnames from 'classnames';
import QueueAnim from 'rc-queue-anim';
import styles from './production.less';


class Production extends React.Component {
  render() {
    const { productions, className, ...props } = this.props;
    return (
      <QueueAnim
        {...props}
        delay={300}
        duration={600}
        animConfig={{ opacity:[ 1, 0 ]}}
        className={classnames( styles.container, className )}>
        {productions.map(({ name, image, html }, index ) => {
          return (
            <section key={`pro-${index}`} className={styles.pro}>
              <div className="page-content">
                <figure className={styles.proImage}>
                  <img alt={name} src={image} width="100%" />
                </figure>
                <div className={styles.proInfo} dangerouslySetInnerHTML={{ __html: html }} />
              </div>
            </section>
          );
        })}
      </QueueAnim>
    );
  }
}

export default Production;
