//* Testing with Jest

// format
/*
test('test description', () => {
    expect(command/logic).matcher(expected value);
});
*/

// example
test('two plus two is four', () => {
    expect(2 + 2).toBe(4);
});

// group tests together with describe
// format
/*
describe('group name', () => {
    test('test description', () => {
        expect(command/logic).matcher(expected value);
    });

    test('test description', () => {
        expect(command/logic).matcher(expected value);
    });
});
*/

// example
describe('arithmetic tests', () => {
    test('#1 two plus two is four', () => {
        expect(2 + 2).toBe(4);
    });

    test('#2 two times three is six', () => {
        expect(2 * 3).toBe(6);
    });
});