
import React from 'react';
import NextSeo from 'next-seo';
import { Helmet } from "react-helmet";
import Page from '@layouts/Page';
import Header from '@components/Header';
import Anchor from '@components/Anchor';
import Footer from '@components/Footer';
import Body from '@components/Body';


const bodyStyles = Body.styles;

class Layout extends React.Component {
  render() {
    const { children, title, header, footer, anchor, pageProps } = this.props;
    return (
      <Page {...pageProps} className={bodyStyles.container}>
        <NextSeo
          config={{
            title: 'Simple Usage Example',
            description: 'A short description goes here.'
          }}>
        </NextSeo>
        <Helmet>
          <title>{title}</title>
          <meta
            id="viewport"
            name="viewport"
            content="user-scalable=no, width=device-width, minimum-scale=1,
            initial-scale=1, maximum-scale=1, shrink-to-fit=no" />
        </Helmet>
        {header !== false ? <Header {...( header === true || !header ? {} : header )} /> : null}
        {anchor ? <Anchor {...( anchor === true ? {} : anchor )} /> : null}
        <Body>{children}</Body>
        {footer !== false ? <Footer {...( footer === true || !footer ? {} : footer )} /> : null}
      </Page>
    );
  }
}

export default Layout;
