var store = new JSData.DS();

// register and use http by default for async operations
store.registerAdapter('http', new DSHttpAdapter(), { default: true });

// simplest model definition
var User = store.defineResource('user');

User.find(1).then(function (user) {
  user; // { id: 1, name: 'John' }
});
