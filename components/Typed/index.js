
import React from 'react';
import Typed from 'typed.js';
import classnames from 'classnames';
import styles from './typed.less';


class TypedReact extends React.Component {

  constructor( props ) {
    super( props );
    this.typedRef = React.createRef();
  }

  componentDidMount() {
    // If you want to pass more options as props, simply add
    // your desired props to this destructuring assignment.
    const { strings } = this.props;
    // You can pass other options here, such as typing speed, back speed, etc.
    const options = {
      strings,
      typeSpeed: 50,
      backSpeed: 50,
      backDelay: 3000,
      loop: true
    };
    // this.el refers to the <span> in the render() method
    this.typed = new Typed( this.typedRef.current, options );
  }

  componentWillUnmount() {
    // Make sure to destroy Typed instance on unmounting
    // to prevent memory leaks
    if ( this.typed ) {
      this.typed.destroy();
      this.typed = null;
    }
  }

  render() {
    const { className, ...props } = this.props;
    return (
      <span {...props} className={classnames( className, styles.whiteSpace )}>
        <span ref={this.typedRef} />
      </span>
    );
  }
}

export default TypedReact;
