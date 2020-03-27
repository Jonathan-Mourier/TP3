//@ts-check
function repeat(s,n){
    return s.repeat(n);
}

function truncate(s,n){
    let text = s.slice(0,n-3);
    if (s.length==n){
        return s;
    }
    if (!(s==text)){
        return text+"...";
    }
    return text;
}

function isPalindrome(s){
    let size=s.length
    let j=size-1;
    for (let i=0;i<size/2;i++){
        if (s[i]!=s[j]){
            return false;
        }
        else{
            j--;
        }
    }
    return true; 
}

function swapCase(x){
    let y =x.length;
    let z = "";
    for (let i = 0; i < y; i++) {
        if (x[i].charAt() <= 'Z' && x[i].charAt() >= 'A') {
            z += x[i].toLowerCase();
        } else {
            z += x[i].toUpperCase();
        }
    }
    return z;
}



