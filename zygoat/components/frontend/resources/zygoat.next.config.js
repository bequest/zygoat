// This file is automatically generated and updated by Zygoat and should not
// be edited manually. To extend or overwrite these settings, edit
// next.config.js

const prod = process.env.NODE_ENV === 'production';

const config = {
  webpack: config => {
    config.resolve.alias['@@'] = __dirname;
    config.resolve.alias['@wui'] = '@bequestinc/wui';
    return config;
  },
  env: {
    PROD: prod,
    BACKEND_URL: prod ? process.env.BACKEND_URL : 'http://backend:3001',
  },
};

const plugins = [];

module.exports = { plugins, config };
