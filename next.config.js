
const webpack = require( 'webpack' ); // eslint-disable-line
const withCSS = require( '@zeit/next-css' );
const withLess = require( '@zeit/next-less' );
const compose = require( 'next-compose-plugins' );
const optimizedImages = require( 'next-optimized-images' );
const lessToJS = require( 'less-vars-to-js' );
const path = require( 'path' );
const fs = require( 'fs' );


// Where your antd-custom.less file lives
const themeVariables = lessToJS(
  fs.readFileSync( path.resolve( __dirname, './assets/custom.less' ), 'utf8' )
);

if ( typeof require !== 'undefined' ) {
  require.extensions['.css'] = file => {}; // eslint-disable-line
}

if ( typeof require !== 'undefined' ) {
  require.extensions['.less'] = file => {}; // eslint-disable-line
}

module.exports = compose([

  // less支持
  [ withLess, {
    cssModules: true,
    cssLoaderOptions: {
      importLoaders: 1,
      localIdentName: "[local]___[hash:base64:5]"
    },
    lessLoaderOptions: {
      javascriptEnabled: true,
      modifyVars: themeVariables
    }
  }],

  [ withCSS, {
    cssModules: true,
    cssLoaderOptions: {
      importLoaders: 1,
      localIdentName: "[local]___[hash:base64:5]"
    }
  }],

  [ withLess, {
    cssLoaderOptions: {
      importLoaders: 1
    },
    lessLoaderOptions: {
      javascriptEnabled: true,
      modifyVars: themeVariables
    }
  }],

  // css支持
  [ withCSS, {
    cssLoaderOptions: {
      importLoaders: 1
    }
  }],

  // 图片支持
  [ optimizedImages, {
    // these are the default values so you don't have to provide them if they are good enough for your use-case.
    // but you can overwrite them here with any valid value you want.
    inlineImageLimit: 8192,
    imagesFolder: 'images',
    imagesName: '[name]-[hash].[ext]',
    handleImages: [ 'jpeg', 'png', 'svg', 'webp', 'gif' ],
    optimizeImages: true,
    optimizeImagesInDev: false,
    mozjpeg: {
      quality: 80
    },
    optipng: {
      optimizationLevel: 3
    },
    pngquant: false,
    gifsicle: {
      interlaced: true,
      optimizationLevel: 3
    },
    svgo: {
      // enable/disable svgo plugins here
    },
    webp: {
      preset: 'default',
      quality: 75
    }
  }]

], {
  webpack( config ) {

    const cssLoaders = config.module.rules.filter(({ test }) => test.test( '.css' ));
    const lessLoaders = config.module.rules.filter(({ test }) => test.test( '.less' ));

    // 修改路径
    cssLoaders[0].include = [
      path.resolve( __dirname, './components' ),
      path.resolve( __dirname, './layouts' )
    ];
    lessLoaders[0].include = [
      path.resolve( __dirname, './components' ),
      path.resolve( __dirname, './layouts' )
    ];
    cssLoaders[1].include = [
      path.resolve( __dirname, './node_modules' )
    ];
    lessLoaders[1].include = [
      path.resolve( __dirname, './node_modules' )
    ];

    // momentjs 精简打包
    config.plugins.push(
      new webpack.IgnorePlugin( /^\.\/locale$/, /moment$/ )
    );

    // console.log( "config.module.rules:", config.module.rules );
    return config;
  }
});
