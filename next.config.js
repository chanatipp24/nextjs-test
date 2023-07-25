/** @type {import('next').NextConfig} */
module.exports = {
  output: 'standalone',
  swcMinify: true,
  webpack: (config, _) => ({
    ...config,
    watchOptions: {
      ...config.watchOptions,
      poll: 800,
      aggregateTimeout: 300,
    },
  }),
}
