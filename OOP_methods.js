function sayHello()
{
  console.log("Hello!")
}

//sayHello()

var myId = 1

var person = {
  // data
  id : myId,
  name : "dana",
  
  // functions
  personSayHello : sayHello, // calling declared method
  sayGoodbye : function() // creating method here [inline]
  {
    console.log("Good bye!")
  },
  whatsMyName() // second way to create method --
  {
    console.log(person.name)
    person.name = " new name "
  },
  printNumber(x)
  {
    console.log(x)
  },
  calculatePower2(x)
  {
    return x * x;
  }
}
