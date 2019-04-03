// Given an array of ints a and an int k, return if there exists a pair (x, y) in a such that x + y = k.
function hasPairSumToK(a: number[], k:number): boolean {

}





// TESTS don't touch them

console.log(hasPairSumToK([], 2), "should return false")

console.log(hasPairSumToK([-1, -2, -3], -5), "should return true");
console.log(hasPairSumToK([1, 2, 3, 4 , 5 , 7 ], 8), "should return true");
console.log(hasPairSumToK([1, 2, 3, 4 , 96, -5], -4), "should return true");
 

console.log(hasPairSumToK([-1, -2, -3], 2), "should return false");
console.log(hasPairSumToK([1, 2, 3], 9), "should return false");
console.log(hasPairSumToK([7, 8, 9], 69), "should return false");
