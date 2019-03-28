
import React from 'react';


class Paper extends React.Component {
  render() {
    const { depth, children, className, ...props } = this.props;
    return (
      <div {...props} className={`${className ? `${className} ` : ''}paper`} data-depth={depth}>
        {children}
      </div>
    );
  }
}

export default Paper;

