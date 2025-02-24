// External dependencies
const { models, queries } = require('@siiges-services/core');

const {
  ConfiguracionIntegracion,
} = models;

const {
  findOneQuery,
} = queries;

module.exports = {
  findOneIntegracionQuery: findOneQuery(ConfiguracionIntegracion),
};
