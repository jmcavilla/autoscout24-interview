const array = [1,2,3,4]

const doubleArrayValues = (array) => {
  for (let i = 0; i < array.length; i++) {
    array[i]*= 2
  }
  return array;
}

console.log(doubleArrayValues(array))

