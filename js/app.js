var ele = document.body.querySelector(".loop");
var use = document.body.querySelector(".use");
var drago = document.body.querySelector(".drago");

var dragon = 0;
var damage = 0;

var condition = true;

while(condition){
    var question = Number(prompt("How many hits on Smaug?"));
    var random = Math.floor(Math.random() * question) + 1;
    var attack = Math.floor(Math.random() * 2) + 1;

    if(question > 5){
        damage = 1;
    }

    dragon = dragon + random;
    damage = damage + attack;

    if(dragon >= 10){
        condition = false;
        ele.innerHTML = "Smaug has desolated you.";
        drago.innerHTML = "Smaug's health: " + dragon;
        use.innerHTML = "Your Health: " + damage
    }

    if(damage >= 5){
        condition=false;
        ele.innerHTML= "You have desolated Smaug!";
        drago.innerHTML= "Smaug's Health: " + dragon;
        use.innerHTML = "Your Health: " + damage;
    }
}











