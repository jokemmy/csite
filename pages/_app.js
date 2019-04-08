
import React from 'react';
import App, { Container } from 'next/app';
import Layout from '@layouts/Layout';


class CustomApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    const { layoutProps, ...componentProps } = pageProps;

    return (
      <Container>
        <Layout {...layoutProps}>
          <Component {...componentProps} />
        </Layout>
      </Container>
    );
  }
}

export default CustomApp;
