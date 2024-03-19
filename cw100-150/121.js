console.clear();

function bmi(weight, height) {
    const bmi = (weight / (height * height)).toFixed(2);
    console.log(bmi);
    switch (true) {
        case bmi < 18.5:
            return "Underweight";
        case 18.5 <= bmi && bmi < 25:
            return "Normal";
        case 25 <= bmi && bmi < 30:
            return "Overweight";
        case 30 <= bmi:
            return "Obese";
    }
}

console.log(bmi(80, 1.80), "Normal");