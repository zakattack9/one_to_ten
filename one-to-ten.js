var hero = "Saitama";
var gender = "Male";
var age = 21;
var weapon = "One Punch";
var pronoun ;

if (gender === "Male"){
  pronoun = "Sir";
}
else if (gender === "Female"){
  pronoun = "Madam";
}
else (gender === "Else"){
  pronoun = "What are you?";
}

function ageStatement(){
  if (age <= 18){
    return("is just the beginning");
  }
  if (age >= 21 && age <= 40){
    return("has seen a few battles");
  }
  if (age > 40){
    return("has lived through many epic battles");
  }
}

console.log(pronoun + " " + hero + " is our lovable hero, who " + ageStatement + " with his trusty " + weapon ".");

//new script

var count ;
var animal = "Lion";

function animalHouse(x, y){
  count = x + y;
  console.log(count);
}
animalHouse(1, 2);

if (count >= 2){
  console.log("We have too many " + animal + "s");
}
else{
  console.log("Welcome to the club");\
}

//new script

var hero = "Iron Man"

function avengersAssemble(avenger){
  if (avenger = "Iron Man"){
  console.log(avenger + " here to kick some roboto butt!");
  }
  if (hero = "Captain America"){
  console.log(avenger + " I fight for America!");
  }
  if (hero = "Black Widow")
  console.log(avenger + " to cut some heads off!");
  }
  else{
  console.log("Sorry, you are not needed for this mission")
  }
}
avengersAssemble(hero);

//new script

var lights = true;

if (lights = true){
  console.log("And then there was light")  
}
else{
  console.log("Lights out")
}

//new script

var carType = ["Toyota", "Lamborghini", "Tesla"];
var color = ["red", "blue", "black"];
var num = 9;

if (carType[0] && color[1]){
  console.log("We have your " + color[1] + " " + carType[0] + ".");
}
if (carType[1] && color [0]){
  console.log("We have your " + color[0] + " " + carType[1] + ".");
}
if (carType[2] && color [2]){
  console.log("We have your " + color[2] + " " + carType[2] + ".");
}
else{
  console.log("We don't have any blue Toyotas in stock.")
}
/*
conditional for cars:
if there is blue Toyota console.log "We have" and variables
if there is red Lambo console.log "We have" and variables
if there is black Tesla console.log "We have" and the variables
else console.log, "We dont have any Blue Toyotas in stock"
*/