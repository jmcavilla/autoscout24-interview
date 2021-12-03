const array = [1,2,3,4]

const naiveSearch = (array, item) => {
  for (let i = 0; i < array.length; i++) {
    if(array[i] === item){
      return i + 1;
    }
  }
}

console.log(naiveSearch(array, 2))

