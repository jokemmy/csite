
import React from 'react';
import omit from 'omit.js';
import Parallax from 'parallax-js';


class Scene extends React.Component {

  constructor( props ) {
    super( props );
    this.sceneRef = React.createRef();
  }

  componentDidMount() {
    const defaultOptions = {
      selector: '.paper'
    };
    const { options } = this.props;
    this.parallaxInstance = new Parallax(
      this.sceneRef.current,
      Object.assign( defaultOptions, options )
    );
  }

  componentWillUnmount() {
    this.parallaxInstance.destroy();
  }

  render() {
    const { children, className, ...props } = omit( this.props, ['options']);
    return (
      <div {...props} className={`${className ? `${className} ` : ''}scene`} ref={this.sceneRef}>
        {children}
      </div>
    );
  }
}

export default Scene;
