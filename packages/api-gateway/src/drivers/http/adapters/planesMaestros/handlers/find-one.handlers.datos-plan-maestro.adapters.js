const { Logger } = require('@siiges-services/shared');
const errorHandler = require('../../../utils/errorHandler');

async function findOneDatosPlanMaestro(request, reply) {
  try {
    const { planMaestroId } = request.params;

    Logger.info('[Planes Maestros]: creating Planes Maestros');
    const datosDeProyecto = await this.opdServices.findOneDatosPlanMaestro({
      planMaestroId,
    });

    return reply
      .code(200)
      .header('Content-Type', 'application/json; charset=utf-8')
      .send({ data: datosDeProyecto });
  } catch (error) {
    return errorHandler(error, reply);
  }
}

module.exports = { findOneDatosPlanMaestro };
