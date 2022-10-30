function ElectricDevice(name, power) {
  this.name = name;
  this.power = power;
  this.isEnabled = false;
} // метод, который определяет прибор как включенный в розетку 

ElectricDevice.prototype.plugIn = function() {
  console.log(this.name + " is work!");
  this.isEnabled = true;
}

ElectricDevice.prototype.getPowerUsed = function() {
  return this.isEnabled ? this.power : 0;
}


const radiator = new ElectricDevice('radiator', 83);
const iron = new ElectricDevice('iron', 52);

console.log(radiator.getPowerUsed() + iron.getPowerUsed());

radiator.plugIn();
console.log(radiator.getPowerUsed() + iron.getPowerUsed());

iron.plugIn();
console.log(radiator.getPowerUsed() + iron.getPowerUsed());