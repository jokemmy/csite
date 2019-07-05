
const omit = require( 'omit.js' );
const webpack = require( 'webpack' );
const withFonts = require( 'next-fonts' );
const withMDX = require( '@next/mdx' );
const withCSS = require( '@zeit/next-css' );
const withLess = require( '@zeit/next-less' );
const withWorkers = require('@zeit/next-workers')
const compose = require( 'next-compose-plugins' );
const { PHASE_PRODUCTION_BUILD, PHASE_EXPORT } = require( 'next/constants' );
const optimizedImages = require( 'next-optimized-images' );
const LessFunc = require( 'less-plugin-functions' );
const path = require( 'path' );


if ( typeof require !== 'undefined' ) {
  require.extensions['.css'] = file => {}; // eslint-disable-line
}

if ( typeof require !== 'undefined' ) {
  require.extensions['.less'] = file => {}; // eslint-disable-line
}

module.exports = compose([

  [ withWorkers, {
    workerLoaderOptions: {
      inline: true,
      name: '[name].[hash].js'
    }
  }],

  [ withMDX, {
    extension: /\.mdx?$/
  }],

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
      plugins: [new LessFunc()]
    },
    [PHASE_PRODUCTION_BUILD + PHASE_EXPORT]: {
      cssLoaderOptions: {
        camelCase: true,
        importLoaders: 1,
        localIdentName: '[hash:base64:8]'
      }
    }
  }],

  [ withCSS, {
    cssModules: true,
    cssLoaderOptions: {
      camelCase: true,
      importLoaders: 1,
      localIdentName: "[local]___[hash:base64:5]"
    },
    [PHASE_PRODUCTION_BUILD + PHASE_EXPORT]: {
      cssLoaderOptions: {
        camelCase: true,
        importLoaders: 1,
        localIdentName: '[hash:base64:8]'
      }
    }
  }],

  [ withFonts, {
    enableSvg: true
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
    svgSpriteLoader: {
      symbolId: '[hash:base64:8]'
    },
    webp: {
      preset: 'default',
      quality: 75
    }
  }]

], {
  useFileSystemPublicRoutes: false,
  overwriteImageLoaderPaths: 'node_modules',
  webpack( config ) {

    // 添加 node_modules 内外的 less css 支持
    const nodeModules = path.resolve( __dirname, './node_modules' );
    const cssLoader = config.module.rules.find(({ test }) => test.test( '.css' ));
    const lessLoader = config.module.rules.find(({ test }) => test.test( '.less' ));
    const withoutModules = ( item ) => {
      if ( /^css-loader/.test( item.loader )) {
        return {
          ...item,
          options: Object.assign( omit( item.options, [ 'modules', 'camelCase', 'localIdentName' ]), {
            modules: false
          })
        };
      }
      return item;
    };
    const withGlobalLess = ( patterns ) => ( loaders, item ) => {
      loaders.push( item );
      if ( /^less-loader/.test( item.loader )) {
        loaders.push({
          loader: 'style-resources-loader',
          options: {
            injector: 'prepend',
            patterns
          }
        });
      }
      return loaders;
    };
    config.module.rules.push({
      test: /\.css$/,
      include: nodeModules,
      use: cssLoader.use.map( withoutModules )
    });
    config.module.rules.push({
      test: /\.less$/,
      include: nodeModules,
      use: lessLoader.use.map( withoutModules )
    });
    cssLoader.exclude = nodeModules;
    lessLoader.exclude = nodeModules;

    // 添加全局less, 每个less开头都会引入这个文件
    lessLoader.use = lessLoader.use.reduce( withGlobalLess([
      path.resolve( __dirname, './assets/custom.less' )
    ]), []);

    // momentjs 精简打包
    config.plugins.push(
      new webpack.IgnorePlugin( /^\.\/locale$/, /moment$/ )
    );

    // 添加字体目录避免与精灵冲突
    const fontLoader = config.module.rules.find(({ test }) => test.test( '.svg' ) && test.test( '.ttf' ));
    fontLoader.include = path.resolve( __dirname, './assets/fonts' );

    // 添加特殊文件夹别名
    [ 'components', 'layouts', 'pages', 'assets', 'lib' ].forEach(( dirName ) => {
      config.resolve.alias[`@${dirName}`] = path.resolve( __dirname, `./${dirName}` );
    });

    // worker loader 报错 window is not defined
    config.output.globalObject = 'this';

    return config;
  }
});
