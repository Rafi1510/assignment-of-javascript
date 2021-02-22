//feetToMile
  function feetToMile(feet){
  var mile = feet*5280;
  return mile; 

  }
 
  var finalResult = feetToMile(50)
  console.log("Feet to mile: ", finalResult);




  
//woodCalculator
function woodCalculator(chair,table,bed){
 
    let chairCount = chair*1;
    let tableCount = table*3;
    let bedCount   = bed*5

    let totalWood = (chairCount + tableCount + bedCount);
     return totalWood;
}

const result = woodCalculator(6,3,5);
console.log('total wood qbet feet', result);





//brickCalculator
function brickCalculator(n) {
    let feet = 0;
    for (let i = 1; i <= n; i++) {
      if (i <= 10) {
        feet += 15;
      } else if (i <= 20) {
        feet += 12;
      } else if (i > 20) {
        feet += 10;
      }
    }
    const totalBrick = feet * 1000;
    return totalBrick;
  }
  const result = brickCalculator(8);
  console.log(result);
   




//tinyFriend
  function tinyFriend(name) {
    let tiny = name[0];
    for (let i = 0; i < name.length; i++) {
      const element = name[i];
      if (tiny.length > element.length) {
        tiny = element;
      }
    }
    return tiny;
  }
  const friends = ["Ashik","Shohan","Rafi","Sabbir","pitu","Roy"];
  const result2 = tinyFriend(friends);
  console.log(result2);