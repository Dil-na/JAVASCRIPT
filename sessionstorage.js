function addData(){
    sessionStorage.setItem("name","abhi")
}

function getData(){
    let data = sessionStorage.getItem("name")
    console.log(data);
}

function removeData(){
    sessionStorage.removeItem("name")
}

function clearData(){
    sessionStorage.clear()
}