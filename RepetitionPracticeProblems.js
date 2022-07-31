function Tofahrenheit (){
    var degC = prompt("Please enter Temperature in Celcius");
    let degF = (degC * 9/5) +32;
    console.log(degF);
    
}

Tofahrenheit()


function ToCelcius (){
    var degF = prompt("Please enter Temperature in Fahrenheit");
    let degC = (degF - 32) * 5/9;
    console.log(degC);
    
}

ToCelcius();
