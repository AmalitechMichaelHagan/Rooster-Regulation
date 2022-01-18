const assert = require('assert');

const Rooster = require('../index');

describe('roosterBlock',()=>{

describe('.announceDawn',()=>{
it('returns a rooster call',()=>{
// Define expected output
const expected = 'cock-a-doodle-doo!';
 
// Call Rooster.announceDawn and store result in variable
 const actual = Rooster.announceDawn();

// Use an assert method to compare actual and expected result
assert.strictEqual(actual,expected);
  
})

})

describe('.timeAtDAwn',()=>{
it('returns its argument as a string',()=>{
//Setup
const expected = '9';
const number = 9;

//Exercise
const actual = Rooster.timeAtDawn(number);

//Verify
assert.strictEqual(actual,expected);  

})

it('throws an error if passed a number less than 0',()=>{
//Setup
const number = -1;
const expected = RangeError;

//Exercise_Verify
assert.throws(()=>{
  Rooster.timeAtDawn(number);
},expected)

})

it('throws an error if passed a number greater than 23',()=>{
//Setup
const number = 24;
const expected = RangeError;

//Exercise_Verify
assert.throws(()=>{
  Rooster.timeAtDawn(number);
},expected)


})


})
})