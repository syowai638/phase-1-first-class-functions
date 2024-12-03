function receivesAFunction(callback) {
    callback(); // Call the provided callback function
  }
  
  function returnsANamedFunction() {
    function namedFunction() {
      console.log("I am a named function!");
    }
    return namedFunction;
  }

  function returnsAnAnonymousFunction() {
    return () => console.log("I am an anonymous function!");
  }
  