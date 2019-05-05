
import React from 'react';
import App, { Container } from 'next/app';
import Layout from '@layouts/Layout';


class CustomApp extends App {

  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if ( Component.getInitialProps ) {
      pageProps = await Component.getInitialProps( ctx );
    }

    return { pageProps };
  }

  render() {

    const { Component, pageProps } = this.props;
    const { layoutProps, statusCode, ...componentProps } = pageProps;

    return (
      <Container>
        <Layout {...layoutProps} statusCode={statusCode}>
          <Component {...componentProps} statusCode={statusCode} />
        </Layout>
      </Container>
    );
  }
}

export default CustomApp;
