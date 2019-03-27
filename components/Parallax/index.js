
import React from 'react';
import Parallax from 'parallax-js';


class Scene extends React.Component {

  constructor( props ) {
    super( props );
    this.sceneRef = React.createRef();
  }

  componentDidMount() {
    const { options } = this.props;
    this.parallaxInstance = new Parallax( this.sceneRef.current, options );
  }

  componentWillUnmount() {
    this.parallaxInstance.destroy();
  }

  render() {
    const { children, ...props } = this.props;
    return (
      <div {...props} ref={this.sceneRef}>
        {children}
      </div>
    );
  }
}

export default Scene;
