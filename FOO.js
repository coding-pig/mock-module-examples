// Unpleasant side effect of module initialization
// It will not fail loading of this module
setImmediate(() => {
    throw new Error('Unpleasant FOO initialization');
});

module.exports = () => {
    return 'FOO';
};
