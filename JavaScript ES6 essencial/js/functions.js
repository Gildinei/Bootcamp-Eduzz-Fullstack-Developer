function fn () {
    return 'Code Here';
};

const arrowFn2 = () => {
    return 'Code here';    
};

const arrowFn = () => 'Code here';

fn.prop = "Posso criar propriedades";
console.log(fn());
console.log(fn.prop);

const controlFnExec = fnParam => allowed => {
    if(allowed) {
        fnParam();
    };
};