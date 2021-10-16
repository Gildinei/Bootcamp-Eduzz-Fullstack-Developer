fetch('/data.json').then(responseStream => {
    if (responseStream.status === 200) {
        return responseStream.json();
    } else {
        throw new Error('Resquest error');
    };
}).then(data => {
    console.log(data);
}).catch(err => {
    console.log('Error: ', err)
});

const asyncTimer = () => new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(123456);
    }, 1000);
});

const simpleFunc = async () => {
    const data = await asyncTimer();

    return data;
};

simpleFunc().then(data => {
    console.log(data);
});

