const receivesAFunction = (callback) => {
    // Call the callback function
    callback();
  }
  
  const returnsANamedFunction = () => {
    // Define a named function and return it
    return function namedFunction() {
      // Function body
    };
  }
  
  const returnsAnAnonymousFunction = () => {
    // Return an anonymous function directly
    return () => {
      // Function body
    };
  }
  
  module.exports = {
    receivesAFunction,
    returnsANamedFunction,
    returnsAnAnonymousFunction
  };
  