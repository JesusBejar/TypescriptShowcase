type Person = {
  name: string;
  street: string;
  zip: string;
};
function printUser(person: Person): void {
  console.log(person?.name);
  //   optional chaining is basically unnesting object information (another way of accessing info)
}
printUser({ name: 'israel', street: 'candle', zip: '80000' });
