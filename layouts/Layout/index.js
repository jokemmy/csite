
import React from 'react';
import Head from 'next/head';
import Page from '@layouts/Page';
import Header from '@components/Header';
import Anchor from '@components/Anchor';
import Footer from '@components/Footer';
import Body from '@components/Body';
import bodyStyles from '@components/Body/body.less';


class Layout extends React.Component {
  render() {
    const { children, transparent, title, header, footer, anchors } = this.props;
    return (
      <Page className={bodyStyles.container}>
        <Head>
          <title>{title}</title>
        </Head>
        {header !== false ? <Header transparent={transparent} /> : null}
        {Array.isArray( anchors ) ? <Anchor anchors={anchors} /> : null}
        <Body>{children}</Body>
        {footer !== false ? <Footer /> : null}
      </Page>
    );
  }
}

export default Layout;
