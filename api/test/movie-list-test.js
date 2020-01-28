const assert = require('chai').expect;

const page = require('../page/movie-list-page.js');

const testCase = {
 "positive" : {
    "getList" : "As a User, I want to be able to get OMDB Movie list",
 },
 "negative" : {
    "noSearch" : "As a User, I should got error message when I send request without key of search",
    "invalidApiKey" : "As a User, I should got error 401 when I send request with invalid API Key"
 }
}

describe(`OMDB Movie List`, () => {
 const apiKey = 'cc99fc43';
 const invalidApiKey = 'sdfsdf';
 const keySearch = 'lord';

 it(`@get ${testCase.positive.getList}`, async() => {
  const response = await page.getMovieList(apiKey, keySearch);
  assert(response.status).to.equal(200);
 }),

 it(`@get ${testCase.negative.noSearch}`, async() => {
  const response = await page.getMovieList(apiKey, '');
  assert(response.status).to.equal(200, response.body.Error);
  assert(response.body.Response).to.equal('False');
  assert(response.body.Error).to.equal('Something went wrong.');
 }),

 it(`@get ${testCase.negative.invalidApiKey}`, async() => {
   const response = await page.getMovieList(invalidApiKey, keySearch);
   assert(response.status).to.equal(401, response.body.Error);
   assert(response.body.Response).to.equal('False');
   assert(response.body.Error).to.equal('Invalid API key!');
  })
}) 