const { resolve } = require('path');

module.exports = {
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        fixtures: resolve(__dirname, '/fixtures/index.html'),
      },
    },
  },
};
