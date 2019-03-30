
// import PropTypes from 'prop-types';
// import { Fragment, Component } from 'react';
import Document, { Main, Head, NextScript } from 'next/document';
// import flush from 'styled-jsx/server';
import moment from 'moment';

// 设置中文
import 'moment/locale/zh-cn';
moment.locale( 'zh-cn' );


class CustomDocument extends Document {

  static getInitialProps( ctx ) {
    const initialProps = Document.getInitialProps( ctx );
    return { ...initialProps, head: []};
  }

  render() {
    return (
      <html lang="zh-cn">
        <Head>
          <meta name="renderer" content="webkit" />
          <meta name="force-rendering" content="webkit" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
          <script src="/static/whatenvis.min.js"></script>
          {/* Use minimum-scale=1 to enable GPU rasterization */}
          <meta name="viewport" content="user-scalable=no, width=device-width, minimum-scale=1, initial-scale=1, maximum-scale=1, shrink-to-fit=no" />
          {/* PWA primary color */}
          {/*<meta name="theme-color" content={pageContext.theme.palette.primary.main} />*/}
          {/*<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
          <link rel="stylesheet" href="/static/editor.css" />*/}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}


export default CustomDocument;
