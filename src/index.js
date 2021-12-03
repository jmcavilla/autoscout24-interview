// Autoscout24 is establishing a car logistics service “PowerMove” to help these dealers. 
// To do that, Autoscout24 rents car trailers, loads the cars and moves them on these trailers. 

// You are developing an application that supports AS24 employees in renting the right number of trailers and loading the right cars on their trailers. 

// Your application will receive a list of Cars to be moved as an input 
// - Every Car has a length 
// - Trailer has a Maximum Allowed length 
 
// The application is expected to answer two questions: 
// - How many trailers should be rented? 
// - Which cars should be loaded on which trailer? 


// example:
// car lengths: [3,5,8,4,3,1,4,2]


// expected output:
// 3 trailers
// [ [3,4,3], [8,2], [5,4,1] ]

let cars= [3,5,3,1,10,2,4,3,3,3,12,5,3,3]//[3,5,8,4,3,1,4,2];
let trailer = [];
let trailers = [];
let positions = [];
// 10

// [3,5,8,4,3,1,4,2] []  [3]

// [3,5,1] outcame
// [3,5,8,4,3,1,4,2] [3,5] [8,4,3,1,4,2]
// [3,5] [8,4,3,1,4,2] [3,5,1] [8,4,3,4,2]
//  [3,5,1] [8,4,3,4,2]

//[8,2]outcame [4,3,4]
//[8,2] [8,2] 


//[4,3]outcame

// [4]

const sumaTrailer = () => {
  let sum = 0;
  trailer.forEach(element => {
    sum += element;
  });
  return sum;
}
const verifyPos = (index) => {
  return !positions.includes(index)
}
let i = 0;
const checkCars = () => {
  if(i === cars.length){
    return trailer
  }
  if(Math.sign(cars[i]) <= 0){
    throw new Error('One of the inputs is incorrect. Please check it: ' +  JSON.stringify(cars))
  }
  
  let sumaTra = sumaTrailer();
  if(verifyPos(i)){
    if(i === 0){
      trailer.push(cars[i]);
      positions.push(i)
    }else{
      if(sumaTra + cars[i] <= 10){
        trailer.push(cars[i]);
        positions.push(i)
      }
    }
  }
  i++;
  return checkCars()
}
let carsCant = cars.filter(el => el > 10)
cars = cars.filter(el => el <= 10)
do {
  i = 0;
  trailers.push(checkCars(cars))
  trailer = []
} while (positions.length !== cars.length);
console.log('trailers: ', JSON.stringify( trailers))
if(carsCant.length > 0){
  console.log("There is/some a car/s that couldn't get into the trailer: ", JSON.stringify( carsCant))
}

//const cars= [-10,2,4,3,3];
//const cars= [3,12,5,3,3];
//const cars= [3,5,3,1,10,2,4,3,3,3,12,5,3,3];