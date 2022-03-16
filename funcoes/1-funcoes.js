function getName() {
    return 'Gustavo Gouvêa';
}

function logFn(fn) {
    console.log(fn());
}

const logFnResult = logFn;

logFnResult(getName);