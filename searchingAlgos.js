function linearSearch(arr,x){
    for(var i=0;i<arr.length;i++){
        if(arr[i] == x){
            return i;
        }
    }
    return false;
}

var x = linearSearch([24,8,23,3],22);
console.log(x);


function isum(n){
    var sum = 0;
    for(var i=1;i<=n;i++){
        sum += i;
    }
    return sum ;
}

x = isum(3);
console.log(x);

function iFactorial(n){
    var prod = 1;
    for(var i=1;i<=n;i++){
        prod = prod * i ; 
    }
    return prod;

}

x = iFactorial(4);
console.log(x);

function rFactorial(n){
    if(n==1){
        return 1;
    }
    return rFactorial(n-1) * n;
}

x = rFactorial(4);
console.log(x);

function iFibonacci(n){
    var fibs =[0 , 1];
    for(var i=0;i<n;i++){
        fibs.push(fibs[0] + fibs[1]);
        console.log(fibs);
        fibs.shift();
    }
    return fibs[0];
}

x = iFibonacci(5);
console.log(x);

function rFibonacci(n){
    if(n == 0){
        return 0;
    }
    if(n == 1){
        return 1;
    }
    return rFibonacci(n-1) + rFibonacci(n-2);
}

x = rFibonacci(6);
console.log(x);