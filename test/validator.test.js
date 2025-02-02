var createValidator = require('../')
  , validity = require('@clocklimited/validity')
  , assert = require('assert')

describe('validity-validate-if-property-set', function () {

  it('should throw if no property to check passed', function () {
    assert.throws(function () {
      createValidator()
    }, /No property to check provided/)
  })

  it('should throw if no validity function passed', function () {
    assert.throws(function () {
      createValidator('property')
    }, /No validator function provided/)

    assert.throws(function () {
      createValidator('property', 'not a function')
    }, /No validator function provided/)
  })

  it('should validate if property is set', function (done) {
    var obj =
      { property: 'set'
      , secondProperty: ''
      }
    createValidator('property', validity.required)('secondProperty', 'Second Property', obj, function (err, message) {
      assert.equal('Second Property is required', message)
      done()
    })
  })

  it('should not validate if property not set', function (done) {
    var obj =
      { property: ''
      , secondProperty: ''
      }
    createValidator('property', validity.required)('secondProperty', 'Second Property', obj, function (err, message) {
      assert.equal(undefined, message)
      done()
    })
  })

  it('should be able to pass validation', function (done) {
    var obj =
      { property: 'set'
      , secondProperty: 'also set'
      }
    createValidator('property', validity.required)('secondProperty', 'Second Property', obj, function (err, message) {
      assert.equal(undefined, message)
      done()
    })
  })

})
