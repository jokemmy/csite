
import React from 'react';
import Basic from '@layouts/Basic';


class Layout extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <Basic>
        {children}
      </Basic>
    );
  }
}

export default Layout;
