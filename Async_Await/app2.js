var objIdMap=new WeakMap, objectCount = 0;
function objectId(object){
  if (!objIdMap.has(object)) objIdMap.set(object,++objectCount);
  return objIdMap.get(object);
}



const p = new Promise((res, rej) => {
    res(1);
  })
  
  //an async function without an await expression will run synchronously
  async function asyncReturn() {
    console.log("asyncReturn");
    return p;
  }

  //If there is an await expression inside the function body, however, the async function will always complete      
  async function asyncReturnWithAwait() {
    console.log("asyncReturnWithAwait");
    return await p;
  }
  
  function basicReturn() {
    console.log("basicReturn");
    return Promise.resolve(p);
  }

  const p3 = asyncReturnWithAwait();
  const p1 = basicReturn();
  const p2 = asyncReturn();


  console.log(objectId(p1));
  console.log(objectId(p2));
  console.log(objectId(p3));

  
  console.log(p === p1 ); // true
  console.log(p === p2); // false
  console.log(p === p3); // false