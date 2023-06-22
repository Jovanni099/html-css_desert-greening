const apple = {
    isEatable: true,
    color: 'green',
    size: {
        width: 100,
        height: 100
    }
}

let a = []
let b = []
let c = a.concat(b)
console.log(c);

console.log(apple);
let descriptor = Object.getOwnPropertyDescriptor(apple, 'color');
console.log(descriptor);

let changeObj = Object.defineProperty(apple, 'country', descriptor);
console.log(changeObj);