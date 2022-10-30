const obj = {
	rabbit: "ears",
    fox: "tail"
};
let anymal = Object.create(obj);
anymal.bear = 'paw';
anymal.wolf = 'fang';
anymal.hedgehog = 'needles';
function test(obj) {
	for (let key in obj) {
		if (obj.hasOwnProperty(key)) console.log(`${key}: ${obj[key]}`);
	}
}
test(anymal);


или 

const person = {
    Имя: 'Антон',
    Возраст: '30',
    Положение: 'Холост'
   }
  const key1 = 'Имя';
  const key2 = 'Возраст';
  const key3 = 'Положение';
  console.log(`${key1}: ${person[key1]}, ${key2}: ${person[key2]}, ${key3}: ${person[key3]}`)