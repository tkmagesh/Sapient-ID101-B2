function Product(id,name,units,price){
  if (this.constructor.name !== "Product") 
     return new Product(id,name,units,price);
  
  var _id = id;
  this.id = function(){
     if (arguments.length === 0) return _id;
     if (arguments[0] < 0) throw new Error("Id cannot be negative");
     _id = arguments[0];
  };

  var _name = name;
  this.name = function(){
     if (arguments.length === 0) return _name;
     //do validations
     _name = arguments[0];
  };

  var _units = units;
  this.units = function(){
     if (arguments.length === 0) return _units;
     //do validations
     _units = arguments[0];
  };

  var _price = price;
  this.price = function(){
     if (arguments.length === 0) return _price;
     //do validations
     _price = arguments[0];
  };

  this.getValue = function(){
      return this.units() * this.price();
  }
}