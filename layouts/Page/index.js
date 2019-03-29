
import React from 'react';
import Basic from '@layouts/Basic';


class Page extends React.Component {
  render() {
    const { children, ...props } = this.props;
    return (
      <Basic {...props}>
        {children}
      </Basic>
    );
  }
}

export default Page;
