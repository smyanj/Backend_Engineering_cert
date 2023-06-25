const getSleepHours = (day) => {
    if (day === "monday") {
      return 8;
    } else if (day === "tuesday" || day === "wednesday") {
      return 6;
    } else if (day === "thursday" || day === "friday") {
      return 7;
    } else if (day === "saturday" || day == "sunday") {
      return 10;
    }
  };
  //console.log(getSleepHours('saturday'))
  const getActualSleepHours = () => {
      sum = getSleepHours("monday") +
      getSleepHours("tuesday") +
      getSleepHours("wednesday") +
      getSleepHours("thursday") +
      getSleepHours("friday") +
      getSleepHours("saturday") +
      getSleepHours("sunday");
      return sum;
  };
  const getIdealSleepHours = () => {
    let idealHours = 7;
    return idealHours * 7;
  }
  //console.log(getActualSleepHours()); 
  //console.log(getIdealSleepHours());
  const calculateSleepDebt = () => {
    let actualSleepHours = getActualSleepHours();
    let idealSleepHours = getIdealSleepHours();
    var sleepDif;
    if(actualSleepHours == idealSleepHours){
      sleepDif = 0;
      console.log("You recieved the perfect amount of sleep");
    }else if(actualSleepHours > idealSleepHours){
      sleepDif = actualSleepHours - idealSleepHours;
      console.log("You recieved more sleep than needed \n" + "you overslept by: " + sleepDif + " hours");
    }else if(actualSleepHours < idealSleepHours){
      sleepDif = idealSleepHours - ctualSleepHours;
      console.log("You recieved less sleep than needed" + "you needed: " + sleepDif + " hours");
    }
  }
  calculateSleepDebt();