const A_CODE = 'A'.charCodeAt(0);
function ret13(str)
{
    let output='';
    for(let c of str)
    {
        if(!/[A-Z]/.test(c))
        {
            output += c;
        }
        else {
            let code = c.charCodeAt(0);
            code -= 13;
            if(code < A_CODE)
            {
                code += 26;
            }
            output += String.fromCharCode(code);
        }
    }
    return output;

}

// change the inputs below test
console.log(
ret13("SERR PBQR PNZC"));