# close-transitive
Lib to easily calculate the transitive closure of a function from ints to list of ints (starting from a given int).

## Usage

    bower install --save close-transitive

Then you can do

    var getAllRelatedItems = function(itemNumber) {
      return transitiveClose(getRelated, itemNumber);
    };

where `getRelated` is a function that returns a list of "related" items to a given item. 
