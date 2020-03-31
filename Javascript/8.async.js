//Promises are used for Async behaviour in javascript.

//creating Promises.

const getIDs = new Promise((resolve,reject) => { //Executer function for promises.
    setTimeout(() => {
        resolve([1,2,3,4])
    }, 1500);
})
const getRecipe = recID => {
    return new Promise((resolve,reject)=>{
        setTimeout((id) => {
            const recipe = {
                title: 'Fresh Tuna',
                author: 'Sam'
            }
            resolve(`${id} : ${recipe.title}`)
        }, 1000,recID)
    })
};
//Consuming promises with .then() method (Method 1)
/*
getIDs.then((ids)=>{
   return getRecipe(ids[2])
    
})
.then((recipe)=>{
    console.log(recipe);
    
})
.catch(error=>{
    console.log(error);
    
})
*/
//Consuming promises with Async- await (Method 2)

async function asyncAwait() {
    const ids = await getIDs
    const recipe = await getRecipe(ids[2]);
    console.log(recipe)
    console.log(ids);
    
}
asyncAwait()
