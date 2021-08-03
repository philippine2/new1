/*
Print out all odd numbers from 1 to 20


for(var num=1; num<=20; num++ ){
    console.log(num)
}

*/ 

/*

Sum numbers from 1 to 5, printing out the current number and sum so far at each step of the way

var sum = 0

for(var num =1; num<=5 ; num++){

   sum = num+ sum

 console.log( "Num: ", num , "Sum:" ,sum )
    }
    */

    // Add something in aARAY:
     var user= ["ball", "purse", "car"]
     user.push("lake");
     console.log(user)
     
     // remove something in Array:
     var user= ["lake","love", "lie"]
     user.pop()
     console.log(user)
     
     //Access/Update
     
     var user=["lac","love","li"]
     console.log(user[0])
     user[1]="Martin"
     console.log(user);
     
 var arr = [2,4,6,8,10];
for (var i = 0; i < arr.length; i++) {        
    console.log(i);             // prints the index       
    console.log(arr[i]);        // prints the array value at that index
}

var arr = [8,6,7,5,3,0,9]
for(var i = 0; i < arr.length; i++){    
    console.log(arr[i]);
}


var arr = [7,3,8,4,2,0,1];
for(var i = 0; i < arr.length; i++){ 
    if(arr[i] % 2 == 0){
        console.log(arr[i]);
    } 
    else{
        console.log("That is odd!");
    }
}

var arr = [1,3,8,-5,0,-2,4,-1];
var newArr = [];
for(var i = 0; i< arr.length; i++){
    if(arr[i] < 0){
        newArr.push(arr[i]);
        arr[i] = arr[i] * -1;
    }
    else if(arr[i] == 0){
        arr[i] = "Zero";
    }
    else{
        arr[i] = arr[i] * -1;
    }
}
console.log(arr);
console.log(newArr);