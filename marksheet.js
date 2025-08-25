let sname = 'Divya';
let maths = 75;
let science = 73;
let english = 80;
let hindi = 77;
let gujarati = 76;

let total = maths + science + english + hindi + gujarati;
let percentage = total / 5;

let grade;

if (percentage >= 90) {
    grade = "A+";
} else if (percentage >= 80) {
    grade = "A";
} else if (percentage >= 70) {
    grade = "B";
} else if (percentage >= 60) {
    grade = "C";
} else if (percentage >= 50) {
    grade = "D";
} else {
    grade = "Fail";
}

console.log("Total Marks: " + total);
console.log("Percentage: " + percentage + "%");
console.log("Grade: " + grade);
