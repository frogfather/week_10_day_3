var Baddie = function(name,health,faveFood){
  this.name = name;
  this.health = health;
  this.faveFood = faveFood;
  this.superPowers = [];
  this.combat = 0;
}

Baddie.prototype = {
  speak: function(){
    return "Muahahaha bow down before me etc";
  },
  eat: function(food){
    var energy = food.energy;
    if (food.name === this.faveFood){
      energy *= 1.5;
    }
    if (food.poison > 0){
      energy *= food.poison;
    }

     this.health += energy;
    return this.health;
  },
  addSuperpower: function(superPower){
    this.superPowers.push(superPower);
  },
  removeSuperpower: function(superpower){
    var index = this.superPowers.indexOf(superpower);
    this.superPowers.splice(index,1);
  } 
}

module.exports = Baddie;