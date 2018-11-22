const FOO = require('./FOO');
module.exports = () => {
    return `BAR ${FOO()}`; 
};
