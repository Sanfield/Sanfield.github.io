function fomatFloat(arc,n){
    let a=Math.round(arc*Math.pow(10,n));
    return a/Math.pow(10,n);
}

// console.log(fomatFloat(12.2,4));

function round2(num,n){
    var dnum=Math.pow(10,n);
    if(Math.floor(num*dnum*10)%5 ==0 && Math.floor(num*dnum*10) && Math.floor(num*dnum)%2==0){
        return Math.floor(num*dnum)/dnum;
    }else {
        return Math.round(num,n);
    }
    // console.log(max);
    // return max;
}

console.log(round2(13.01,3));

