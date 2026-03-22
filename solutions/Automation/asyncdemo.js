//Asynchronous programming in JavaScript using async/await
function delay(){ 
   return new Promise(resolve => setTimeout(resolve, 5000));
}

async function test(){
    console.log("Before delay");
    //non-blocking code execution using async/await
    await delay();
    console.log("After delay");
}
test();


