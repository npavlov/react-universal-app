const path = require("path");

module.exports = {
  target: "node",
  resolve: {
    extensions: [".js", ".json", ".jsx"],
  },
  entry: [path.resolve(__dirname, "./src/client.jsx")],
  output: {
    path: path.resolve(__dirname, "build/public"),
    publicPath: "/build/public",
    filename: "client_bundle.js",
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
};
