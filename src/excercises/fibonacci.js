// const generateFib = (num) => {
//   let result = [];
//   let lastNum = num;
//   let newNum = 0;
//   for (let i = 0; i < 10; i++) {
//     if(i === 0){
//       result.push(num);
//     }else{
//       result.push(newNum);
//     }
//     newNum = num + lastNum;
//     lastNum = num;
//     num = newNum;
//   }

//   return result;
// }

const generateFib = (num) => {
    let result = []
    for (let i = 1; i <= num; i++) {
      if(i === 1){
        result.push(0);
      }else if(i === 2){
        result.push(1);
      }else if(i === 3){
        result.push(2);
      }else {
        result.push(result[i-2] + result[i-3])
      }
    }
    return result;
  }
  
  console.log(generateFib(10));