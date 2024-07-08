function* generatorFunction() {
    yield 'First output';
    yield 'Second output';
    yield 'Third output';
  }
  
  const generator = generatorFunction();
  
  for (const value of generator) {
    console.log(value);
  }
  
  // Output:
  // 'First output'
  // 'Second output'
  // 'Third output'
console.log( a );
let a;
