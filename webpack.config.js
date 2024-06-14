import path from 'path'
import { fileURLToPath } from 'url'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin'
import webpack from 'webpack'
// Resolve __dirname in ESM
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const config = (env, argv) => {
  const isDevelopment =
    env.mode === 'development' || argv.mode === 'development'

  return {
    mode: env.mode || argv.mode || 'development',
    entry: './src/index.tsx',
    output: {
      filename: 'index.js',
      path: path.resolve(__dirname, 'dist'),
    },
    devtool: isDevelopment ? 'source-map' : false, // Use 'source-map' for better debugging
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
      plugins: [
        new TsconfigPathsPlugin({
          configFile: './tsconfig.json', // Ensure it uses your tsconfig.json
        }),
      ],
      mainFields: ['main'],
    },
    module: {
      rules: [
        {
          test: /\.(ts|tsx|js|jsx)$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'swc-loader',
          },
        },
        {
          test: /\.(sa|sc|c)ss$/,
          use: [
            MiniCssExtractPlugin.loader,
            'css-loader',
            'postcss-loader',
            'sass-loader',
          ],
        },
        {
          test: /\.(woff(2)?|ttf|eot|svg|otf)$/,
          type: 'asset/resource',
          generator: {
            filename: 'fonts/[name][ext]',
          },
        },
      ],
    },
    devServer: {
      static: path.join(__dirname, 'dist'),
      compress: true,
      port: 9500,
      hot: true,
      // open: true,
      client: {
        overlay: {
          warnings: false,
          errors: true,
        },
      },
      devMiddleware: {
        publicPath: '/',
      },
      historyApiFallback: true, // Ensure single page app routing works
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.html',
        scriptLoading: 'blocking',
      }),
      new MiniCssExtractPlugin({
        filename: 'index.css',
      }),
      new webpack.ProvidePlugin({
        React: 'react',
      }),
    ],
  }
}

export default config
