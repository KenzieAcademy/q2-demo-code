let name = 'Gwen';
let level = 5;

function printDetails(details) {
    const { name, level } = details;
    console.log(`${name} is level ${level}`);
}

for (let i = 0; i < 3; i++) {
    console.log(`Why is ${name} at level ${level}???`);
}

printDetails({ name, level });

console.log(`Hello, ${name}!`)
