















// import * as chai from 'chai';
// import { Request, Response, NextFunction } from 'express';
// import * as sinon from 'sinon';
// import { contentSecurityPolicy } from './content-security-policy';

// import expect = chai.expect;

// describe('content-security-policy middleware', () => {
//   let mockRequest: Partial<Request>;
//   let mockResponse: Partial<Response>;
//   let mockNextFunc: sinon.SinonSpy;

//   beforeEach(() => {
//     mockRequest = {};
//     mockResponse = {
//       json: sinon.spy(),
//       locals: {},
//       send: sinon.spy(),
//       set: sinon.spy(),
//       status: sinon.stub().returnsThis(),
//     };
//     mockNextFunc = sinon.spy();
//   });
  
//   it('should return an express middleware handler', () => {
//     const handler = contentSecurityPolicy();
//     expect(handler).to.be.a('function');
//     expect(handler.length).to.be.eql(3);
//   });

//   it('should set a nonce value in the response object\'s local value', () => {
//     const handler = contentSecurityPolicy();
//     handler(mockRequest as Request, mockResponse as Response, mockNextFunc as NextFunction);
//     expect(mockResponse?.locals?.nonceValue).to.be.a('string');
//   });

//   it('should invoke the next function', () => {
//     const handler = contentSecurityPolicy();
//     handler(mockRequest as Request, mockResponse as Response, mockNextFunc as NextFunction);
//     expect(mockNextFunc.calledOnce).to.be.true;
//   });

//   it('should attempt to set the content security policy', () => {
//     const handler = contentSecurityPolicy()
//     handler(mockRequest as Request, mockResponse as Response, mockNextFunc);
//     expect((mockResponse?.set as sinon.SinonSpy).calledOnce).to.be.true;
//     expect((mockResponse?.set as sinon.SinonSpy).calledWith('Content-Security-Policy', sinon.match.string)).to.be.true;
//   });
// });
