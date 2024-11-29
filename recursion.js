export function factorial(n){
    if(n==0 || n==1){
        return 1;
    }
    return n*factorial(n-1);
};

export function stringReverse(string){
    if(string===''){
        return '';
    }
    return stringReverse(string.substring(1))+string.charAt(0);
};

export function palindrome(input){
    if(input.length===0|| input.length===1){
        return true;
    }
    if(input.charAt(0)===input.charAt(input.length-1)){
        return palindrome(input.substring(1,input.length-1))
    }
    return false;
};

export function decimalToBinary(decimal){
    if(decimal === 0) return '0';
    if(decimal === 1) return '1';

    return decimalToBinary(Math.floor(decimal/2))+(decimal%2);
}

export function sumOfNaturalNum(number){
    if(number<=1){
        return 1;
    }
    return number+sumOfNaturalNum(number-1);
}

export function binarySearch(arr, target,left=0,right=arr.length-1){
    if(left>right){
        return -1
    }
    const mid=Math.floor(left+right/2);

    if(arr[mid]===target){
        return `${target} at position ${mid+1}`;
    }
    if(target<arr[mid]){
        return binarySearch(arr,target,left,mid-1);
    }
    return binarySearch(arr,target,mid+1,right);
}

export function fibonacciNonOptimized(number){
    if(number===0) return 0;
    if(number===1) return 1;

    return fibonacciNonOptimized(number-1)+fibonacciNonOptimized(number-2);
}

export function fibonacciOptimized(number,memo={}){
    if(number in memo){
        return memo[number];
    }

    if(number===0) return 0;
    if(number===1) return 1;

    memo[number]=fibonacciOptimized(number-1,memo)+fibonacciOptimized(number-2,memo);

    return memo[number];
}


export function mergeSort(arr){
    if(arr.length<=1) return arr;

    const mid=Math.floor(arr.length/2);

    const left=arr.slice(0,mid);
    const right=arr.slice(mid);

    return merge(mergeSort(left),mergeSort(right));
}
function merge(left,right){
    const result=[];

    while(left.length && right.length){
        if(left[0]<=right[0]){
            result.push(left.shift());
        }else{
            result.push(right.shift());
        }
    }

    return [...result,...left,...right];
}