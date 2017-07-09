
const chai = require('chai')
const Calculator = require('../models/calculator.js')

describe('calculator',function(){

  it('should be able to add two numbers successfully',function(){

      const calc = new Calculator()

      chai.should()
      const result = calc.add(2,3)
      result.should.equal(5)
  })
})
