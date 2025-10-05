function normalizeInput(input, to) {
  if (to === 'upper') {
    return input.toUpperCase();
  }
  if (to === 'lower') {
    return input.toLowerCase();
  }
}

console.log(normalizeInput('Hello World', 'upper')); // 'HELLO WORLD'
console.log(normalizeInput('Hello World', 'lower')); // 'hello world'
