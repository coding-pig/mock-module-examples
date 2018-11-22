const should = require('should');
const FOO = require('./FOO');
const BAR = require('./BAR');

// The following test will pass. However you will see 'Uncaught error outside test suite:' annoyance
describe('BAR', () => {
    it('should work fine', () => {
        should(BAR()).be.eql(`BAR ${FOO()}`);
    });
});
