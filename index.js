function receivesAFunction(callback) {
    callback();
  }

  function returnsANamedFunction() {
    function namedFunction() {
      // Function logic here
    }
    return namedFunction;
  }

  function returnsAnAnonymousFunction() {
    return function() {
      // Function logic here
    };
  }