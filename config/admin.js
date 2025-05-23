const crypto = require('crypto');


module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET',crypto.randomBytes(16).toString('hex')),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT', crypto.randomBytes(16).toString('hex')),
  },
  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT'),
    },
  },
  flags: {
    nps: env.bool('FLAG_NPS', true),
    promoteEE: env.bool('FLAG_PROMOTE_EE', true),
  },
});
