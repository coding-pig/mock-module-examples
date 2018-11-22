const proxyquire = require('proxyquire').noCallThru(false);
const should = require('should');
const FOO_mock = () => { return 'FOO mock';};

// proxyquire loads BAR while bypassing requiring FOO.
// Instead it uses FOO_mock to act as FOO
const BAR = proxyquire('./BAR', {
    './FOO': FOO_mock 
});

// The following test should pass cleanly without seeing
// the error 'Unpleasant FOO initialization'
describe('BAR', () => {
    it('should work fine', () => {
        should(BAR()).be.eql(`BAR ${FOO_mock()}`);        
    });
});
