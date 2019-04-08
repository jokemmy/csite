
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
    const { children, title, header, footer, anchor, pageProps } = this.props;
    return (
      <Page {...pageProps} className={bodyStyles.container}>
        <Head>
          <title>{title}</title>
        </Head>
        {header !== false ? <Header {...( header === true || !header ? {} : header )} /> : null}
        {anchor ? <Anchor {...( anchor === true ? {} : anchor )} /> : null}
        <Body>{children}</Body>
        {footer !== false ? <Footer {...( footer === true || !footer ? {} : footer )} /> : null}
      </Page>
    );
  }
}

export default Layout;
