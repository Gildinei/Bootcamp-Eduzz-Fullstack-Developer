function doSomeThing(callBack) {
    setTimeout(function () {
        callBack("First data");
    }, 1000);
};

function doOtherThing(callBack) {
    setTimeout(function () {
        callBack("Second data");
    });
};

function doAll() {
    try {
        doSomeThing(function (data) {
            var processedData = data.split('');

            try {
                doOtherThing(function (data2) {
                    var processedData2 = data2.split('');

                    try {
                        setTimeout(function () {
                            console.log(processedData, processedData2);
                        }, 1000);
                    } catch (err) {
                        console.log("Erro 3");
                    };
                });
            } catch (err) {
                console.log("Erro 2");
            };
        });
    } catch (err) {
        console.log("Erro 1");
    };
};

doAll();

const doSomeThingPromise = new Promise((resolve, reject) => {
    setTimeout(function () {
        resolve("First data");
    }, 1000);
});

const doOtherThingPromise = new Promise((resolve, reject) => {
    setTimeout(function () {
        resolve("Second data");
    });
});

doSomeThingPromise.then(data => {
    console.log(data.split(''));
    return doOtherThingPromise;
}).then(data => console.log(data.split('')));