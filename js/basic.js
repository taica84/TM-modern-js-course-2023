const styles =
  'padding:10px;background-color:green;width:40px;height:25px;color;white';

console.log('%chello world', styles);

/* 
String Challenge
Instructions:

Take the variable myString and capitalize the first letter of the word using some of the methods that we talked about in the last video. Put the result in a variable called myNewString.

Create multiple solutions if you would like.*/

const myString = 'developer';

// const myNewString  = myString.charAt(0).toUpperCase() + myString.substring(1)

const myNewString = `${myString.charAt(0).toUpperCase()}${myString.substring(
  1
)}`;

console.log(myNewString);

/*
Number Challenge
Instructions:

Create a variable called x that is a random number between 1 and 100 along with a variable called y that is a random number between 1 and 50.

Create a variable for the sum, difference, product, quotient and remainder of x and y. Log the output in a string that shows the two numbers of x and y along with the operator and result.

You can log the output string directly or put them in separate variables and log them like below.
You can use string concatenation or template literals for the output.
Expected Result:

console.log(sumOutput); // 31 + 15 = 46
console.log(differenceOutput); // 31 - 15 = 16
console.log(productOutput); // 31 * 15 = 465
console.log(quotientOutput); // 31 / 15 = 2.066666666666667
console.log(rmOutput); // 31 % 15 = 1
Hints:

The Math.random() function returns a floating-point, pseudo-random number in the range 0 to less than 1

The Math.floor() function will round a number down to the nearest integer
*/

let x = Math.floor(Math.random() * 101);

let y = Math.floor(Math.random() * 51);

//sum
const sum = x + y;
const sumOutput = `${x} + ${y} = ${sum} `;

//difference
const difference = x - y;
const differenceOutput = `${x} - ${y} = ${difference} `;

//multiply

const multiply = x * y;
const multiplyOutput = `${x} * ${y} = ${multiply} `;

//quotient
const quotient = x / y;
const quotientOutput = `${x} / ${y} = ${quotient} `;

//modulo
const modulo = x % y;
const moduloOutput = `${x} % ${y} = ${modulo} `;

console.log(sumOutput);
console.log(differenceOutput);
console.log(multiplyOutput);
console.log(quotientOutput);
console.log(moduloOutput);

/* 
 Array Challenges

 Challenge 1:
    Instructions:

 Use some of the array methods that we looked at to mutate the following array to = the expected result below:

 const arr = [1, 2, 3, 4, 5];

 Expected Result:
  [6, 5, 4, 3, 2, 1, 0];
*/

const arr = [1, 2, 3, 4, 5];

arr.unshift(0);
arr.push(6);
arr.reverse();

console.log(arr);

/*
Challenge 2:
Instructions:

Combine arr1 and arr2 into a new array called arr3 with the following elements:

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [5, 6, 7, 8, 9, 10];
Notice that both arr1 and arr2 include the number 5. You will have to find a way to get rid of the extra 5.

Expected Result:

console.log(arr3);
// [1,2,3,4,5,6,7,8,9,10]
Hint: There are many ways to do this, but think of the concat() method or the spread operator as well as the slice() or splice() methods
*/

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [5, 6, 7, 8, 9, 10];

//Solution 1
// const arr3 = [...arr1, ...arr2]
// arr3.splice(4,1);

//Solution 2

const arr3 = arr1.slice(0, 4).concat(arr2);

console.log(arr3);

/*
Object Challenge
Step 1
Create an array of objects called library. Add 3 objects with a property of title, author, status. Title and author should be strings (whatever value you want) and status should be another object with the properties of own, reading and read. Which should all be boolean values. For all status, set own to true and reading and read to false.

Step 2
You finished reading all of the books. Set the read value for all of them to true. Do not edit the initial object. Set the values using dot notation.

Step 3
Destructure the title from the first book and rename the variable to firstBook

Step 4
Turn the library object into a JSON string. There is a specific function that we looked at in the last section that we can use to do this.

*/

//Step 1
const renderHTML = document.querySelector('.render-html');

