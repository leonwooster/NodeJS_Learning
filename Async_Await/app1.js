function resolveAfter2Seconds() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('resolved');
      }, 2000);
    });
  }

  function normal1()
  {
    setTimeout(() => {
        console.log("normal1");
    }, 1000);
  }

  function normal2()
  {
    setTimeout(() => {
        console.log("normal2");
    }, (3000));
  }

  
  async function asyncCall() {
    console.log('calling');
    normal1();
    const result = await resolveAfter2Seconds();
    normal2();
    console.log(result);
    console.log("finish");
    // expected output: "resolved"
  }
  
  asyncCall();