
import React from 'react';
import Parallax from 'parallax-js';


class ParallaxElement extends React.Component {

  constructor( props ) {
    super( props );
    this.sceneRef = React.createRef();
  }

  componentDidMount() {
    this.parallaxInstance = new Parallax( this.sceneRef.current );
  }

  componentWillUnmount() {
    this.parallaxInstance.destroy();
  }

  render() {
    return (
      <div ref={this.sceneRef} />
    );
  }
}

export default ParallaxElement;
