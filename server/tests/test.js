' use strict'

var chai = require('chai'),
    expect = chai.expect,
    chaiHttp = require('chai-http');
let server = require('../app');
var num
let mongoose = require("mongoose");
let Content = require('../models/orders');

chai.should()
chai.use(chaiHttp);

var id

describe('====TEST ORDERS====', () => {
  describe('/GET orders', () => {
      it('test GET dari isi orders', (done) => {
        chai.request(server)
            .get('/API/order')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('array');
                res.body.length.should.be.eql(1);
              done();
            });
      });
  });
});

describe('====TEST ORDERS====', () => {
  describe('/PUT orders', () => {
      it('test PUT dari isi orders', (done) => {
        chai.request(server)
            .get('/API/order')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('array');
                res.body.length.should.be.eql(1);
              done();
            });
      });
  });
});

describe('====TEST ORDERS===', () => {
  describe('/DELETE orders', () => {
      it('test DELETE dari isi orders', (done) => {
        chai.request(server)
            .get('/API/order')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('array');
                res.body.length.should.be.eql(1);
              done();
            });
      });
  });
});

describe('====TEST ORDERS====', () => {
  describe('/POST orders', () => {
      it('test POST dari isi orders', (done) => {
        chai.request(server)
            .get('/API/order')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('array');
                res.body.length.should.be.eql(1);
              done();
            });
      });
  });
});





///////////////////
