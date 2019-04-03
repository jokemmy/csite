
import React from 'react';
import omit from 'omit.js';
import Parallax from 'parallax-js';
import { CarouselContext } from '@components/Carousel';
//https://ken.artbees.net/wide-parallax-startup/

class Scene extends React.Component {

  static contextType = CarouselContext;

  constructor( props ) {
    super( props );
    this.sceneRef = React.createRef();
  }

  componentDidUpdate() {
    const { isEnable } = this.context;
    if ( isEnable ) {
      this.createParallax();
    } else {
      this.destroyParallax();
    }
  }

  componentDidMount() {
    const { isEnable } = this.context;
    if ( isEnable ) {
      this.createParallax();
    }
  }

  componentWillUnmount() {
    this.destroyParallax();
  }

  createParallax() {
    const defaultOptions = {
      selector: '.paper'
    };
    const { options } = this.props;
    this.parallaxInstance = new Parallax(
      this.sceneRef.current,
      Object.assign( defaultOptions, options )
    );
  }

  destroyParallax() {
    if ( this.parallaxInstance ) {
      this.parallaxInstance.destroy();
      this.parallaxInstance = null;
    }
  }

  render() {
    const { children, className, ...props } = omit( this.props, ['options']);
    return (
      <div {...props}
        ref={this.sceneRef}
        className={`${className ? `${className} ` : ''}scene`} >
        {children}
      </div>
    );
  }
}

export default Scene;
