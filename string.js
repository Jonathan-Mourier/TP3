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



