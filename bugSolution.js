function foo(a, b) {
  // Check if the inputs are numbers
  if (typeof a !== 'number' || typeof b !== 'number') {
    return 0; // Handle non-number inputs
  }
  if (a === null || b === null) {
    return 0; // Handle null values
  }
  return a + b;
}