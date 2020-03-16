const path = require('path');
const HtmlWebpackPlugin =  require('html-webpack-plugin');
const resolveTsconfigPathsToAlias = require('./src/core/resolve-tsconfig-path-to-webpack-alias');

module.exports = {
  entry : './src/index.js',
  devtool: 'inline-source-map',
  output : {
    path : path.resolve(__dirname , 'dist'),
    filename: 'index_bundle.js'
  },
  module : {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        loader: 'ts-loader'
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {test : /\.css$/, use:['style-loader', 'css-loader']},
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      },
      {
        test: /\.(jpg|png)$/,

        use: {
          loader: "url-loader",
        },
      },
      {
        test: /\.(woff(2)?|eot|ttf)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "fonts/",
            },
          },
        ],
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: "babel-loader",
          },
          {
            loader: "react-svg-loader",
            options: {
              svgo: {
                plugins: [
                  {
                    removeTitle: true,
                  },
                  {
                    cleanupIDs: {
                      prefix: {
                        toString() {
                          this.counter = this.counter || 0;

                          return `id-${this.counter++}`;
                        },
                      },
                    },
                  },
                ],
                floatPrecision: 3,
              },
              jsx: true,
            },
          },
        ],
      }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
    alias: resolveTsconfigPathsToAlias()
  },
  mode:'development',
  plugins : [
    new HtmlWebpackPlugin ({
      template : 'public/index.html'
    })
  ]

};