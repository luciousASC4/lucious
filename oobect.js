function Superhero(realName, ability, gender, archEnemy, age,weakness){
    this.realName = realName;
    this.ability = ability;
    this.archEnemy = archEnemy;
    this.age = age;
    this.weakness = weakness;

this.talk = function(){
console.log("Yo! my name is" + realName);
}

this.callForHelp = function(call){
    console.log(call);
}
}
var superMan =new Superhero("Clark Kent", "Dat Money", "male", "Lex Luger", 30, "crytomite");
var wonderWoman = new Superhero( "Dianna Prince","Super Strength", "female", "Donald trump", "Guns");

superMan.ability = "lazer vision";

wonderWoman.archEnemy = superMan;
console.log( wonderWoman);

wonderWoman.callForHelp("I'M BOOLING OUT");
superMan.callForHelp("its not looking good right now");
