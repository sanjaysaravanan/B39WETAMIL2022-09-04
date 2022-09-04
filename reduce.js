// const arr = [1, 2, 3, 4, 5, 6];

// const arrSum = arr.reduce((accuVal, currVal) => {
//   return accuVal + currVal;
// });
// console.log(arrSum);

// const marks = [
//   { sub: 'English', mark: 89 },
//   { sub: 'Maths', mark: 99 },
//   { sub: 'Social', mark: 98 },
//   { sub: 'Science', mark: 97 },
//   { sub: 'Language', mark: 100 },
// ]

// const totalMarks = marks.reduce((accuVal, currVal, i) => {
//   accuVal[currVal.sub] = currVal.mark;
//   accuVal['total'] += currVal.mark;
//   return accuVal;
// }, { total: 0 });

// console.log(totalMarks);





var arr = [1, 2, 3, 4, 5, 6];

// Output: 21 ---> 1+2+3+4+5+6

// Normal flow
// var resSum = 0;

// for (var num of arr) {
//   resSum += num; // resSum = resSum + num;
// }

// console.log(resSum);


// Reduce
//   [1, 2, 3, 4, 5, 6]

// return type the last value of the prevVal
// var resSum = arr.reduce((prevVal, currVal) => {
//   console.log(prevVal, currVal); // 3 3 ---> 2 iteration

//   // passing value to prevVal for the next iteration
//   return prevVal + currVal; // 21

// })

// console.log(resSum)

/**
 * 1 Iteration prevVal = 1, currVal = 2 ---> prints 1 2 & return 3
 * 2 Iteration prevVal = 3, currVal = 3 ---> prints 3 3 & return 6
 * 3 Iteration prevVal = 6, currVal = 4 ---> prints 6 4 & return 10
 * 4 Iteration prevVal = 10, currVal = 5 ---> prints 10 5 & return 15
 * 5 Iteration prevVal = 15, currVal = 6 ---> prints 15 6 & return 21
 */

// Specifying Initial Prev Val (initialValue)
// taking the value provided as the prevVal for 1st iteration instead of first element
// then currVal will take first element

//   [1, 2, 3, 4, 5, 6]

// var resSumTwo = arr.reduce((prevVal, currVal) => {
//   console.log(prevVal, currVal); 

//   // passing value to prevVal for the next iteration
//   return prevVal + currVal;

// }, 0);

/**
 * 1 Iteration prevVal = 0, currVal = 1 ---> prints 0 1 & return 1
 * 2 Iteration prevVal = 1, currVal = 2 ---> prints 1 2 & return 3
 * 3 Iteration prevVal = 3, currVal = 3 ---> prints 3 3 & return 6
 * 4 Iteration prevVal = 6, currVal = 4 ---> prints 6 4 & return 10
 * 5 Iteration prevVal = 10, currVal = 5 ---> prints 10 5 & return 15
 * 6 Iteration prevVal = 15, currVal = 6 ---> prints 15 6 & return 21
 */

// console.log(resSumTwo);

//   [1, 2, 3, 4, 5, 6]

// var resSumThree = arr.reduce((prevVal, currVal) => {
//   console.log(prevVal, currVal); // 3 3 ---> 2 iteration

//   // passing value to prevVal for the next iteration
//   return prevVal + currVal;

// }, -10);

/**
 * 1 Iteration prevVal = -10, currVal = 1 ---> prints -10 1 & return -9
 * 2 Iteration prevVal = -9, currVal = 2 ---> prints -9 2 & return -7
 * 3 Iteration prevVal = -7, currVal = 3 ---> prints -7 3 & return -4
 * 4 Iteration prevVal = -4, currVal = 4 ---> prints -4 4 & return 0
 * 5 Iteration prevVal = 0, currVal = 5 ---> prints 0 5 & return 5
 * 6 Iteration prevVal = 5, currVal = 6 ---> prints 5 6 & return 11
 */

// console.log(resSumThree);

const marks = [
  { sub: 'english', mark: 89 },
  { sub: 'maths', mark: 99 },
  { sub: 'social', mark: 98 },
  { sub: 'science', mark: 97 },
  { sub: 'language', mark: 100 },
];

// Create Object like below,
/**
 * {
 *    total: 483,
 *    english: 89
 *    .
 *    .
 *    language: 100
 * }
 */
const totalMarks = marks.reduce((accuVal, { sub, mark }) => {
  accuVal[sub] = mark;
  accuVal['total'] += mark; // accuVal['total'] = accuVal['total'] + mark;
  accuVal['noOfSubjects'] = accuVal['noOfSubjects'] + 1;
  return accuVal;
}, { total: 0, noOfSubjects: 0 });

/**
 * 1 Iteration accuVal = { total: 0, noOfSubjects: 0 }, currVal = { sub: 'english', mark: 89 }
 *    return { total: 89, noOfSubjects: 1, english: 89 }
 * 2 Iteration accuVal = { total: 89, noOfSubjects: 1, english: 89 }, currVal = { sub: 'maths', mark: 99 }
 *    return { total: 188, noOfSubjects: 2, english: 89, maths: 99 }
 * .
 * .
 * .
 * 6 Iteration accuVal = {total: 383, noOfSubjects: 5, english: 89, maths: 99, social: 98, science: 97}, currVal = { sub: 'language', mark: 100 }
 *    return { total: 483, noOfSubjects: 2, english: 89, maths: 99, social: 98, science: 97, language: 100 }
 */

console.log(totalMarks);