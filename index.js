// you can play with these styles and see how ESLint behaves
let fooBar = bar;

const a = (...arr) => {
  let b = 5;

  return arr.filter(x => x === b);
};

function something(arg1, arg2) {
  if (fooBar == 9) {
    let c = arg1 === 3 ? 4 : 3;

    console.warn("something");

    const arr = [
      "something",
      a(),
      "someone else",
      "some long string here too",
      "and one more"
    ];

    return {
      line: arr && c,
      flagged: true,
      something: { inside: true }
    };
  }

  something(
    "some very long string argument",
    "some very very very long string argument 2"
  );
}

something();
