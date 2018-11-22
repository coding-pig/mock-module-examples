const BAR = require('../src/BAR');
// Even the mock statement lexicically comes after the BAR import statement as above,
// jest will hoist FOO first so it will avoid loading FOO when importing BAR
jest.mock('../src/FOO', () => { return () => { return 'FOO mock'};});

// You can expect clean pass for the following test.
describe('BAR', () => {
    it('should work fine', () => {
        expect(BAR()).toEqual('BAR FOO mock');
    });
});
