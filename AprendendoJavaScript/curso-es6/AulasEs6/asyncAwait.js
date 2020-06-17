const minhaPromise = () => new Promise((resolve, reject)   => {
    setTimeout(() => { resolve('OK') }, 2000);
});

const executaPromise = async() => {
    
   console.log(await minhaPromise())
   console.log(await minhaPromise())
   console.log(await minhaPromise())
    
    //const response = await minhaPromise();
    //console.log(response);
}

executaPromise();
