// race


let raceNumber = Math.floor(Math.random() * 1000);

var registeredEarly = true;
var runnersAge = 18;

if (registeredEarly && runnersAge > 18) 
{
  raceNumber += 1000; 
}

if (registeredEarly && runnersAge)
{
  console.log(`Race will begin at 9:30. You Race number is ${raceNumber}`);
}
else if (runnersAge > 18 &&!registeredEarly) 
{
  console.log(`Race will begin at 11:00. You Race number is ${raceNumber}`);
}