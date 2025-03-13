const linkedInProfile = {
  fName: 'Bruce',
  lName: 'Wayne',
  occupation: 'Batman',
  experience: 'Not enough',
};
const { occupation, ...rest } = linkedInProfile;
// rest breaks down objs and separates them into two vars (varName, rest)
console.log(occupation);
