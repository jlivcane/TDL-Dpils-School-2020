let object = {a: 1, b: 2};
let toArray=[];
for(let key in object){
    toArray.push(key, object[key]);
}
console.log(toArray)
 