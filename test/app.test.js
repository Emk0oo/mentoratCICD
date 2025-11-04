const { addition } = require('../app');

// Fonction utilitaire pour tester
function test(description, testFn) {
  try {
    testFn();
    console.log(`✓ ${description}`);
  } catch (error) {
    console.error(`✗ ${description}`);
    console.error(`  ${error.message}`);
    process.exit(1);
  }
}

function assertEqual(actual, expected) {
  if (actual !== expected) {
    throw new Error(`Expected ${expected}, but got ${actual}`);
  }
}

// Suite de tests
console.log('Tests de la fonction addition\n');

test('addition de deux nombres positifs', () => {
  assertEqual(addition(2, 3), 5);
});

test('addition de nombres négatifs', () => {
  assertEqual(addition(-2, -3), -5);
});

test('addition avec zéro', () => {
  assertEqual(addition(5, 0), 5);
  assertEqual(addition(0, 5), 5);
});

test('addition de nombres décimaux', () => {
  assertEqual(addition(2.5, 3.5), 6);
});

test('addition de nombre positif et négatif', () => {
  assertEqual(addition(10, -5), 5);
  assertEqual(addition(-10, 5), -5);
});

test('addition de deux zéros', () => {
  assertEqual(addition(0, 0), 0);
});

console.log('\n✓ Tous les tests ont réussi !');
