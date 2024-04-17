function factorial(n) {
    if(n === 0) return 1;
    else return n * factorial(n - 1);
}


function old_e(n) {
    if(n === 0) return 1;
    else return 1.0 / factorial(n) + e(n - 1);
}

function e(n) 
{
    var sum = 1
    var fact = 1;
    var i = 1;

    while (i <= n) 
    { 
        fact *=i;
        sum += (1 / fact);
        i++;
    }
    
    return sum;
}
