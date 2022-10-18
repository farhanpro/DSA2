function CheckPalindrome(n)
{
    let backward =[];
    let convertToString = n.toString();
    // console.log(typeof(convertToString));
    for(i=convertToString.length;i>=0;i--)
    {
        backward.push(convertToString[i]);
    }
    let name = backward.join("");
    if(convertToString == name)
    {
        return true;
    }
    else 
    {
        return false
    }
    
}

console.log(CheckPalindrome("121"));