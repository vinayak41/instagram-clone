const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

module.exports = {
  entry: path.join(__dirname, "src", "index.js"),
  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: "/",
    filename: '[name].bundle.js',
  },
  resolve: {
    extensions: [".js", ".jsx", "css", "scss"],
    alias: {
      "@components": path.resolve(__dirname, "/src/components/"),
      "@sass": path.resolve(__dirname, "/src/sass/"),
      "@assets": path.resolve(__dirname, "/src/assets/"),
      "@hooks": path.resolve(__dirname, "/src/hooks/"),
      "@utils": path.resolve(__dirname, "/src/utils/"),
      "@utils": path.resolve(__dirname, "/src/utils/"),
      "@redux": path.resolve(__dirname, "/src/redux/"),
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        resolve: {
          extensions: [".js", ".jsx"],
        },
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.(png|jp(e*)g|svg|gif)$/,
        use: ["file-loader"],
      },
      {
        test: /\.svg$/,
        use: ["@svgr/webpack"],
      },
      {
        test: /\.(js|jsx)$/,
        enforce: "pre",
        use: ["source-map-loader"],
      },
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader", "postcss-loader"],
      },
    ],
  },
  devServer: {
    hot: true,
    historyApiFallback: true,
    proxy: {
      "/api": {
        target: "http://localhost:8080",
        router: () => "http://localhost:4000",
        secure: false,
      },
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "public", "index.html"),
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
};
