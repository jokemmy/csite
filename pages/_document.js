
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
          <meta charSet="utf-8" />
          <meta name="renderer" content="webkit" />
          <meta name="force-rendering" content="webkit" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
          {/* Use minimum-scale=1 to enable GPU rasterization */}
          {/*<meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no" />*/}
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
