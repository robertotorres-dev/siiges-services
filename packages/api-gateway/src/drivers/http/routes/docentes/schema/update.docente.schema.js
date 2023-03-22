const { docente } = require('./properties/docente');
const { responseProperties } = require('./properties/responseProperties');

const updateDocenteSchema = {
  tags: ['docente'],
  description: 'docente',
  params: {
    type: 'object',
    properties: {
      docenteId: { type: 'integer' },
    },
    required: ['docenteId'],
  },
  body: {
    type: 'object',
    properties: {
      ...docente,
    },
  },
  response: {
    201: {
      type: 'object',
      properties: {
        data: {
          type: 'object',
          properties: {
            id: { type: 'integer' },
            ...responseProperties,
          },
        },
      },
    },
  },
};

module.exports = updateDocenteSchema;
