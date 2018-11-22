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

See [Foo.test.raw.failing.js](./FOO.test.raw.failing.js).

To run the example, you clone this repo to your local computer, perform `npm i`, and run `npm run raw-failing-test`. You will see the error message from console as below:

![console output](./raw-failing-test-output.png)

## Second attempt

See [Foo.test.proxyquire.js](./FOO.test.proxyquire.js).

To run the example, supposing you have cloned the repo and installed dependencies, just execute `npm run proxyquire-test`. You will see the success message from console as below:

![console output](./proxyquire-test-output.png)


## Third attempt
See [Foo.test.jest.js](./FOO.test.jest.js).

To run the example, supposing you have cloned the repo and installed dependencies, just execute `npm run jest-test`. You will see the success message from console as below:

![console output](./jest-test-output.png)

## Conclusion

Both `proxyquire` and `jest` offer the capability to mock a while module cleanly. However `jest`'s capability is built-in and thus the preferred approach.
