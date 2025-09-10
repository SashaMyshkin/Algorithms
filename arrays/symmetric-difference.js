//My solution
//It was not optimal
//On every iteration I switch between Set and Array
function sym1(...args) {
  return args.reduce((acc, curr) => {
    const setOne = new Set(acc);
    const setTwo = new Set(curr);
    const symDif = setOne.symmetricDifference(setTwo);
    return [...symDif];
  }, []);
}

//Chat gpt je ispravio u ovo,
//  bolje je jednostavno sve vreme raditi sa skupovima, pa onda na kraju prebaciti u niz
function sym2(...args) {
  return [
    ...args.reduce(
      (acc, curr) => acc.symmetricDifference(new Set(curr)),
      new Set()
    ),
  ];
}

//Ovo je chat gpt napisao. Ja se nisam snašao.
function sym3(...args) {
  return [...args.reduce((acc, curr) => {
    const setCurr = new Set(curr);
    const result = new Set();

    // Elements in acc but not in curr
    for (const x of acc) {
      if (!setCurr.has(x)) result.add(x);
    }

    // Elements in curr but not in acc
    for (const x of setCurr) {
      if (!acc.has(x)) result.add(x);
    }

    return result; // next acc
  }, new Set())]; // start with empty Set
}