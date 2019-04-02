
import React from 'react';
import Animate from 'rc-animate';
import classnames from 'classnames';
import Hammer from 'react-hammerjs';
import addEventListener from 'rc-util/lib/Dom/addEventListener';
import '@assets/motions/cScale.less';
import '@assets/motions/cSlideUp.less';
import '@assets/motions/cSlideDown.less';
import Points from './points';
import styles from './carousel.less';


class Carousel extends React.Component {

  state = {
    index: 0,
    scrolling: false
  };

  componentDidMount() {
    const eventName = whatenvis.firefox ? 'DOMMouseScroll' : 'mousewheel';
    this.wheelListener = addEventListener( document.body, eventName, this.handleWheel );
  }

  componentWillUnmount() {
    if ( this.wheelListener ) {
      this.wheelListener.remove();
      this.wheelListener = null;
    }
  }

  handleWheel = ( e ) => {
    // 正数页面向上,负数页面向下
    const delta = ( whatenvis.firefox ? 3 : 1 ) * e.delta;
    const { children } = this.props;
    const { index, scrolling } = this.state;
    const count = React.Children.count( children ) - 1;
    if ( scrolling === false ) {
      if ( delta > 0 && index > 0 ) {
        this.state.scrolling = true; // eslint-disable-line
        this.setState({
          index: index - 1,
          direction: 0 // 向上
        });
      } else if ( delta < 0 && index < count ) {
        this.state.scrolling = true; // eslint-disable-line
        this.setState({
          index: index + 1,
          direction: 1 // 向下
        });
      }
    }
  };

  handleScrollEnd = () => {
    this.state.scrolling = false; // eslint-disable-line
  };

  handleChange = ( targetIndex ) => {
    const { index, scrolling } = this.state;
    if ( scrolling === false ) {
      this.state.scrolling = true; // eslint-disable-line
      this.setState({
        index: targetIndex,
        direction: targetIndex > index ? 1 : 0
      });
    }
  };

  handleSwipe = ( event ) => {
    const { index } = this.state;
    const { children } = this.props;
    const count = React.Children.count( children );
    const { /*pointerType,*/ offsetDirection } = event;
    event.preventDefault();
    if ( offsetDirection === 8 && index < count - 1 ) { // 上
      this.handleChange( index + 1 );
    }
    if ( offsetDirection === 16 && index > 0 ) { // 下
      this.handleChange( index - 1 );
    }
  };

  render() {
    const { index, direction } = this.state;
    const { children, className, ...props } = this.props;
    const count = React.Children.count( children );
    const child = React.Children.toArray( children ).find(( _, i ) => i === index );
    return (
      <Hammer onSwipe={this.handleSwipe} direction="DIRECTION_VERTICAL">
        <div {...props} className={classnames( className, styles.carousel )}>
          <Animate
            component="div"
            transitionAppear={false}
            onEnd={this.handleScrollEnd}
            transitionName={direction ? 'c-slide-up' : 'c-slide-down'}>
            <div key={`${index}`} className={styles.paper}>
              <div className="c-scale">
                {child}
              </div>
            </div>
          </Animate>
          <Points
            size={30}
            index={index}
            onChange={this.handleChange}
            points={Array( count ).fill( 1 )} />
        </div>
      </Hammer>
    );
  }
}

export default Carousel;
