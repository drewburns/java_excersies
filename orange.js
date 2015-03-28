//-------------------------------------------------------------------------
// MODEL
//-------------------------------------------------------------------------
 
//-------------------------------------
// Parent-class Tree:
 

function Tree() {
  this.age = 0
  this.height = 0
  this.fruit_count = 0
  this.type = "Fruit"
  this.lifeSpan = 30
  this.maturity = 12;
}
 
function Fruit(type) {
  this.type = type
};
 
Tree.prototype.year = function(){
  if (this.dead() ){
    this.fruitCount = 0;
    return "This tree is dead. Plant another.";
  }
  else if (this.age < this.maturity){
    this.fruitCount = 20;
    this.height += 1;
    this.age += 1;
  }
  else {
    this.fruitCount = 10;
    this.age += 1; }
};
 
Tree.prototype.dead = function(){
  if (this.age > this.lifeSpan){
    return true;
  }
  else {
    return false;
  }
};
 
Tree.prototype.pickFruit = function(basket){
  if (this.fruitCount > 0){
    this.fruitCount -= 1;
    var type = this.type;
    basket.push(new Fruit(type));
  }
};
 
//-------------------------------------
// Sub-classes of Tree:
 
function OrangeTree(){
  this.type = "orange";
  this.lifeSpan = 23;
  this.maturity = 8
};
 
OrangeTree.prototype = new Tree;
 
 
function AppleTree(){
  this.type = "apple"
  this.lifeSpan = 19;
  this.maturity = 9
};
 
AppleTree.prototype = new Tree;
 
 
function MangoTree(){
  this.type = "mango"
  this.lifeSpan = 16;
  this.maturity = 10
};
 
MangoTree.prototype = new Tree;
 
 
//-------------------------------------
// Literal constructor for Grove:
 
var Grove = {
 
  init : function(trees){
    this.trees = trees;
  },
 
  year : function(){
    this.trees.forEach(function(tree){
      tree.year();
    });
  },
 
  allTrees : function(){
    return this.trees
  },
 
  matureTrees : function(){
    return this.trees.filter(function(tree){
      return tree.age >= tree.maturity;
    });
  },
 
  deadTrees : function(){
    return this.trees.filter(function(tree){
      return tree.age >= tree.lifeSpan;
    });
  }
 
};
 
 
//-------------------------------------------------------------------------
// ORANGE TREE DRIVER CODE
//-------------------------------------------------------------------------
 
function fastforward(theTree, years){
  i = 0
  do {
    i += 1;
    theTree.year();
    console.log('The '+theTree.type +'tree is '+ theTree.age + ' years old, and is '+ theTree.height +' feet tall.')
    basket = []
    var fruits = theTree.fruitCount;
      while (fruits > 0) {
        fruits -= 1 ;
        theTree.pickFruit(basket);
 
      } 
    console.log('You put '+ basket.length +' fruits into your basket')
  } while (i < years); 
};
 
// tree = new OrangeTree;
// fastforward(tree, 24);
// basket.length;
// basket[0].type;
// tree.dead();
 
//-------------------------------------------------------------------------
// GROVE DRIVER CODE
//-------------------------------------------------------------------------
 
trees = [new OrangeTree,
         new AppleTree,
         new MangoTree]
 
Grove.init(trees)
 
var length = Grove.trees.length;
 
for (var i = 0; i < length; i++ ) {
  element = Grove.trees[i];
  fastforward(element, 20);
};
 
// Grove.year();
// Grove.allTrees();
// Grove.matureTrees();
// Grove.deadTrees();