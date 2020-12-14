function palindrome(str) {
    let strMin = str.toLowerCase();
    console.log(strMin);
    if(str.split('').reserve().join('') === str) {
        consoel.log("Yes its a palindrome !")
    }
    else{
        consoel.log("This is not a palindrome")
    }

    }

palindrome("KaYak");