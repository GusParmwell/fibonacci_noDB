const { expect } = require('chai');
const { assert } = require('chai');
const request = require('request')

describe('IBM Problem Solution', () => {
  describe('Calculates proper answer and returns it via web API', () => {

    const url = 'http://localhost:3000/sum/';

    it('returns status 200', () => {
      request(url + '3', (error, response, body) => {
        assert(response.statusCode,200);
      });
    });

    it('returns status 200', () => {
      request(url + '4', (error, response, body) => {
        assert(response.statusCode,200);
      });
    });

    it('returns status 200', () => {
      request(url + '5', (error, response, body) => {
        assert(response.statusCode,200);
      });
    });

    it('returns proper answer in JSON format', () => {
      request(url + '3', (error, response, body) => {
        assert(body,'{"input":3, "result":[2,3,11,49]}');
      });
    });

    it('returns proper answer in JSON format', () => {
      request(url + '4', (error, response, body) => {
        assert(body,'{"input":4,"result":[3,11,49,603]}');
      });
    });

    it('returns proper answer in JSON format', () => {
      request(url + '5', (error, response, body) => {
        assert(body,'{"input":5,"result":[11,49,603,25681]}');
      });
    });
  });
});
