#week-1-project
Challenge 1: Student Grade Generator (Toy Problem)

Write a function that prompts the user to input student marks. The input should be between 0 and 100. The output should correspond the correct grade, as shown below: 

        A > 79, B - 60 to 79, C -  59 to 49, D - 40 to 49, E - less 40.
- Write a function studentGrader which takes marks scored as an arguement. 
- Using if else if statements loop to check marks against the score card. 
- Expect grades to be assigned according to this grades list: A > 79, B - 60 to 79, C -  59 to 49, D - 40 to 49, E - less 40. 
- The marks inputs must be between 0 - 100.
- If marks enter not within specified range log "Enter marks between 0 - 100"

Challenge 2: Speed Detector (Toy Problem)

Write a program that takes the speed of a car as input e.g 80. If the speed is less than 70, it should print “Ok”. Otherwise, for every 5 km/s above the speed limit (70), it should give the driver one demerit point and print the total number of demerit points.

   > For example, if the speed is 80, it should print: “Points: 2”. If the driver gets more than 12 points, the function should print: “License suspended”.
- Creates a function to detect speed that takes speed as input
- Uses if else if to loop through the conditions,
- logs Ok if speeds below a speed limit of 70kph, 
- Assigns a point for every 5kph, above the speed limit,
- if points exceed 12 it logs "Licence suspended"

Challenge 3: Net Salary Calculator (Toy Problem)

Write a program whose major task is to calculate an individual’s Net Salary by getting the inputs of basic salary and benefits. Calculate the payee (i.e. Tax), NHIF Deductions, NSSF Deductions, gross salary, and net salary. 

NB: Use KRA, NHIF, and NSSF values provided in the link below.

- https://www.aren.co.ke/payroll/taxrates.htm Links to an external site.

Links to an external site.-  Links to an external site.Links to an external site.

- www.kra.go.ke/en/individual/calculate-tax/calculating-tax/paye
- Write a function that calculates netsalary it takes in salary and benefits calculates Paye, nhif deduction, gross salary and net salary

- Creates a function that takes salary and benefits as input,
- returns paye, nhif deduction, nssf deduction, net pay and gross pay,
- Declared a variable to hold the value of personal relief,
- declared a variable to hold nhif deduction, uses if else if to loop through nhif deduction bands.
- Creates a variable to hold nssf deductions, nssf is paid at a rate of 6% of gross pay
-creates a variable to hold value of paye, uses if else if to loop through the tax bands
- declared a variable to hold the value of housing deduction which is calculated, at rate of 1.5% the gross pay
- declare a variable to hold the calculated value of net pay
- returns the grosspay, nhif deduction, nssf deduction, paye and net salary