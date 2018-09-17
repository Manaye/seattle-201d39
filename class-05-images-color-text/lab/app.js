'use strict';


function sum(a,b){ //eslint-disable-line
    var arr;
    var c = a+b;
    arr = [a+b,'The sum of '+a+' and '+b+' is '+c];
    return arr;
  }
  console.log(sum(4,7));
//multiply
function multiply(a, b) { //eslint-disable-line
 
 var result = a*b;
 var arr = [a*b, "The product of "+ a+ ' and '+ b+ ' is '+result];
 return arr; 
}
console.log(multiply(5,9));

// Write your code here
function sumAndMultiply(a, b, c) { //eslint-disable-line
    var sumResult = a + b + c;
    var multiplyResult = a * b * c;
    var arr = [sumResult,multiplyResult,a+' and '+ b+ ' and '+ c+ ' sum to '+sumResult, 'The product of '+ a + ' and '+ b+ ' and '+c+' is '+multiplyResult];
    return arr;
    }
    console.log(sumAndMultiply(4,7,5));



/////////////////////////////////////

// Write your code here
function sumArray(arr){
    var sum = arr.reduce(function(acc, cur){
       return acc+cur;
     },0);
     var result = [sum, arr.join()+' thier sum is '+ sum]
     return result;
   
   }
   console.log(sumArray([2,3,4]));


/////////////////////////////////////

function multiplyArray(arr){
 var product = arr.reduce(function(acc, cur){
    return acc*cur;
  });
  var result = [product, arr.join()+' thier product is '+ product]
  return result;

}
console.log(multiplyArray([2,3,4]));


function multiplyArrayAny(arr){
 var product = arr.reduce(function(acc, cur){
    return acc*cur;
  });
  var result = [product, arr.join()+' thier product is '+ product]
  return result;

}
console.log(multiplyArrayAny([1,2,3,4,5]));
