var assert = require("assert");
var Food = require("../food");
var Rat = require("../rat");

var rat1;
var rat2;
var food1;
var food2;

describe("hero", function(){

  beforeEach(function() {
    rat1 = new Rat("Carbon",2,"Thqueak!");
    food1 = new Food("Anchovies",20);
    food2 = new Food("Toast",15);

  });

  it("should have a name", function(){
    assert.equal("Anchovies",food1.name);
  });
  
  it("should have an energy", function(){
    assert.equal(20,food1.energy);
  });
  
  it("should be poisoned after rat touches", function(){
    assert.equal(0,food1.poison);
    rat1.touchFood(food1);
    assert.equal(2,food1.poison);
  });
  

});
