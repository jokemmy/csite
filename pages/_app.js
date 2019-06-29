
import React from 'react';
import detector from 'whatenvis/node';
import App, { Container } from 'next/app';
import Layout from '@layouts/Layout';


const fake = 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.100 Mobile Safari/537.36';

class CustomApp extends App {

  static async getInitialProps({ Component, ctx }) {

    let pageProps = {};
    let userAgent = ctx.req ? ctx.req.headers['user-agent'] : navigator.userAgent;
    userAgent = userAgent || fake;

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
