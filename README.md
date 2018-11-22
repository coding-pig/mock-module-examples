# mock-module
Demonstrate how to mock Node module in unit tests via `jest` or `proxyquire`.

## Scenario

* You are writing your Node JS module `FOO.js` and its unit test file `FOO.test.js`
* `FOO.test` depends on `FOO.js`
* `FOO.js` depends on module `BAR.js`.
* Loading `BAR.js` has side effect you want to avoid inside `FOO.test.js`

```
BAR <---------------- FOO <-------------------- FOO.test
```

## First attempt

Solution based on `sinon` does not work.


So you want to avoid loading `BAR` when loading `FOO` for unit testing `FOO`.



## Second attempt

## Third attempt

## Conclusion
