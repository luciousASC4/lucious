function Basketballplayer( name, team, height, position, number, networth, isGood, pastTeams){
    this.name = name;
    this.team = team;
    this.height = height;
    this.position = position;
    this.number = number;
    this.networth = networth;
    this.isGood = isGood;
    this.pastTeams = pastTeams; 
}

var shaq = new Basketballplayer("Shaquille O'neal","Celtics", "7'1", "Center", 36, 100000000, "true", [ "magic","lakers", "heat", "suns", "cavs",]);

console.log(shaq);

var Bron = new Basketballplayer( "lebron James", "cavs", "6'8", "small forward", 23, 100000000, "True", ["Heat"]);

Bron.pastTeams.push(Bron.team);
Bron.teams = "warriors";

console.log(Bron);
