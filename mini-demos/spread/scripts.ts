const person = ['Jack', 'Napier'];
const indeedProfile = [person, 'Joker'];
console.log(indeedProfile);
// makes an array [[Jack, Napier], Joker]

const indeedProfileTwo = [...person, 'Joker'];
console.log(indeedProfileTwo);
// makes an array [Jack, Napier, Joker]

const human = {
  name: 'Steve Rogers',
  occupation: 'Capitain America',
};
const profile = { human, crush: 'Peggy Carter' };
console.log(profile);
// {crush: Peggy Carter, {name: Steve Rogers, occupation: Capitain America}}
const profileTwo = { ...human, crush: 'Peggy Carter' };
console.log(profileTwo);
// {crush: "Peggy Carter", name: "Steve Rogers", occupation: "Capitain America"}
