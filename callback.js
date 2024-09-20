// example 1 
function add(a,b,display){
    let res = a+b;
    display(res);
}

function display(res){
console.log(res)
    
}
add(2,3,display);

// example 2
function fetchData(id, cb) {
    setTimeout(() => {
        if (id <= 0 || id == null) { 
            cb('Error: Invalid ID', null); 
        } else {
            const data = {
                id: id,
                name: 'vinay'
            };
            cb(null, data); 
        }
    }, 3000);
}

function getData(err,data){
    if(err){
        console.log(`${err}: invalid input`);
    }
    else{
        console.log(data);
    }
}
fetchData(0,getData);