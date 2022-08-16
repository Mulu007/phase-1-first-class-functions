function receivesAFunction (callbackfunction) {
    return callbackfunction();
}

function returnsANamedFunction() {
    return function namedfunction() {
        console.log('namedfunction');
    }
}

function returnsAnAnonymousFunction() {
    return function () {
        console.log('anonymous function');
    }
}