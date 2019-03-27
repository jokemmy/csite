
import React from 'react';


class Paper extends React.Component {
  render() {
    const { depth, children, ...props } = this.props;
    return (
      <div {...props} data-depth={depth}>
        {children}
      </div>
    );
  }
}

export default Paper;

