const { Logger } = require('@siiges-services/shared');

const getUrl = (config) => config.endpoint;
const getMethod = (config) => config.metodo;
const getPath = (config) => config.path;
const getQuery = (params) => params.query;
const getPathParams = (params) => params.path;
const getBody = (params) => params.body;
const getApiKey = (config) => config.apiKey;

const makeCall = (params, config) => {
  const url = getUrl(config);
  const path = getPath(config);
  const query = getQuery(params);
  const pathParams = getPathParams(params);
  const fullPath = `${path}${pathParams ? `${pathParams}` : ''}`;
  const fullUrl = `${url}${fullPath}${query ? `${query}` : ''}`;
  const payload = getBody(params);
  const httpMethod = getMethod(config);

  const apiKey = getApiKey(config);

  const headers = {
    'Content-Type': 'application/json',
    Accept: '*/*',
    ...apiKey && { 'x-api-key': apiKey },
  };

  console.log({
    fullUrl,
    headers,
    payload,
  });

  return fetch(fullUrl, {
    method: httpMethod,
    headers,
    body: JSON.stringify(payload),
  });
};

const safeMakeCall = (config, params) => {
  try {
    return makeCall(params, config);
  } catch (error) {
    Logger.error('Request failed:', {
      error: error.message,
      statusCode: error.status,
    });

    return JSON.stringify({
      error: error.message,
    });
  }
};

const getCredentials = (findOneIntegracionQuery, accion) => findOneIntegracionQuery({ accion });
const getAction = (params) => params.accion;

const makeRequest = (
  findOneIntegracionQuery,
) => async (params) => {
  const configuration = await getCredentials(
    findOneIntegracionQuery,
    getAction(params),
  );

  if (!configuration) {
    Logger.error('No es posible completar la petición');
  }

  return safeMakeCall(
    configuration,
    params,
  );
};

module.exports = makeRequest;
