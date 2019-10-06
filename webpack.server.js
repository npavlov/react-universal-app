const path = require("path");
const webpackNodeExternals = require("webpack-node-externals");

module.exports = {
  target: "node",
  resolve: {
    extensions: [".js", ".json", ".jsx"],
  },
  entry: [path.resolve(__dirname, "./server.js")],
  output: {
    path: path.resolve(__dirname, "build"),
    publicPath: "/build",
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-react",
              [
                "@babel/preset-env",
                {
                  targets: {
                    browsers: ["last 2 versions"],
                  },
                },
              ],
            ],
          },
        },
      },
    ],
  },
  externals: [webpackNodeExternals()], // Unbundling external modules
};
