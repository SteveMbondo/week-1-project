// Creates a fucnction that takes marks as input,
function studentGrader(marks) {
// Uses if else if statement to loop through the marks of each assigned grade,
// logs the Grade appropriately
    if (marks < 40) {
        console.log("Grade: E")
    } else if (marks >= 40 && marks < 49) {
        console.log("Grade: D")
    } else if (marks >= 49 && marks < 60) {
        console.log("Grade: C")
    } else if (marks >= 60 && marks < 79) {
        console.log("Grade: B")
    } else if (marks >= 79 && marks <= 100) {
        console.log("Grade: A")
    } else console.log("Enter marks between 0 - 100")
}