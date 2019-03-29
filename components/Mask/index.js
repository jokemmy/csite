
import React from 'react';
import classnames from 'classnames';
import { ThemeContext } from '@components/Themes';
import styles from './mask.less';


class Mask extends React.Component {

  static contextType = ThemeContext;

  state = {
    fade: false
  };

  handleTransitionEnd = () => {
    this.setState({ fade: true });
  }

  render() {
    const { fade } = this.state;
    const { isLoaded } = this.context;console.log("fade:", fade)
    return (
      <div
        onTransitionEnd={this.handleTransitionEnd}
        className={classnames( 'page-mask', {
          [styles.hide]: fade,
          [styles.fadeOut]: !fade && isLoaded
        })}>
        <div className={styles.center}>
          ThingsPower
        </div>
      </div>
    );
  }
}

export default Mask;
