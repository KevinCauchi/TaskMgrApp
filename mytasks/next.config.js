// next.config.js

const webpack = require('webpack');

module.exports = {
    webpack: (config, { isServer }) => {
        if (!isServer) {
            config.resolve.fallback = {
                ...config.resolve.fallback,
                fs: false, // Prevent 'fs' from being bundled on the client side
                path: false, // Prevent 'path' from being bundled on the client side
                crypto: false, // Prevent 'crypto' from being bundled on the client side
            };
        }

        return config;
    },
};
