
import moment from 'moment';
import Document, { Html, Main, Head, NextScript } from 'next/document';
import sprite from 'svg-sprite-loader/runtime/sprite.build';

// 设置中文
import 'moment/locale/zh-cn';
moment.locale( 'zh-cn' );

class CustomDocument extends Document {

  static async getInitialProps( ctx ) {
    const initialProps = await Document.getInitialProps( ctx );
    const spriteContent = sprite.stringify();
    // const head = initialProps.head.filter(({ props }) => {
    //   return props.type !== 'meta' || ( props.key !== 'charSet' || props.key !== 'viewport' );
    // });
    return { ...initialProps, spriteContent };
  }

  render() {
    return (
      <Html lang="zh-cn">
        <Head>
          {/*<meta charSet="utf-8" />*/}
{/*          <meta name="renderer" content="webkit" />
          <meta name="force-rendering" content="webkit" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />*/}
          {/* Use minimum-scale=1 to enable GPU rasterization */}
          {/*<meta name="viewport" content="user-scalable=no, width=device-width, minimum-scale=1, initial-scale=1, maximum-scale=1, shrink-to-fit=no" />*/}
          {/* PWA primary color */}
          {/*<meta name="theme-color" content={pageContext.theme.palette.primary.main} />*/}
          {/*<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />*/}
          {/*<script src="/static/whatenvis.min.js"></script>*/}
        </Head>
        <body>
          <div dangerouslySetInnerHTML={{ __html: this.props.spriteContent }} />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}


export default CustomDocument;
