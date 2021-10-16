var arr = ['Apple', 'Banana', 'Orange', ['Tomato']];

var apple = arr[0];
var banana = arr[1];
var orange = arr[2];
var tomato = arr[3][0];

// Destructuring Assignment
var [a, b, o, [t]] = [...arr];

console.log(a, b, o, tomato);

var obj = {
    name: "DIO"
};

// Destructuring Assignment
// var name = obj.name;

var { name: nameD } = obj;
console.log(nameD);