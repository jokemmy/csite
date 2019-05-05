
import React from 'react';
import Head from 'next/head';
import NextSeo from 'next-seo';
import Page from '@layouts/Page';
import Header from '@components/Header';
import Anchor from '@components/Anchor';
import Footer from '@components/Footer';
import Body from '@components/Body';


const bodyStyles = Body.styles;

class Layout extends React.Component {

  render() {
    const { children, statusCode, title, header, footer, anchor, pageProps } = this.props;
    return statusCode ? children : (
      <Page {...pageProps} className={bodyStyles.container}>
        <Head>
          <meta charSet="utf-8" />
          <meta name="renderer" content="webkit" />
          <meta name="force-rendering" content="webkit" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
          <meta name="viewport" content="user-scalable=no, width=device-width, minimum-scale=1, initial-scale=1, maximum-scale=1, shrink-to-fit=no" />
          <script src="/static/whatenvis.min.js"></script>
        </Head>
        <NextSeo
          config={{
            title,
            description: ''
          }} />
        {header !== false ? <Header {...( header === true || !header ? {} : header )} /> : null}
        {anchor ? <Anchor {...( anchor === true ? {} : anchor )} /> : null}
        <Body>{children}</Body>
        {footer !== false ? <Footer {...( footer === true || !footer ? {} : footer )} /> : null}
      </Page>
    );
  }
}

export default Layout;
