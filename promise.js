let myPromise = new Promise((resolve,rejected)=>{
    let success = false
    setTimeout(()=>{
        if(success){
            resolve("success")
        }else{
            rejected("rejected")
        }
    },1000)
})


myPromise.then(result=>console.log(result))
.catch(err=>console.log(err))