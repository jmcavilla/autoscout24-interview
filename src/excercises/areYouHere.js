const arr1 = [1,2,3]
const arr2 = [4,5,1]

const areYouHere = (arr1, arr2) => {
  for (let i = 0; i < arr1.length; i++) {
    const el1 = arr1[i];
    for (let j = 0; j < arr2.length; j++) {
      const el2 = arr2[j];
      
      if(el1 === el2) return true;
    }
  }

  return false;
}

console.log(areYouHere(arr1, arr2))