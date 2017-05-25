var die = {
	size : 6,
        totalRolls : 0,
        roll : function(){
           console.log(this);
           var result = Math.ceil(this.size*Math.random());
           return result;
        }
};

die.size = 10;
console.log(die.roll());
console.log(die.roll());
console.log(die.roll());
console.log(die.roll());
console.log(die);

