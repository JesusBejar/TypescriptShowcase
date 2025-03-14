type Pet = {
  name: string | null;
  hunger: number;
  stats: [number, number]; // energy, mood levels
  owner?: { name: string };
}

const pet: Pet = {
  name: null,
  hunger: 30,
  stats: [80, 60],
  owner: { name: "Israel" },
};

// object destructuring, display how hungry the pet is along with name
// const {props from obj}: {assign to new vars} = objName
const { hunger, name }: { hunger: number; name: string | null } = pet;
console.log(`${name ?? "Furlais"} is ${hunger}% hungry`);

// array destructuring, display energy and mood of pet
// const {props from a}: {assign to new vars} = aName
const [energy, mood]: [number, number] = pet.stats;
console.log(`Energy: ${energy}, Mood: ${mood}`);
