
import React from 'react';
import Basic from '@layouts/Basic';
import Header from '@components/Header';


class Layout extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <Basic>
        <Header />
        {children}
      </Basic>
    );
  }
}


export default Layout;
