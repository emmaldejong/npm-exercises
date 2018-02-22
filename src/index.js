const $ = require('jquery');

const sayHello = function (name) {
    return 'Hello, ' + name + '!';
};

console.log(sayHello('emma'));

$('body').html('let the force be with you');
