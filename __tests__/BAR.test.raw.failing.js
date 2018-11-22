const should = require('should');
const FOO = require('../src/FOO');
const BAR = require('../src/BAR');

// The following test will pass. However you will see 'Uncaught error outside test suite:' annoyance
describe('BAR', () => {
    it('should work fine', () => {
        should(BAR()).be.eql(`BAR ${FOO()}`);
    });
});
