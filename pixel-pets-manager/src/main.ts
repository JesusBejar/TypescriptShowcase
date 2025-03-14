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
// spread, update pet hunger from 30 to 20
const updatedPet: Pet = { ...pet, hunger: 20 };
console.log(updatedPet)

// rest, make list of pets and grab info
const allPets = [pet, { name: "Spike", hunger: 50, stats: [90, 40] }] as [Pet, ...Pet[]];
// tuple type means that at least one value has to be exist within array
const [favorite, ...rest]: [Pet, ...Pet[]] = allPets;
console.log(favorite);
console.log(rest);

// optional chaining + null coalescing, pull pet owner's name 
const ownerName: string = pet?.owner?.name ?? "Unknown";
console.log(`Owner name: ${ownerName}`);