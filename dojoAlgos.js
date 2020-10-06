function printOneto255(){
    for(var x=1;x<256;x++){
        console.log(x)
    }
}

printOneto255()

function oddNums(){
    var i = 1;
    while(i < 1001){
        console.log(i);
        i=i+2;
    }

}

oddNums()


function oddSum(){
    var my_sum = 0;
    for(var i=1;i<5001;i=i+2){
        my_sum += i;
    }
    console.log(my_sum)
}

oddSum()

function iterrate(arr){
    for(var i=0;i<arr.length;i++)
    console.log(arr[i]);
}

iterrate([1,3,5,7,9,13])

function findMax(arr){
    var max = arr[0];
    for (var i=1;i<arr.length;i++){
        if(arr[i]>max){
            max = arr[i];
        }
    }
    console.log(max);
}

findMax([-3,3,5,7])

function average(arr){
    var sum = 0;
    for(var i=0;i<arr.length;i++){
        sum += arr[i];
    }
    console.log(sum/arr.length);
}

average([1,3,5,7,20])


function arrayOdd(){
    var Y = [];
    for(var i=1;i<256;i=i+2){
        Y.push(i);
    }
    console.log(Y);
}

arrayOdd()

function greaterThanY(arr,y){
    var count = 0;
    for(var i=0;i<arr.length;i++){
        if(arr[i]>y){
            count++
        }
    }
    return count;
}

var x = greaterThanY([1,3,5,7],3);
console.log(x);

function squareValues(arr){
    for(var i=0;i<arr.length;i++){
        arr[i] = arr[i] * arr[i];
    }
    console.log(arr);
}

squareValues([1,5,10,-2])


function eliminateNegatives(arr){
    for(var i=0;i<arr.length;i++){
        if(arr[i]<0){
            arr[i] = 0;
        }
    }
    console.log(arr);
}

eliminateNegatives([1,5,10,-2])

function minMaxAvg([arr]){
    var min = arr[0];
    var max = arr[0];
    var sum = 0;
    for(var i=1;i<arr.length;i++){
        if(arr[i] < min){
            min = arr[i];
        }
        if(arr[i]> max){
            max = arr[i];
        }
        sum += arr[i];
    }
    // console.log("max equals ",max , "min equals " , min,"average equals ",sum/arr.length);
    console.log(max);
}

minMaxAvg([1,5,10,-2])

function shiftValues(arr){
    var x = arr.length;
    for(var i=0;i<x-1;i++){
        arr[i] = arr[i+1];
    }
    arr[x-1] = 0;
    console.log(arr);
}

shiftValues([1,5,10,7,-2])

function numberToString(arr){
    for(var i=0;i<arr.length;i++){
        if(arr[i] < 0){
            arr[i] = 'Dojo';
        }
    }
    console.log(arr);
}

numberToString([-1,-3,2])

function randomArray(){
    var x = [];
    for (var i=0 ; i < 10 ;i++){
        y = Math.floor(Math.random() * 100);
        x.push(y);
    }
    console.log(x);
    for(var i=0;i<x.length;i++){
        console.log(x[i]);
    }
}

randomArray()

function swapValues(arr){
    var x = arr.length;
    for(var i=0;i<x ;i++){
        temp = arr[0];
        arr[0] =  arr[x-1];
        arr[x-1] = temp;
    }
    console.log(arr);
}

swapValues([2,3,5,7,6])

function reverse(arr){
    for(var i =0;i<arr.length/2;i++){
        temp = arr[i];
        arr[i]=arr[arr.length-1-i];
        arr[arr.length-1-i] = temp;
        // console.log(arr[i])
    }
    console.log(arr);
}

reverse([-3,5,3,2,10])

function insertXinY(arr, x , y){
	arr.push(0);
	for(var i=arr.length-1;i>y;i--){
		arr[i] = arr[i-1];
}
	arr[y] = x;
	console.log(arr);
}

insertXinY([1,3,5,7],2,10)

function removeNegatives(arr){
    var count = 0;
    for (var i=0;i<arr.length;i++){
        if(arr[i] < 0){
            count++;
        }
        else{
            arr[i-count] = arr[i];
        }
    }
    while(count > 0){
        arr.pop();
        count--;
    }
    console.log(arr);
    
}

removeNegatives([0,-1,2,-3,4,-5,6])