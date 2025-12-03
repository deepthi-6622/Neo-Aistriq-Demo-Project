console.log("hi");
console.log("start");
setTimeout(()=>{
    console.log("After 3 seconds");
    
},3000);

let p=new Promise((resolve,reject)=>{
    let url="https://cataas.com/cat/gif";
    if(url){
        resolve('the data is fetched')
    }else{
        reject('the data is failed to fetch')
    }
})

console.log(p);

p.then((data)=>{
    console.log(`${data} successfully`);
    
}).catch((error)=>{
    console.log(`${error} due to netowrk issue`);
    
})

console.log('start');
setTimeout(()=>{
    console.log("after one seconds");
    
},1000)
Promise.resolve().then(()=>{
    console.log("data");
    
})
console.log("end");
console.log("hello");
console.log("hi");

// fetch('https://cataas.com/api/cats?tags=cute').then((data)=>data.json()).then((data)=>console.log(data))
// .catch((err)=>console.log('invalid data'+err))
