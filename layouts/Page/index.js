
import React from 'react';
import Layout from '@layouts/Layout';
import Header from '@components/Header';


class Page extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <Layout>
        <Header />
        {children}
      </Layout>
    );
  }
}

export default Page;
