//document.getElementById("counter").innerText = 5;

let count =0 
let counTer = document.getElementById("counter")

function increment (){

    count=count+1
    counTer.innerText=count
    console.log(count)

}
function save (){
    console.log(count)

}
