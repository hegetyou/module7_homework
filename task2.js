function showProps(obj, objKeyName) {
    return (objKeyName in obj);
}

const neighbour1 = {
    name: "Alex", 
    floor: 6,
    flat: 182,
  };

console.log(showProps(neighbour1, "floor"));  
console.log(showProps(neighbour1, "street")); 