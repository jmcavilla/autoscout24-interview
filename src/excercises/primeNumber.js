const arr = [1,2,6,4,23,45,61,254,32]

const isPrime = (num) => {
  for (var i = 2; i < num; i++) {
    console.log(num%i)
    if (num%i===0){
        return false;
    }
  };
  return true;
}

arr.forEach(num => {
  console.log(`es primo el numero ${num}? ${isPrime(num)}`)
})

