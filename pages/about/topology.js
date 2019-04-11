
import React, { Fragment } from 'react';
import fs from 'flystore';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import TweenOne from 'rc-tween-one';
import ScrollAnim from 'rc-scroll-anim';
import { get, set/*, getScroll*/ } from 'rc-util/lib/Dom/css';
import addEventListener from 'rc-util/lib/Dom/addEventListener';
import topology1 from '@assets/images/about/topology-1.svg';
import topology2 from '@assets/images/about/topology-2.svg';
import topology3 from '@assets/images/about/topology-3.svg';
import styles from './topology.less';


const OverPack = ScrollAnim.OverPack;
const TweenOneGroup = TweenOne.TweenOneGroup;
const store = fs( '@topology' );


class Arrow extends React.Component {

  static propTypes = {
    delay: PropTypes.number,
    endFlag: PropTypes.string,
    startFlag: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired,
    events: PropTypes.objectOf( PropTypes.number ),
    animation: PropTypes.arrayOf( PropTypes.object ).isRequired
  };

  static defaultProps = {
    delay: 0,
    endFlag: '',
    events: null
  };

  state = {
    paused: true,
    moment: null
  };

  componentDidMount() {
    this.handleStart();
  }

  componentWillUnmount() {
    if ( this.watcher ) {
      this.watcher.clear();
      this.watcher = null;
    }
    if ( this.timerDelay ) {
      clearTimeout( this.timerDelay );
      this.timerDelay = null;
    }
    if ( this.timerEvents ) {
      clearTimeout( this.timerEvents );
      this.timerEvents = null;
    }
  }

  handleEvents = () => {
    const { events } = this.props;
    if ( events ) {
      Object.entries( events ).forEach(([ key, time ]) => {
        this.timerEvents = setTimeout(() => {
          store.dispense( key );
        }, time );
      });
    }
  };

  handleStart = () => {
    if ( this.props.startFlag === '1' ) {
      this.timerDelay = setTimeout(() => {
        this.start();
        this.watcher = store.watch( this.props.startFlag, this.start );
      }, this.props.delay );
    } else {
      this.watcher = store.watch( this.props.startFlag, this.start );
    }
  };

  handleChange = ( e ) => {
    const { animation, endFlag } = this.props;
    const count = animation.length;
    if ( e.mode === 'onComplete' && e.index === count - 1 ) {
      if ( endFlag ) {
        store.dispense( endFlag );
      }
    } else {
      this.setState({ moment: null });
    }
  };

  start = () => {
    this.setState({
      paused: false,
      moment: 0
    }, this.handleEvents );
  };

  render() {

    const { style, className, animation } = this.props;

    return (
      <TweenOne
        style={style}
        className={className}
        animation={animation}
        paused={this.state.paused}
        moment={this.state.moment}
        onChange={this.handleChange} />
    );
  }
}

class Arrows extends React.Component {

  handleStart() {
    store.dispense( 'resize' );
  }

