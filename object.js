var charizard = 
{ "attack":"blaze", 
"HP" : 266 , 
"Legendary": false, 
"types" :["fire" , "Flying" ]
};

console.log(charizard.attack);

console.log( charizard.HP); 

console.log(charizard["HP"]);

console.log(charizard.types);

charizard.HP = 100

console.log(charizard.HP);

function Superhero(realName){
    this.realName = realName;
}

var superman = new Superhero("clark Kent");

