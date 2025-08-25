/* salary slip*/

let Ename = 'Diya Dhamanda';
let Bsalary = 10000;
let hra = Bsalary * 0.2;
let da = Bsalary * 0.5;
let ma = Bsalary * 0.03;
let ta = Bsalary * 0.08;
let pf = Bsalary * 0.12;
let tds = Bsalary * 0.05;
let pt = 500;


let gross = Bsalary + hra + da + ma + ta;
let deduction = pt + pf + tds;
let netsalary = gross - deduction;


console.log();
console.log("*** EMPLOYEE SALARY SLIP ***")
console.log();
console.log("Employee's Name " +Ename);
console.log("Employee's Basic Salary " +Bsalary);
console.log("Employee's HRA " +hra);
console.log("Employee's  Dearness allowance" +da);
console.log("Employee's Medical Allowance " +ma);
console.log("Employee's Provident Fund " +pf);
console.log("Employee's Tax Deductiona at Source " +tds);
console.log("Employee's Professional tax " +pt);
console.log("-------------------------")
console.log("Employee's Gross Slaray " +gross);
console.log("Employee's salary deduction " +deduction);
console.log("-------------------------")
console.log("Employee's Net Salary " +netsalary);









