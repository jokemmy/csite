
import React from 'react';
import Layout from '@layouts/Layout';
import Header from '@components/Header';
import Footer from '@components/Footer';
import Content from '@components/Content';
import headerStyles from '@components/Header/header.less';
import contentStyles from '@components/Content/content.less';


class Page extends React.Component {

  render() {
    const { children, tranparent, header, footer } = this.props;
    return (
      <Layout className={contentStyles.container}>
        {header !== false ? <Header className={tranparent ? headerStyles.tranparent : ''}/> : null}
        <Content>{children}</Content>
        {footer !== false ? <Footer /> : null}
      </Layout>
    );
  }
}

export default Page;
