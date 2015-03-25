

function Grove (theTrees) {
  this.trees = theTrees;
}
function Tree (name) {
    this.name = name;
    this.fruits = 0;
    this.height = 5;
}


//-------------------------------------------------------------------------
// ORANGE TREE DRIVER CODE
//-------------------------------------------------------------------------

function fastforward(theTree, years){
  i = 0
  do {
    i += 1;
    theTree.year();
    console.log('The '+theTree.type +'tree is '+ theTree.age + 'years old, and is '+ theTree.height +' feet tall.')
    basket = []
    var fruits = theTree.fruitCount;
      while (fruits > 0) {
        fruits -= 1 ;
        theTree.pickFruit(basket);

      } 
    console.log('You put '+ basket.length +' fruits into your basket')
  } while (i < years); 
};


//-------------------------------------------------------------------------
// GROVE DRIVER CODE
//-------------------------------------------------------------------------

var treeArray = [new Tree("OrangeTree"),
         new Tree("AppleTree"),
         new Tree("MangoTree")]

var andrewsGrove = new Grove(treeArray)

var length = andrewsGrove.trees.length;

for (var i = 0; i < length; i++ ) {
  element = Grove.trees[i];
  fastforward(element, 20);
};