(function add(a, b) {
    console.log(a + b) 
})(234, 456);

const counter = (function(){
    let count = 0;
    return function(){
        count++;
        console.log(count);
    }
})();

counter()
counter()

(async function(){
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        console.log(data);
    }
    catch(error){
        console.log(error);
    }
})()
