// change imminent (let)
let a: number, b: number, c: number;
// this
const obj = ({ a, b, c } = { a: 1, b: 2, c: 3 });
// replaces this
a = obj.a;
b = obj.b;
c = obj.c;
console.log(a);
console.log(obj);

// no change imminent (const)
const { x, y, z } = { x: 1, y: 2, z: 3 };
console.log(z);
// how to access obj without var name?

const objTwo = {
  movieOne: { name: 'Jack Reacher', releaseDate: '2012' },
  movieTwo: { name: 'Mission Impossible III', releaseDate: '2006' },
};

const { movieOne } = objTwo;
const { name: movieOneName, releaseDate } = movieOne;

document.querySelector('#display')!.innerHTML =
  `<p> ${movieOneName} ${releaseDate} </p>`;
