import env from './env';

// OBJECTS WRAPPED IN FUNCTION TO PRESERVE IMMUTABILITY
const commons = function() {
  return { code: 'yarn.relative.imports' };
};

const config = function() {
  return {
    cert: { apiEndpoint: '' },
    coll: { apiEndpoint: '' },
    local: { apiEndpoint: 'http://localhost:3000' },
    prod: { apiEndpoint: '' },
    svil: { apiEndpoint: '' }
  };
};

export default Object.assign(commons(), config()[env]);
