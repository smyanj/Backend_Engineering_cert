let raceNumber = Math.floor(Math.random() * 1000);

let early_registered = true;
let runner_age = 17;

if(early_registered && runner_age >= 18){
    raceNumber += 1000;
}

//second control flow statement
if(runner_age > 18 && early_registered){
  console.log('Race will start at 9:30AM \nRace Number: ' + raceNumber);
}else if(runner_age > 18 && !early_registered){
  console.log('Race will start at 11:00AM \nRace Number: ' + raceNumber);
}else if(runner_age < 18){
  console.log('Race will start at 12:30PM \nRace Number: ' + raceNumber);
}else if(runner_age == 18){
  console.log('See the registration desk');
}
