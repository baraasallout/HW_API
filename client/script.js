fetch('http://localhost:3000/user?name=bsalo',{
    method:'GET',
    headers: {
        'Content-Type': 'application/json',
      },
}).then(res=>res.json()).then(val=>console.log(val))
.catch(err=>{
    console.log(err);
})


fetch('http://localhost:3000/user',{
    method:'POST',
    headers: {
        'Content-Type': 'application/json',
      },
      body:JSON.stringify({ 
        name: "baraasallout", 
        message: "success" 
       }), 
}).then(res=>res.json()).then(val=>console.log(val))
.catch(err=>{
    console.log(err);
})
