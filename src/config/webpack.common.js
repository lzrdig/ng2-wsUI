var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var helpers = require('./helpers');
var ProvidePlugin = require('webpack/lib/ProvidePlugin'); 

module.exports = {
  entry: {
    'polyfills':  './src/polyfills.ts',    
    'vendor':     './src/vendor.ts',
    'twbs':       'bootstrap-loader',
    'fa':         'font-awesome-sass-loader!./config/font-awesome.config.js',    
    'app':        './src/main.ts'
  },

  resolve: {
    extensions: ['.ts', '.js', '.json', '.css', '.scss']
  },

  module: {
    rules: [
      {
        test: /\.ts$/,
        loaders: [
          {
            loader: 'awesome-typescript-loader',
            options: { configFileName: helpers.root('src', 'tsconfig.json') }
          } , 'angular2-template-loader'
        ]
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
      },
      /*
      * Bootstrap 4 loader
      */
      {
        test: /bootstrap\/dist\/js\/umd\//,
        use: 'imports-loader?jQuery=jquery'
      },     
      /*
      * Font loaders, required for font-awesome-sass-loader and bootstrap-loader
      */
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        // query: {
        //   limit: 10000,
        //   mimetype: "application/font-woff",
        //   name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        // },        
        // loader: "url-loader?limit=10000&mimetype=application/font-woff&name=/[name].[ext]" 
        loader: "url-loader?limit=10000&mimetype=application/font-woff&name=app/assets/[name].[hash].[ext]"        
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        // query: {
        //   limit: 10000,
        //   name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        // },        
        loader: "file-loader"
      },
      // {test: /\.css$/, loader:   ['style-loader', 'css-loader']},
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
        loader: 'file-loader?name=assets/[name].[hash].[ext]'
      },
      {
        test: /\.css$/,
        exclude: helpers.root('src', 'app'),
        loader: ExtractTextPlugin.extract({ fallbackLoader: 'style-loader', loader: 'css-loader?sourceMap' })
        //loader:   ['style-loader', 'css-loader']
      },
      {
        test: /\.sass$/,
        include: helpers.root('src', 'app'),
        loaders: ['css-to-string-loader','css-loader','sass-loader'] 
      },
      {
        test: /\.css$/,
        include: helpers.root('src', 'app'),
        loaders: ['css-to-string-loader','css-loader']
      }
    ]
  },

  plugins: [
    // Workaround for angular/angular#11580
    new webpack.ContextReplacementPlugin(
      // The (\\|\/) piece accounts for path separators in *nix and Windows
      ///angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/, // this works with Angular 2 (not 4)
      /angular(\\|\/)core(\\|\/)@angular/, // this works for Angular 4
      helpers.root('./src'), // location of your src
      {} // a map of your routes
    ),

    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery",
      Tether: "tether",
      "window.Tether": "tether",
      Tooltip: "exports-loader?Tooltip!bootstrap/js/dist/tooltip",
      Alert: "exports-loader?Alert!bootstrap/js/dist/alert",
      Button: "exports-loader?Button!bootstrap/js/dist/button",
      Carousel: "exports-loader?Carousel!bootstrap/js/dist/carousel",
      Collapse: "exports-loader?Collapse!bootstrap/js/dist/collapse",
      Dropdown: "exports-loader?Dropdown!bootstrap/js/dist/dropdown",
      Modal: "exports-loader?Modal!bootstrap/js/dist/modal",
      Popover: "exports-loader?Popover!bootstrap/js/dist/popover",
      Scrollspy: "exports-loader?Scrollspy!bootstrap/js/dist/scrollspy",
      Tab: "exports-loader?Tab!bootstrap/js/dist/tab",
      Util: "exports-loader?Util!bootstrap/js/dist/util"
    }),

    new webpack.optimize.CommonsChunkPlugin({
      name: ['app', 'polyfills', 'vendor']
    }),

    new HtmlWebpackPlugin({
      template: 'src/index.html'
    })
  ]
};
