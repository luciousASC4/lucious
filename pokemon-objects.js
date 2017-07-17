function pokemonStats(name,type, HP, DEF, ATK, Legend){
    this.name = name 
    this.type = type
    this.HP = HP
    this.DEF = DEF
    this.ATK = ATK
    this.Legend = Legend
} 

var Venusaur = new pokemonStats( "Ventaur", "Grass Poison", 80, 83, 82, "false");



var Charizard = new pokemonStats( "Charizard", "fire fyling", 78, 78, 84, "false");

// pokemon attack is a function that taknoes 10 hp from each pokemon
var pokemonRoster = [ Venusaur, Charizard];

    for(var i= 0; i< pokemonRoster.length; i++){
    pokemonRoster[i].HP = pokemonRoster[i].HP-10;

    }
console.log(pokemonRoster)

// 
// function pok emonAt tacked( this.HP -10){
//     for( i<this.HP; i<; i-10 )
// }