//Multiply each value in the array by its array position

var testArr = [6,3,5,1,2,4]
var newArray=[]

for(i=0; i< testArr.length ; i++){
    newArray= testArr[i] * i
    console.log(newArray)
}

//Print each array value and the sum so far
var testArr = [6,3,5,1,2,4]
var sum=0

for(i=0; i<testArr.length; i++){

sum=testArr[i]+sum
    console.log("Num: ",testArr[i], "Sum", sum )
}



