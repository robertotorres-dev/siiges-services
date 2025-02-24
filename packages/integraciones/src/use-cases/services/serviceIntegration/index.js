const { integraciones } = require('../../../adapters/db');
const makeRequest = require('./make-request.use-cases');

module.exports = {
  makeRequest: makeRequest(
    integraciones.findOneIntegracionQuery,
  ),
};
