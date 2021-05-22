const withImages = require("next-images");

module.exports = withImages({
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(jpg|png|svg)$/,
      use: {
        loader: "url-loader",
      },
    });

    return config;
  },
  images: {
    domains: ["twemoji.maxcdn.com"],
  },
});
