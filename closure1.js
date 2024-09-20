// example 1
function outer(){
    let greet = "Hello";
    function inner(){
    console.log(`${greet} Vinay`);
    }
    return inner;
    }
    const res = outer();
    res();
    
    // example 2
    function makeRequest(url, cb) {
    setTimeout(() => {
    cb('The request url is ' + url); 
    }, 1000);
    }
    
    makeRequest('https://jsonplaceholder.typicode.com/posts', (res) => {
    console.log(res);
    });