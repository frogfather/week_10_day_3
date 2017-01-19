var assert = require("assert");
var Hero = require("../hero");
var Food = require("../food");
var Rat = require("../rat");
var Baddie = require("../baddie");
var Super = require("../super")
  var hero;
  var rat;
  var food1;
  var food2;
  var food3;
  var food4;
  var rat1;
  var baddie;
  var superpower1;
  var superpower2;

describe("hero", function(){

  beforeEach(function() {
    hero = new Hero("Strontium",50,"Tunnocks Snowballs");
    baddie = new Baddie("Antimony",50,"Anchovies");
    food1 = new Food("Anchovies",20);
    food2 = new Food("Toast",15);
    food3 = new Food("Tunnocks Snowballs",30);
    food4 = new Food("Banana",25);
    rat1 = new Rat("Carbon",2,"Thqueak!");
    superpower1 = new Super("flying",50);
    superpower2 = new Super("invisibility",40);
  });

  it("should have a name", function(){
    assert.equal("Strontium",hero.name);
  });

  it("should have a health", function(){
    assert.equal(50,hero.health);
  });

  it("should have a favourite food", function(){
    assert.equal("Tunnocks Snowballs",hero.faveFood);
  });

  it("should be able to speak", function(){
    assert.equal("I am "+hero.name+" I will protect you from the bad guys",hero.talk());
  });

  it("should be able to eat", function(){
    assert.equal(70,hero.eat(food1));
  });

  it("fave food should increase energy by 1.5 value", function(){
    assert.equal(95,hero.eat(food3));
  });

  it("food should decrease energy if poisoned", function(){
    assert.equal(50,hero.health);
    rat1.touchFood(food1);
    assert.equal(10,hero.eat(food1));
  });
  
  it("fave food should decrease energy by 1.5 value if poisoned", function(){
    assert.equal(50,hero.health);
    rat1.touchFood(food3);
    assert.equal(-40,hero.eat(food3));
  });
  
  it("should be able to add a superpower", function(){
    hero.addSuperpower(superpower1);
    assert.deepEqual([superpower1],hero.superPowers);
  });

  it("baddie should defeat if health 2* hero", function(){
    baddie.eat(food4);
    baddie.eat(food4);
    baddie.eat(food4);
    assert.equal("You win this time "+baddie.name+"!",hero.fight(baddie));
  });

  it("baddie shouldn't defeat if health < 2* hero", function(){
    baddie.eat(food4);
    baddie.eat(food4);
    assert.equal("This isn't over "+baddie.name+"!",hero.fight(baddie));
  });

  it("energy should be transferred between combatants", function(){
    
    hero.addSuperpower(superpower1);
    baddie.addSuperpower(superpower2);
    hero.fight(baddie);
    assert.equal(40,baddie.health);
    assert.equal(60,hero.health);

  });


});
