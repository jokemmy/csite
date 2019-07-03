
import React from 'react';
import ResizeImage from '@components/ResizeImage';
import techMap from '@assets/images/scene/scene1/tech-map.svg';
import styles from './section5.less';


class Section extends React.Component {

  state = {
    loaded: false
  };

  handleInit = ( resize ) => {
    if ( this.state.loaded ) {
      resize();
    } else {
      this.handleResize = resize;
    }
  }

  handleLoad = () => {
    this.state.loaded = true;  // eslint-disable-line
    if ( this.handleResize ) {
      this.handleResize();
    }
  };

  render() {
    return (
      <ResizeImage className={styles.wrap} onInit={this.handleInit}>
        <img alt="技术架构" src={techMap} width="100%" onLoad={this.handleLoad} />
      </ResizeImage>
    );
  }
}

export default Section;
