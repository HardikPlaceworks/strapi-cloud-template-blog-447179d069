module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS', ['0af6d0615a5e51d8f4ce225fa68b514bc8a91355a5efa95c8c8f21abe3e75ce2', 'd138fbe3e2bd285f45c488bd3194e19199e2b7cf550b27642d6a64394e62e336']),
  },
});
