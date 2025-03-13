const greet = (fName: string, lName: string): void => {
  fName = fName ?? 'Israel';
  //   var name = var checked ?? var returned
  console.log(fName);
};
greet('Israel', 'Bejar');
// is null coalescing necessary w/ typescript?