const library = [
  {
    title: 'Gone with the wind',
    author: 'Margaret Mitchell',
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
  {
    title: 'Steve Jobs',
    author: 'Walter Isaacson',
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
  {
    title: 'The Road Ahead',
    author: 'Bill Gates',
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
];

//Step 2
library[0].status.read = true;
library[1].status.read = true;
library[2].status.read = true;

console.log(library);

//Step 3

const { title: firstBook } = library[0];

console.log(firstBook);

//Step 4

const libraryJSON = JSON.stringify(library);
console.log(libraryJSON);

//-----------------  playing around---------------

function randomNum(arr) {
  const randomNumber = Math.floor(Math.random() * arr.length);

  console.log(randomNumber);
}

randomNum([17, 7, 23, 3, 25, 55, 67, 888, 564, 21, 325]);

/*
Function Challenges
Now that you know the basics of how functions work, let's try a few challenges.

Challenge 1
Instructions:

Create a function called getCelsius() that takes a temperature in Fahrenheit as an argument and returns the temperature in celsius.

For bonus points, write it as a one line arrow function

Expected Result:

console.log(getCelsius(32)); // 0
You can make the output look prettier by putting it into a string. You can even add \xB0 (degrees) and a C in front of the celsius temperature.

console.log(`The temperature is ${getCelsius(32)} \xB0C`);
// The temperature is 0 °C
Hints:

The formula for Fahrenheit to Celsius is (F - 32) * 5 / 9. Read more about the formula here if needed.
*/

//Challenge 1

// function getCelsius(fahrenheit) {
//   return (fahrenheit - 32 ) * 5 / 9
// }

const getCelsius = (fahrenheit) => ((fahrenheit - 32) * 5) / 9;

console.log(`The temperature is ${getCelsius(32)}\xB0C`);

//Challenge 2

const minMax = (arr) => {
  const min = Math.min(...arr);
  const max = Math.max(...arr);

  return {
    min,
    max,
  };
};

console.log(minMax([55, 32, 43, 54, 65, 76, 87, 98, 109]));

//Challenge 3

(function (length, width) {
  const area = length * width;

  const output = `The area of a rectangle with a length of ${length} and a width of ${width} is ${area}.`;

  console.log(output);
})(10, 5);

/*
      Calculator Challenge
Now that you know how to write functions and use control structures like if statements and switches, let's try to write a simple calculator.

Instructions:

Create a function called calculator that takes three parameters: num1, num2 and operator. The operator can be +, -, * or /. The function should return the result of the calculation. If anything other than the four operators is passed in, the function should return an error message.

Example:

calculator(5, 2, '+') // returns 7
calculator(5, 2, '-') // returns 3
calculator(5, 2, '*') // returns 10
calculator(5, 2, '/') // returns 2.5
calculator(5, 2, '%') // returns an error message
Hint:

You can use an if statement to the operator, but this is a good example for using a switch statement. 

*/

//Solution 1

// function calculator (num1,num2,operator)  {
//   let result;
//   if (operator === '+') {
//      result = num1 + num2
//   } else if(operator === '-'){
//     result = num1 - num2
//   } else if(operator === '*'){
//     result = num1 * num2

//   } else if(operator === '/'){
//     result = num1 / num2

//   }else{
//     console.log('Invalid operator');
//   }
//   console.log(result);
//   return result
// }

// calculator(3,5,'+')
// calculator(100,5,'-')
// calculator(25,5,'*')
// calculator(500,5,'/')
// calculator(550,7,'&')

//Solution 2

function calculator(num1, num2, operator) {
  let result;

  switch (operator) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    case '/':
      result = num1 / num2;
      break;

    default:
      result = 'Invalid operator';
      break;
  }
  console.log(result);
  return result;
}

calculator(3, 5, '+');
calculator(100, 5, '-');
calculator(25, 5, '*');
calculator(500, 5, '/');
calculator(550, 7, '&');

/*
FizzBuzz Challenge
When you go to get a job as a web developer, you may be given specific programming challenges. It's good to practice challenges like this not only for job interviews, but it sharpens your skills in general. You'll find that most challeneges have some kind of iteration involved. One of the most common challenges is the FizzBuzz challenge. This has to do with loops and conditionals, so I think that this is a good challenge at this point in the course.

Instructions:

Print/log the numbers from 1 to 100
For multiples of three print "Fizz" instead of the number
For multiples of five print "Buzz"
For numbers which are multiples of both three and five print "FizzBuzz".
Hints:

If you have taken the course up to this point, then you know how to write a loop and output/log something for each iteration. You also know how to check for a condition with "if/else/else if". You also know how to get a remainder of a number using the modulus operator (%). This is all you need to know to complete this challenge. Good luck!
*/

for (let i = 0; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log(`${i} = FizzBuzz`);
  } else if (i % 5 === 0) {
    console.log(`${i} = Buzz`);
  } else if (i % 3 === 0) {
    console.log(`${i} = Fizz`);
  } else {
    console.log(i);
  }
}

/*----------------    Messing Around  ---------------*/

const students = ['Mark', 'Jane', 'Sarah', 'John', 'Sarah'];

for (let i = 0; i < students.length; i++) {
  if (students[i] === 'Sarah') {
    console.log(`>> ${students[i]} is the most brilliant lady in the class`);
    continue;
  }
  console.log(`> Name of the current student is ${students[i]}`);
}

/*
Array Method Challenges
Challenge 1
Instructions:

Take the people array and create an array called youngPeople that stores objects with ONLY name and email properties of all the people that are 25 and under. The name property should have their first and last name.

const people = [
  {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john@gmail.com',
    phone: '111-111-1111',
    age: 30,
  },
  {
    firstName: 'Jane',
    lastName: 'Poe',
    email: 'jane@gmail.com',
    phone: '222-222-2222',
    age: 25,
  },
  {
    firstName: 'Bob',
    lastName: 'Foe',
    email: 'bob@gmail.com',
    phone: '333-333-3333',
    age: 45,
  },
  {
    firstName: 'Sara',
    lastName: 'Soe',
    email: 'Sara@gmail.com',
    phone: '444-444-4444',
    age: 19,
  },
  {
    firstName: 'Jose',
    lastName: 'Koe',
    email: 'jose@gmail.com',
    phone: '555-555-5555',
    age: 23,
  },
];
Expected Result:

console.log(youngPeople);

[
  {name: 'Jane Poe', email:'jane@gmail.com'},
  {name: 'Sara Soe', email:'sara@gmail.com'},
  {name: 'Jose Koe', email:'jose@gmail.com'}
]

*/

const peoples = [
  {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john@gmail.com',
    phone: '111-111-1111',
    age: 30,
  },
  {
    firstName: 'Jane',
    lastName: 'Poe',
    email: 'jane@gmail.com',
    phone: '222-222-2222',
    age: 25,
  },
  {
    firstName: 'Bob',
    lastName: 'Foe',
    email: 'bob@gmail.com',
    phone: '333-333-3333',
    age: 45,
  },
  {
    firstName: 'Sara',
    lastName: 'Soe',
    email: 'Sara@gmail.com',
    phone: '444-444-4444',
    age: 19,
  },
  {
    firstName: 'Jose',
    lastName: 'Koe',
    email: 'jose@gmail.com',
    phone: '555-555-5555',
    age: 23,
  },
];

const youngPeople = peoples
  .filter((people) => people.age <= 25)
  .map((people) => {
    return {
      name: `${people.firstName} ${people.lastName} `,
      email: people.email,
    };
  });

console.log(youngPeople);

/*

Challenge 2
Instructions:

Add all of the positive numbers in the array.

Expected Result:

const numbers = [2, -30, 50, 20, -12, -9, 7];

console.log(positiveSum); // 79

*/

const numbers = [2, -30, 50, 20, -12, -9, 7];

const addPositive = numbers.filter(number => number > 0).reduce((accumulator,current) => accumulator + current, 0 ) 

console.log(addPositive);

/*
Challenge 3
Instructions:

Create a new array called capitalizedWords with the words from the words array with the first letter of each word capitalized.

Expected Result:

const words = ['coder', 'programmer', 'developer'];

console.log(capitalizedWords); // ['Coder', 'Programmer', 'Developer']
Hint:

Remember back a few sections, we had a challenge to capitalize the first letter of a string. You are doing the same thing here, but for each word in the array.
*/

const words = ['coder', 'programmer', 'developer'];

capitalizedWords = words.map((word) => word[0].toUpperCase() + word.substring(1) )

console.log(capitalizedWords);