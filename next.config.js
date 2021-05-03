// eslint-disable-next-line
module.exports = {
  webpackDevMiddleware: (config) => {
    // Required for HMR to work inside a Docker container
    config.watchOptions = {
      poll: 1000,
      aggregateTimeout: 300,
    };

    return config;
  },
};