  render() {
    const index = 3;
    const delay = index % 4 * 100 + Math.floor( index ) * 200 + 300;
    return (
      <TweenOne
        className={styles.arrows}
        animation={{ opacity: 0, type: 'from', delay, ease: 'easeOutQuad', duration: 375, onStart: this.handleStart }}>
        {/* 前半部分 */}
        <Arrow
          delay={delay}
          startFlag="1"
          endFlag="2"
          className={styles.arrowTop}
          style={{ opacity: 1, top: 513, left: 153 }}
          animation={[
            { opacity: 1, duration: 10, ease: 'linear' },
            { top: '456', left: '241', duration: 750, ease: 'linear' },
            { opacity: 0, duration: 50, ease: 'linear' }
          ]} />
        <Arrow
          startFlag="2"
          endFlag="3"
          className={styles.arrowTop}
          style={{ opacity: 0, top: 423, left: 287 }}
          animation={[
            { opacity: 1, duration: 10, ease: 'linear' },
            { top: '403', left: '322', duration: 375, ease: 'linear' },
            { opacity: 0, duration: 50, ease: 'linear' }
          ]} />
        <Arrow
          startFlag="3"
          endFlag="4"
          className={styles.arrowLeft}
          events={{ '3-1': 375 }}
          style={{ opacity: 0, top: 403, left: 322 }}
          animation={[
            { opacity: 1, duration: 10, ease: 'linear' },
            { top: '274', left: '108', duration: 1940, ease: 'linear' },
            { opacity: 0, duration: 50, ease: 'linear' }
          ]} />
        <Arrow
          startFlag="3"
          className={styles.arrowRight}
          events={{ '3-2': 725 }}
          style={{ opacity: 0, top: 403, left: 322 }}
          animation={[
            { opacity: 1, duration: 10, ease: 'linear' },
            { top: '589', left: '639', duration: 1940, ease: 'linear' },
            { opacity: 0, duration: 50, ease: 'linear' }
          ]} />
        <Arrow
          startFlag="3-1"
          className={styles.arrowTop}
          style={{ opacity: 0, top: 374, left: 277 }}
          animation={[
            { opacity: 1, duration: 10, ease: 'linear' },
            { top: '347', left: '318', duration: 375, ease: 'linear' },
            { opacity: 0, duration: 50, ease: 'linear' }
          ]} />
        <Arrow
          startFlag="3-2"
          className={styles.arrowTop}
          style={{ opacity: 0, top: 480, left: 451 }}
          animation={[
            { opacity: 1, duration: 10, ease: 'linear' },
            { top: '451', left: '497', duration: 375, ease: 'linear' },
            { opacity: 0, duration: 50, ease: 'linear' }
          ]} />
        <Arrow
          startFlag="4"
          className={styles.arrowTop}
          style={{ opacity: 0, top: 274, left: 108 }}
          animation={[
            { opacity: 1, duration: 10, ease: 'linear' },
            { top: '247', left: '152', duration: 375, ease: 'linear' },
            { opacity: 0, duration: 50, ease: 'linear' }
          ]} />
        <Arrow
          startFlag="4"
          endFlag="5"
          events={{ '1': 225 }}
          className={styles.arrowTop}
          style={{ opacity: 0, top: 589, left: 639 }}
          animation={[
            { opacity: 1, duration: 10, ease: 'linear' },
            { top: '563', left: '683', duration: 375, ease: 'linear' },
            { opacity: 0, duration: 50, ease: 'linear' }
          ]} />
        {/* 后半部分 */}
        <Arrow
          startFlag="5"
          endFlag="6"
          className={styles.arrowTop}
          style={{ opacity: 0, top: 171, left: 272 }}
          animation={[
            { opacity: 1, duration: 10, ease: 'linear' },
            { top: '154', left: '286', duration: 225, ease: 'linear' },
            { opacity: 0, duration: 50, ease: 'linear' }
          ]} />
        <Arrow
          startFlag="5"
          className={styles.arrowTop}
          style={{ opacity: 0, top: 481, left: 805 }}
          animation={[
            { opacity: 1, duration: 10, ease: 'linear' },
            { top: '466', left: '812', duration: 225, ease: 'linear' },
            { opacity: 0, duration: 50, ease: 'linear' }
          ]} />
        <Arrow
          startFlag="6"
          className={styles.arrowRight}
          style={{ opacity: 0, top: 154, left: 286 }}
          animation={[
            { opacity: 1, duration: 10, ease: 'linear' },
            { top: '297', left: '528', duration: 2250, ease: 'linear' },
            { opacity: 0, duration: 50, ease: 'linear' }
          ]} />
        <Arrow
          startFlag="6"
          endFlag="7"
          className={styles.arrowLeft}
          style={{ opacity: 0, top: 466, left: 812 }}
          animation={[
            { opacity: 1, duration: 10, ease: 'linear' },
            { top: '304', left: '539', duration: 2250, ease: 'linear' },
            { opacity: 0, duration: 50, ease: 'linear' }
          ]} />
        <Arrow
          startFlag="7"
          endFlag="8"
          className={styles.arrowTop}
          style={{ opacity: 0, top: 300, left: 533 }}
          animation={[
            { opacity: 1, duration: 10, ease: 'linear' },
            { top: '277', left: '571', duration: 375, ease: 'linear' },
            { opacity: 0, duration: 50, ease: 'linear' }
          ]} />
        <Arrow
          startFlag="8"
          className={styles.arrowLeft}
          style={{ opacity: 0, top: 184, left: 464 }}
          animation={[
            { opacity: 1, duration: 10, ease: 'linear' },
            { top: '160', left: '425', duration: 375, ease: 'linear' },
            { opacity: 0, duration: 50, ease: 'linear' }
          ]} />
        <Arrow
          startFlag="8"
          className={styles.arrowRight}
          style={{ opacity: 0, top: 357, left: 740 }}
          animation={[
            { opacity: 1, duration: 10, ease: 'linear' },
            { top: '397', left: '801', duration: 375, ease: 'linear' },
            { opacity: 0, duration: 50, ease: 'linear' }
          ]} />
        <Arrow
          startFlag="8"
          endFlag="9"
          className={styles.arrowTop}
          style={{ opacity: 0, top: 248, left: 616 }}
          animation={[
            { opacity: 1, duration: 10, ease: 'linear' },
            { top: '188', left: '712', duration: 625, ease: 'linear' },
            { opacity: 0, duration: 50, ease: 'linear' }
          ]} />
        <Arrow
          startFlag="9"
          className={styles.arrowBottom}
          style={{ opacity: 0, top: 188, left: 712 }}
          animation={[
            { opacity: 1, duration: 10, ease: 'linear', delay: 625 },
            { top: '248', left: '616', duration: 625, ease: 'linear' },
            { opacity: 0, duration: 50, ease: 'linear' }
          ]} />
        <Arrow
          startFlag="9"
          className={styles.arrowLeft}
          style={{ opacity: 0, top: 109, left: 637 }}
          animation={[
            { opacity: 1, duration: 10, ease: 'linear', delay: 625 },
            { top: '82', left: '592', duration: 375, ease: 'linear' },
            { opacity: 0, duration: 50, ease: 'linear' }
          ]} />
        <Arrow
          startFlag="9"
          className={styles.arrowRight}
          style={{ opacity: 0, top: 238, left: 844 }}
          animation={[
            { opacity: 1, duration: 10, ease: 'linear', delay: 625 },
            { top: '268', left: '894', duration: 375, ease: 'linear' },
            { opacity: 0, duration: 50, ease: 'linear' }
          ]} />
      </TweenOne>
    );
  }
}

