
import React from 'react';
import Head from 'next/head';
import NextSeo from 'next-seo';
import Page from '@layouts/Page';
import Body from '@components/Body';
import Header from '@components/Header';
import Footer from '@components/Footer';
import { withTheme } from '@components/Themes';


const bodyStyles = Body.styles;


@withTheme
class Layout extends React.Component {

  render() {

    const { children, title, themeConfig, pageProps, preLoad, env } = this.props;
    const { header, footer } = themeConfig;

    return (
      <Page {...pageProps} env={env} preLoad={preLoad} themeConfig={themeConfig} className={bodyStyles.container}>
        <Head>
          <meta charSet="utf-8" />
          <meta name="renderer" content="webkit" />
          <meta name="force-rendering" content="webkit" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
          <meta name="viewport" content="user-scalable=no,width=device-width,minimum-scale=1,initial-scale=1,maximum-scale=1,shrink-to-fit=no" />
          <script src="/static/whatenvis.min.js"></script>
        </Head>
        <NextSeo
          config={{
            title,
            description: ''
          }} />
        {header !== false ? <Header {...( header === true || !header ? {} : header )} /> : null}
        <Body>{children}</Body>
        {footer !== false ? <Footer {...( footer === true || !footer ? {} : footer )} /> : null}
      </Page>
    );
  }
}

export default Layout;
