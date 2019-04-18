
import React from 'react';
import Link from 'next/link';
import classnames from 'classnames';
import TweenOne from 'rc-tween-one';
import QueueAnim from 'rc-queue-anim';
import { categorys } from './productions';
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
              <div className={styles.proInfo}>
                <div className={styles.proInfoContent} dangerouslySetInnerHTML={{ __html: html }} />
              </div>
              <figure className={styles.proImage}>
                <img alt={name} src={image} width="100%" />
              </figure>
            </section>
          );
        })}
      </QueueAnim>
    );
  }
}

function Banner({ category }) {
  return (
    <TweenOne
      className={styles.bannerContainer}
      animation={{ opacity: 0, type: 'from' }}>
      <div className={styles.banner}>
        <TweenOne component="h1" animation={{ x: 100, type: 'from' }}>{category.name}</TweenOne>
        <TweenOne component="p" animation={{ x: -80, type: 'from' }}>{category.description}</TweenOne>
      </div>
      <div className={styles.bannerMenu}>
        {categorys.map(({ name, url, as }) => {
          return (
            <Link key={name} as={as} href={url}>
              <a className={classnames( styles.link, {
                [styles.selected]: category.name === name
              })}>{name}</a>
            </Link>
          );
        })}
      </div>
    </TweenOne>
  );
}

Production.Banner = Banner;

export default Production;
