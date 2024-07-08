 function calculateBMI(weight,height) {
        let BMI = weight/(height * height)
        return BMI;
 }

 function interpretBMI(bmi){
    if(bmi < 18.5) {
        return "underweight";
 } else if (bmi< 25) {
    return "Normal";
 }else if (bmi <30) {
    return "Overweight"
 } else {
    return"Obese"
 }
 }

 let weight =70;
 let height =1.75;

 let bmi = calculateBMI (weight , height);
 console.log ("BMI",bmi);
 console.log("Interpretation",interpretBMI(bmi));
