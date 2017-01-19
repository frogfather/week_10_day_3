var Hero = function(name,health,faveFood){
  this.name = name;
  this.health = health;
  this.faveFood = faveFood;
  this.superPowers = [];
  this.combat = 0;
}

Hero.prototype = {
  talk: function(){
    return "I am "+this.name+" I will protect you from the bad guys"
  },
  eat: function(food){
    var energy = food.energy;
    if (food.name === this.faveFood){
      energy *= 1.5;
    }
    if (food.poison > 0){
      energy *= (food.poison * -1);
    }
    this.health += energy;
    return this.health;
  },

  addSuperpower: function(superPower){
    this.superPowers.push(superPower);
  },

  removeSuperpower: function(superpower){
    var index = this.superpowers.indexOf(superpower);
    this.superPowers.splice(index,1);
  }, 

  fight: function(baddie){
    if(baddie.health > (2*this.health)){
      return("You win this time "+baddie.name+"!");
    }
    else{
      var superpower;
      var baddiesuperpower;
      if ((this.superPowers.length > 0)&&(baddie.superPowers.length > 0)){
        superpower = this.superPowers[0];
        baddiesuperpower = baddie.superPowers[0];
        energydiff = superpower.energy - baddiesuperpower.energy 
          this.health += energydiff;
          baddie.health -= energydiff; 
        } 
      return("This isn't over "+baddie.name+"!");
    }
  } 

}

module.exports = Hero;