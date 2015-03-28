//------------------------------------------------------------------------------------------------------------------
// YOUR CODE: Create your Zoo "object literal" and Animal "constructor" and "prototypes" here.
//------------------------------------------------------------------------------------------------------------------
function Animal (name, legs) {
    this.name = name;
    this.legs = legs;
};

Animal.prototype.identify = function() {
        return "I am a " + this.name + "with " + this.legs + " legs.";
};
function Zoo (animals) {
    init : function(animals){
      this.animals = animals;
    },
};
var Zoo = {
    init : function(animals){
      this.animals = animals;
    },

    bipeds : function() {
      return this.animals.filter(function(animal){
        return animal.legs === 2;
      });
      // var bipedArray = [] ;
      // animals.forEach(function(animal) {
      //     if(animal.legs == 2) { bipedArray.push(animal) ; }
      // });
      // return bipedArray;
    },

    quadrupeds : function() {
      return this.animals.filter(function(animal){
        return animal.legs === 4;
      });
    }
      // var quadArray = [] ;
      // animals.forEach(function(animal) {
      //   if(animal.legs == 4) { quadArray.push(animal) ; }
      // });
      // return quadArray;
};





function assert(test, message) {  
  if (!test) {
    throw "ERROR: " + message;
  }
  return true;
}
 
var animals = [
  new Animal("Human", 2),
  new Animal("Monkey", 2),
  new Animal("Kangaroo", 2),
  new Animal("Horse", 4),
  new Animal("Cow", 4),
  new Animal("Centipede", 100)
];
 
Zoo.init(animals);

assert(
  Zoo.bipeds().length === 3, "the Zoo should have 3 bipeds"
);
assert(
  Zoo.quadrupeds().length === 2, "the Zoo should have 2 bipeds"
);
assert(
  Zoo[0].identify() === "I am a Human with 2 legs.", "humans have 2 legs"
);
assert(
  Zoo[2].name === "Kangaroo", "expected 'Kangaroo'"
);
assert(
  Zoo[0].identify === animals[5].identify, "only one implementation of the identify() function should exist"
);