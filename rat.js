var Rat = function(name,poison,squeak){
  this.name = name;
  this.poison = poison;
  this.squeak = squeak;
};

Rat.prototype = {
  squeak: function(){
    return this.squeak;
  },
  touchFood: function(food){
    food.poison = this.poison;
  }
};

module.exports = Rat;