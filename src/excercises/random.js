const arr = [1,2,3,4,5,6,7,8,23,112,12,34,6,7]

const searchRandom = (arr) => {
  console.log(Math.random() * arr.length)
  return arr[Math.floor(Math.random() * arr.length)];
}

console.log(searchRandom(arr))