class Topology extends React.Component {

  constructor( props ) {
    super( props );
    this.arrowsRef = React.createRef();
  }

  componentDidMount() {
    // const { scrollTop } = getScroll();
    // if ( scrollTop > 0 ) {
    //   const scroll = document.createEvent( 'Events' );
    //   scroll.initEvent( 'scroll', true, true );
    //   window.dispatchEvent( scroll );
    // }
    this.resizStore = store.watch( 'resize', this.handleResize );
    this.resizeEvent = addEventListener( window, 'resize', this.handleResize );
  }

  componentWillUnmount() {
    if ( this.resizeEvent ) {
      this.resizeEvent.remove();
      this.resizeEvent = null;
    }
    if ( this.resizStore ) {
      this.resizStore.clear();
      this.resizStore = null;
    }
  }

  handleResize = () => {
    if ( this.arrowsRef.current ) {
      const width = get( this.arrowsRef.current, 'width' );
      const scale = width / 1200;
      set( this.arrowsRef.current, {
        transformOrigin: '0 0',
        transform: `scale(${scale}) translate(35px, 0)`
      });
    }
  };

  getChildrenToRender = ( item, i ) => {
    return (
      <li key={i} style={item.style}>
        <img alt="服务器拓扑结构图" src={item.img} width="100%" />
      </li>
    );
  };

  getEnterAnim = ( e ) => {
    const index = e.index;
    const delay = index % 4 * 100 + Math.floor( index / 3 ) * 200 + 300;
    return { y: '+=30', opacity: 0, type: 'from', delay };
  };

  render() {
    const { className, ...props } = this.props;
    const dataArray = [
      { img: topology1, style: { zIndex: 0 }},
      { img: topology2, style: { zIndex: 2 }},
      { img: topology3, style: { zIndex: 3 }}
    ];
    const childrenToRender = dataArray.map( this.getChildrenToRender );
    return (
      <OverPack
        {...props}
        playScale={[ 0.2, 0.9 ]}
        className={classnames( styles.wrapper, className )}>
        <TweenOne
          key="h3"
          component="h3"
          reverseDelay={300}
          animation={{ y: '+=30', opacity: 0, type: 'from', ease: 'easeOutQuad' }}>
          平台架构体系
        </TweenOne>
        <TweenOne
          key="p"
          component="p"
          reverseDelay={200}
          animation={{ y: '+=30', opacity: 0, type: 'from', delay: 200, ease: 'easeOutQuad' }}>
          依托物联网技术和信息化手段，打造成物联融合、数据共享、业务多样的全新的智慧生态架构体系。
        </TweenOne>
        <TweenOneGroup
          key="ul"
          component="ul"
          enter={this.getEnterAnim}
          className={styles.imgWrapper}
          leave={{ y: '+=30', opacity: 0, ease: 'easeOutQuad' }}>
          {childrenToRender}
          <li ref={this.arrowsRef}>
            <Arrows />
          </li>
        </TweenOneGroup>
      </OverPack>
    );
  }
}


export default Topology;
