// Creates a function to detect speed that takes speed as input
function speedDetector(speed) {
// Uses if else if to loop through the conditions
// logs Ok if speeds below a speed limit of 70kph, 
// Assigns a point for every 5kph, above the speed limit, 
    if (speed <= 70) {
        console.log("Ok")
    } else if (speed > 70) {
        let points = (speed - 70)/5
        if (points <= 12) {
            console.log(`points: ${points}`)
        } else console.log("Licence suspended")
// if points exceed 12 it logs "Licence suspended"
    }
}