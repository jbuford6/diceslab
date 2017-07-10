diceArray = [];
var btn = document.querySelector('#btn')
var buttontwo = document.querySelector('#buttontwo')

document.addEventListener('DOMContentLoaded', function () {

    btn.addEventListener('click', function () {
        var dice = new Die();
        diceArray.push(dice);
    });

    var Die = function () {
        var roll = Math.floor(Math.random() * 6 + 1);
        this.value = roll;
        this.div = document.createElement('div');
        this.div.className = "box";
        document.body.append(this.div);
        this.div.innerText = this.value;
    }

    buttontwo.addEventListener('click', function () {
        for (var i = 0; i < diceArray.length; i++) {
            diceArray[i].roll();
        }
    });

    Die.prototype.roll = function () {
        this.value = Math.floor(Math.random() * 6 + 1);
        this.div.innerText = this.value;
    }
});






// //parent constructor
// function Person(name, race) {
//     this.name = name;
//     this.race = race;
// }

// //person proto methods
// Person.prototype.sayName = function() {
//     console.log(this.name);
// }

// //child constructors
// function Male(name, race, beard) {
//     Person.call(this, name, race);
//     this.beard = beard;
// }

// Male.prototype = Object.create(Person.prototype);
// Male.prototype.constructor = Male;

// Male.prototype.hasBeard = function() {
//     console.log(this.name + ' has beard: ' + this.beard)
// }

// var male = new Person('jb', 'asian', true);
// male.sayName();
// male.hasBeard();