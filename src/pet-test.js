var Pet = require("./pet.js");
var assert = require('chai').assert;

describe("Pet", function() {

  it.skip('should have a name, price per unit, amount, and units', function() {
    var thread = new Pet('thread', .25, 8, 'spools');
    var fabric = new Pet('fabric', 4, 3, 'yards');

    assert.equal(thread.name, 'thread');
    assert.equal(thread.price, .25);
    assert.equal(thread.amount, 8);
    assert.equal(thread.units, 'spools');

    assert.equal(fabric.name, 'fabric');
    assert.equal(fabric.price, 4);
    assert.equal(fabric.amount, 3);
    assert.equal(fabric.units, 'yards');
  })


});