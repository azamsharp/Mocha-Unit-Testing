const request = require('supertest')
const assert = require('assert')
const app = require('../app')

describe('GET /tasks',function(){

  it('should return a list of all tasks',function(done){

      request(app)
      .get('/tasks')
      .expect(200)
      .expect('Content-Type','application/json; charset=utf-8')
      .expect(function(res){
        assert.ok(res.body['tasks'].length > 0)
      })
      .end(done)
  })

})

describe('GET /hello',function(){

  it('should return successfully',function(done){

        request(app)
        .get('/hello')
        .expect(200)
        .expect('Content-Type','application/json; charset=utf-8')
        .expect(function(res){
          assert.equal(res.body['hello'],'world')
        })
        .end(done)

  })

})
