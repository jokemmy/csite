
const omit = require( 'omit.js' );
const webpack = require( 'webpack' );
const withCSS = require( '@zeit/next-css' );
const withLess = require( '@zeit/next-less' );
const compose = require( 'next-compose-plugins' );
const optimizedImages = require( 'next-optimized-images' );
const lessToJS = require( 'less-vars-to-js' );
const path = require( 'path' );
const fs = require( 'fs' );


// Where your custom.less file lives
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
      camelCase: true,
      importLoaders: 1,
      localIdentName: "[local]___[hash:base64:5]"
    },
    lessLoaderOptions: {
      javascriptEnabled: true,
      modifyVars: themeVariables
    }
  }],

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

    const nodeModules = path.resolve( __dirname, './node_modules' );
    const cssLoader = config.module.rules.find(({ test }) => test.test( '.css' ));
    const lessLoader = config.module.rules.find(({ test }) => test.test( '.less' ));
    cssLoader.exclude = nodeModules;
    lessLoader.exclude = nodeModules;
    const withoutModules = ( loader ) => {
      return {
        ...loader,
        options: Object.assign( omit( loader.options, [ 'modules', 'camelCase', 'localIdentName' ]), {
          modules: false
        })
      };
    };
    const cssLoaders = cssLoader.use.map(( item ) => {
      if ( /^css-loader/.test( item.loader )) {
        return withoutModules( item );
      }
      return item;
    });
    const lessLoaders = lessLoader.use.map(( item ) => {
      if ( /^css-loader/.test( item.loader )) {
        return withoutModules( item );
      }
      return item;
    });
    config.module.rules.push({
      test: /\.css$/,
      include: nodeModules,
      use: cssLoaders
    });
    config.module.rules.push({
      test: /\.less$/,
      include: nodeModules,
      use: lessLoaders
    });

    // momentjs 精简打包
    config.plugins.push(
      new webpack.IgnorePlugin( /^\.\/locale$/, /moment$/ )
    );

    return config;
  }
});
