
// function constructor [ ctor ]
// in this function i do not need return statement
function Car(_model, _brand, _year)
{
  // all you want in the object put on this!
  this.model = _model
  this.brand = _brand
  this.year = _year
}

var suzuki = new Car("Suzuki", "Splash", 2019)
var fiat = new Car("Fiat", "Punto", 1998)

function Mobile(_company, _model, _color, _height)
{
  this.code = "123"
  this.company = _company
  this.model = _model
  this.color = _color
  this.height = _height
  this.ring = function() {
    console.error(this.company + " " + this.model + " ring ring ring")
  }
  this.shutdown = function() {
   console.error(`${this.company} ${this.model} is shutting down...`)
  }
}

var s9plus = new Mobile("Samsung", "S9+", "Black", "6.7")
s9plus.ring()
s9plus.shutdown()
