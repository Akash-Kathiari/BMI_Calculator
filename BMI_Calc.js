function bmiCalculator (weight, height) {
    var bmi= (weight/(height * height));
    
    if (bmi<18.5){
    console.log( "Your BMI is " + bmi + ", so you are underweight.");
}
if (bmi>=18.5 && bmi<=24.9){
    console.log( "Your BMI is " + bmi + ", so you have a normal weight.");
}
if (bmi>24.9){
    console.log( "Your BMI is " + bmi + ", so you are overweight.");
}
}


var test=bmiCalculator (63, 1.7);