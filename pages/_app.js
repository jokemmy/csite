
import React from 'react';
import detector from 'whatenvis/node';
import App, { Container } from 'next/app';
import Layout from '@layouts/Layout';


class CustomApp extends App {

  static async getInitialProps({ Component, ctx }) {

    let pageProps = {};
    const userAgent = ctx.req ? ctx.req.headers['user-agent'] : navigator.userAgent;

    if ( Component.getInitialProps ) {
      pageProps = await Component.getInitialProps( ctx );
    }

    return { pageProps, env: detector( userAgent ) };
  }

  render() {

    const { Component, pageProps, env } = this.props;
    const { layoutProps, statusCode, ...componentProps } = pageProps;

    return (
      <Container>
        {statusCode ? <Component {...componentProps} statusCode={statusCode} /> : (
          <Layout {...layoutProps} env={env}>
            <Component {...componentProps} />
          </Layout>
        )}
      </Container>
    );
  }
}

export default CustomApp;
