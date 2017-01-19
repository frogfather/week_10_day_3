var assert = require("assert");
var Food = require("../food");
var Baddie = require("../baddie");
var Super = require("../super")
var Rat = require("../rat")
  var baddie;
  var food1;
  var food2;
  var superpower1;
  var superpower2;
  var rat1;

describe("baddie", function(){

  beforeEach(function() {
    baddie1 = new Baddie("Antimony",50,"Anchovies");
    food1 = new Food("Anchovies",20);
    food2 = new Food("Toast",15);
    superpower1 = new Super("flying",50);
    superpower2 = new Super("invisibility",40);
    rat1 = new Rat("Calcium",2,"Squeakle!");
  });

  it("should have a name", function(){
    assert.equal("Antimony",baddie1.name);
  });

  it("should be able to add a superpower", function(){
    baddie1.addSuperpower(superpower1);
    assert.deepEqual([superpower1],baddie1.superPowers);
  });

  it("should be able to remove a superpower", function(){
    baddie1.addSuperpower(superpower1);
    assert.deepEqual([superpower1],baddie1.superPowers);
    baddie1.removeSuperpower();
    assert.equal(0,baddie1.superPowers.length);
  });
  
  it("food should increase energy if poisoned", function(){
    assert.equal(50,baddie1.health);
    rat1.touchFood(food1);
    assert.equal(110,baddie1.eat(food1));
  });
  

});

