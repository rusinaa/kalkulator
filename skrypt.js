function wyczysc()
{
    document.getElementById("ekran").innerHTML = "0";
}
function removeZero()
{
    var value = document.getElementById("ekran").innerHTML;
    if (value=="0") 
    {
        value=" "
        document.getElementById("ekran").innerHTML=value;
    }
}
function procent() 
{
    removeZero()
    var value = document.getElementById("ekran").innerHTML;
    value = value / 100;
    document.getElementById("ekran").innerHTML = value;
}

function oblicz()
{
    removeZero()
    var equation = document.getElementById("ekran").innerHTML
    var solved = eval(equation)
    document.getElementById("ekran").innerHTML=solved;
}

function wyswietl(value) 
{
   removeZero()
    document.getElementById("ekran").innerHTML += value;
}
