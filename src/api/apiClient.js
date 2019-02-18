const request = require('request-promise');

const URL = 'https://coletum.com/api/graphql';
const TOKEN = '7s5txcu909kwc48wookgw8g00occokk';

const sendAPIRequest = async (apiPath) => {
  try {
    const response = await request(apiPath, { json: true });
    return response;
  } catch (err) { 
    console.log(err);
    return 'error';
  }
};

const getDataFromColetum = async (query) => {
  const apiPath = URL + '?query=' + query + '&token=' + TOKEN;
  const response = await sendAPIRequest(apiPath);
  if (response === 'error') return response;
  return response.data;
};

export const getAvailableForms = async () => {
  const query = '{form{id,name,status,category,answerTracking,publicAnswers}}';
  const response = await getDataFromColetum(query);
  return response;
};

export const getFormStructure = async (formName, formId) => {
  const query = `{form_structure(formId:${formId}){label,componentId,type,helpBlock,order,components}}`;
  const response = await getDataFromColetum(query);
  return response;
};