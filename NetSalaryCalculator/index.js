// Function to calculate PAYE (Tax)
function calculatePAYE(annualTaxablePay) {
    const payeRates = [
        { min: 0, max: 288000, rate: 0.1 },
        { min: 288001, max: 388000, rate: 0.25 },
        { min: 388001, max: 6000000, rate: 0.3 },
        { min: 6000001, max: 9600000, rate: 0.325 },
        { min: 9600001, max: Infinity, rate: 0.35 }
    ];

    // Calculate monthly taxable pay
    const monthlyTaxablePay = annualTaxablePay / 12;

    // Find applicable tax rate
    let taxRate = 0;
    for (let i = 0; i < payeRates.length; i++) {
        if (monthlyTaxablePay > payeRates[i].min && monthlyTaxablePay <= payeRates[i].max) {
            taxRate = payeRates[i].rate;
            break;
        }
    }

    // Calculate PAYE (Tax)
    const paye = (monthlyTaxablePay * taxRate) * 12;
    return paye;
}

// Function to calculate NHIF deductions based on the given rates and gross pay
function calculateNHIF(grossPay) {
    // NHIF rates effective from 1 April 2015
    const nhifRates = [
        { min: 0, max: 5999, deduction: 150 },
        { min: 6000, max: 7999, deduction: 300 },
        { min: 8000, max: 11999, deduction: 400 },
        { min: 12000, max: 14999, deduction: 500 },
        { min: 15000, max: 19999, deduction: 600 },
        { min: 20000, max: 24999, deduction: 750 },
        { min: 25000, max: 29999, deduction: 850 },
        { min: 30000, max: 34999, deduction: 900 },
        { min: 35000, max: 39999, deduction: 950 },
        { min: 40000, max: 44999, deduction: 1000 },
        { min: 45000, max: 49999, deduction: 1100 },
        { min: 50000, max: 59999, deduction: 1200 },
        { min: 60000, max: 69999, deduction: 1300 },
        { min: 70000, max: 79999, deduction: 1400 },
        { min: 80000, max: 89999, deduction: 1500 },
        { min: 90000, max: 99999, deduction: 1600 },
        { min: 100000, max: Infinity, deduction: 1700 }
    ];

    // Find applicable NHIF deduction
    let nhifDeduction = 0;
    for (let i = 0; i < nhifRates.length; i++) {
        if (grossPay > nhifRates[i].min && grossPay <= nhifRates[i].max) {
            nhifDeduction = nhifRates[i].deduction;
            break;
        }
    }

    return nhifDeduction;
}

// Function to calculate NSSF deductions based on the given rates and pensionable pay
function calculateNSSF(pensionablePay) {
    // NSSF rates effective from February 2024 onwards
    const tierIRate = 0.06;
    const tierIIMin = 7001;
    const tierIIRate = 0.06;

    let nssfTierIDeduction = 0;
    let nssfTierIIDeduction = 0;

    // Calculate Tier I NSSF deduction
    if (pensionablePay <= 7000) {
        nssfTierIDeduction = pensionablePay * tierIRate;
    } else {
        nssfTierIDeduction = 7000 * tierIRate;
    }

    // Calculate Tier II NSSF deduction
    if (pensionablePay > tierIIMin) {
        nssfTierIIDeduction = (pensionablePay - tierIIMin) * tierIIRate;
    }

    // Accumulative NSSF deduction
    const nssfDeduction = nssfTierIDeduction + nssfTierIIDeduction;
    return nssfDeduction;
}

// Function to calculate net salary based on basic salary, benefits, and other deductions
function calculateNetSalary(basicSalary, benefits) {
    // Getting the annual taxable pay
    const annualTaxablePay = basicSalary * 12 + benefits;

    // Getting PAYE (Tax)
    const paye = calculatePAYE(annualTaxablePay);

    // Getting NHIF deduction
    const nhif = calculateNHIF(basicSalary);

    // Getting NSSF deduction 
    const nssf = calculateNSSF(basicSalary);

    // Finding the gross salary which is given by the basic Salary + Benefits
    const grossSalary = basicSalary + benefits;

    // Calculate net salary
    const netSalary = grossSalary - paye - nhif - nssf;

    // Return results
    return {
        grossSalary: grossSalary,
        paye: paye,
        nhif: nhif,
        nssf: nssf,
        netSalary: netSalary
    };
}
// Taking an example
const basicSalary = 200000;
const benefits = 50000; 

const salaryDetails = calculateNetSalary(basicSalary, benefits);
console.log("Gross Salary: ", salaryDetails.grossSalary.toFixed(2), " Ksh");