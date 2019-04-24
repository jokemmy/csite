
import React from 'react';
import classnames from 'classnames';
import { get } from 'rc-util/lib/Dom/css';
import { ThemeContext } from '@components/Themes';
import styles from './mask.less';


class Mask extends React.Component {

  static contextType = ThemeContext;

  constructor( props ) {
    super( props );
    this.state = {
      faded: false
    };
    this.maskRef = React.createRef();
  }

  componentDidMount() {
    this.fadeTimer = setTimeout(() => {
      this.fadeTimer = null;
      if ( !this.state.faded ) {
        this.setState({ faded: true });
      }
    }, 666 );
    this.fadeOutTimer = setTimeout(() => {
      this.fadeOutTimer = null;
      const { isLoaded } = this.context;
      const opacity = get( this.maskRef.current, 'opacity' );
      if ( isLoaded && opacity <= 0.001 && !this.state.faded ) {
        this.setState({ faded: true });
      }
    }, 400 );
  }

  componentWillUnmount() {
    this.handleClear();
  }

  handleClear = () => {
    if ( this.fadeTimer ) {
      clearTimeout( this.fadeTimer );
      this.fadeTimer = null;
    }
    if ( this.fadeOutTimer ) {
      clearTimeout( this.fadeOutTimer );
      this.fadeOutTimer = null;
    }
  };

  handleTransitionEnd = ( e ) => {
    if ( !this.state.faded && e.target === e.currentTarget && e.nativeEvent.propertyName === 'opacity' ) {
      this.setState({ faded: true });
      this.handleClear();
    }
  }

  render() {
    const { faded } = this.state;
    const { isLoaded } = this.context;
    return faded ? null : (
      <div
        ref={this.maskRef}
        onTransitionEnd={this.handleTransitionEnd}
        className={classnames( 'page-mask', {
          [styles.fadeOut]: !faded && isLoaded
        })}>
        <div className={styles.center}>
          ThingsPower
        </div>
      </div>
    );
  }
}

export default Mask;
