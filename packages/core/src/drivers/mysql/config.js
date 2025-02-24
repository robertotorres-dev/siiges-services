const config = require('../../../config/config');

const { mysql } = config;
console.log(mysql);

const {
  dbHost, dbPort, dbUser, dbPassword, dbName, dbAdmin,
} = mysql;

const USER = encodeURIComponent(dbUser);
const PASSWORD = encodeURIComponent(dbPassword);
const URI = `${dbAdmin}://${USER}:${PASSWORD}@${dbHost}:${dbPort}/${dbName}`;

module.exports = {
  development: {
    url: URI,
    dialog: `${dbAdmin}`,
    dialectOptions: {
      ssl: {
        rejectUnauthorized: false,
      },
    },
  },
  production: {
    url: URI,
    dialog: `${dbAdmin}`,
    dialectOptions: {
      ssl: {
        rejectUnauthorized: false,
      },
    },
  },
};
