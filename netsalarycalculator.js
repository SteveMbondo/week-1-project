// Creates a function that takes salary and benefits as input,
// returns paye, nhif deduction, nssf deduction, net pay and gross pay,
function netSalaryCalculator(salary, benefits) {
    const grossPay = salary + benefits
// Declared a variable to hold the value of personal relief
    const personalRelief = 2400
    // declared a variable to hold nhif deduction, uses if else if to loop through nhif deduction bands.
    let nhifDeduction = 0
    if (grossPay < 6000) {
        nhifDeduction = 150
    } else if(grossPay >= 6000 && grossPay < 8000) {
        nhifDeduction = 300
    } else if (grossPay >= 8000 && grossPay < 12000) {
        nhifDeduction = 400
    } else if ( grossPay >= 12000 && grossPay < 15000) {
        nhifDeduction = 500
    } else if ( grossPay >= 15000 && grossPay < 20000) {
        nhifDeduction = 600
    } else if ( grossPay >= 20000 && grossPay < 25000) {
        nhifDeduction = 750
    } else if ( grossPay >= 25000 && grossPay < 30000) {
        nhifDeduction = 850
    } else if ( grossPay >= 30000 && grossPay < 35000) {
        nhifDeduction = 900
    } else if ( grossPay >= 35000 && grossPay < 40000) {
        nhifDeduction = 950
    } else if ( grossPay >= 40000 && grossPay < 45000) {
        nhifDeduction = 1000
    } else if ( grossPay >= 45000 && grossPay < 50000) {
        nhifDeduction = 1100
    } else if ( grossPay >= 50000 && grossPay < 60000) {
        nhifDeduction = 1200
    } else if ( grossPay >= 60000 && grossPay < 70000) {
        nhifDeduction = 1300
    } else if ( grossPay >= 70000 && grossPay < 80000) {
        nhifDeduction = 1400
    } else if ( grossPay >= 80000 && grossPay < 90000) {
        nhifDeduction = 1500
    } else if ( grossPay >= 90000 && grossPay < 100000) {
        nhifDeduction = 1600
    } else nhifDeduction = 1700
// Creates a variable to hold nssf deductions, nssf is paid at a rate of 6% of gross pay
    let nssfDeduction = grossPay * 0.06
    if (nssfDeduction > 6000) {
        nssfDeduction = 6000
    } else if (nssfDeduction <= 6000) {
        nssfDeduction = grossPay * 0.06
    }
// creates a variable to hold value of paye, uses if else if to loop through the tax bands
    let paye = 0
    if (grossPay < 24000) {
            paye = (grossPay - personalRelief - nhifDeduction - nssfDeduction)
    } else if (grossPay > 24000 && grossPay <= 32333) {
            paye = (grossPay - personalRelief - nhifDeduction - nssfDeduction) * 0.25
    } else if (grossPay > 32344 && grossPay <= 500000) {
            paye = (grossPay - personalRelief - nhifDeduction - nssfDeduction) * 0.3
    } else if (grossPay > 500000 && grossPay <= 800000) {
            paye = (grossPay - personalRelief - nhifDeduction - nssfDeduction) * 0.325
    } else paye = (grossPay - personalRelief - nhifDeduction - nssfDeduction) * 0.35
// declared a variable to hold the value of housing deduction which is calculated,
// at rate of 1.5% the gross pay
    const housingDeduction = grossPay * 0.015
// declare a variable to hold the calculated value of net pay.
    let netSalary = grossPay - paye - housingDeduction
// returns the grosspay, nhif deduction, nssf deduction, paye and net salary
    return {
        grossPay,
        nhifDeduction,
        nssfDeduction,
        paye,
        netSalary,
    }
}