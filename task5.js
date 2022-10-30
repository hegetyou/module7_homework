class ElectricDevice
{
  constructor(name, power)
  {
    this.name = name;
    this.power = power;
    this.isEnabled = false;
  }
  
  plugIn()
  {
    console.log(this.name + " is work!");
    this.isEnabled = true;
  }
  
  getPowerUsed()
  {
    return this.isEnabled ? this.power : 0;
  }
}

const radiator = new ElectricDevice('radiator', 83)
const iron = new ElectricDevice('iron', 52);

console.log(radiator.getPowerUsed() + iron.getPowerUsed());

radiator.plugIn();
console.log(radiator.getPowerUsed() + iron.getPowerUsed());

iron.plugIn();
console.log(radiator.getPowerUsed() + iron.getPowerUsed());