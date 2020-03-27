//@ts-check
function repeatTests(){
    console.log(repeat("bonjour",4));
}
function truncateTests(){
    console.log(truncate("unchanged text", 20)); // => unchanged text
    console.log(truncate("unchanged text", 14)); // => unchanged text
    console.log(truncate("truncated text", 10)); // => truncat... 
}

function isPalindromeTests(){
    console.log(isPalindrome("bonjour")); // => false
    console.log(isPalindrome("toto")); // => false
    console.log(isPalindrome("kayak")); // => true
    console.log(isPalindrome("ressasser")); // => true
}

function swapCaseTests(){
    console.log(swapCase("HELLO")); // => hello
    console.log(swapCase("bye")); // => BYE
    console.log(swapCase("GooD NighT")); // => gOOd nIGHt
}
